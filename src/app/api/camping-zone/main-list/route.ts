import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';
import TYPE from '@/src/app/_constants/detail';

export const GET = async (req: NextRequest) => {
  const userId = req.nextUrl.searchParams.get('userId');

  try {
    const db = await pool.getConnection();

    const [popularList] = await db.execute(
      `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, onboarding_keyword as onboardingKeyword
      FROM camping_zone cz
     INNER JOIN (
    SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
      FROM camping_zone cz
     INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
     GROUP BY czs.camping_zone_id
     ) a ON cz.id = a.camping_zone_id
     LIMIT 7`,
    );

    const [recentList] = await db.execute(
      `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, onboarding_keyword as onboardingKeyword
      FROM camping_zone cz
     INNER JOIN (
    SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
      FROM camping_zone cz
     INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
     GROUP BY czs.camping_zone_id
     ) a ON cz.id = a.camping_zone_id
     ORDER BY created_at DESC
     LIMIT 7`,
    );
    let popularAnyList: any = popularList;
    let recentAnyList: any = recentList;
    const recommendAnyList: any = await getRecommendList(db, userId);
    db.release();
    return NextResponse.json({
      result: {
        /* recommendSecondList: await getSecondRecommendList(db, userId), */
        recommendFirstList: await getFirstRecommendList(db, userId),
        recommendList: recommendAnyList.map((item: any) => {
          return {
            ...item,
            onboardingKeyword: JSON.parse(item.onboardingKeyword),
          };
        }),
        popularList: popularAnyList.map((item: any) => {
          return {
            ...item,
            onboardingKeyword: JSON.parse(item.onboardingKeyword),
          };
        }),
        recentList: recentAnyList.map((item: any) => {
          return {
            ...item,
            onboardingKeyword: JSON.parse(item.onboardingKeyword),
          };
        }),
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};

const getRecommendList = async (db: any, userId: string | null) => {
  // 유저 id가 없는 경우, 기본적인 리스트를 보여준다.
  if (userId === null) {
    return await getDefaultRecommendList(db);
  }

  const selectUserInfoQuery = 'SELECT * FROM user_info WHERE id = ?';
  const [userInfoRow] = await db.execute(selectUserInfoQuery, [userId]);

  // userId는 있지만 유저가 없는 경우, 기본적인 리스트를 보여준다.
  if (userInfoRow.length === 0) {
    return await getDefaultRecommendList(db);
  }

  const userInfo: any = userInfoRow;
  const userOnboardingKeyword = JSON.parse(userInfo[0].onboarding_keyword);

  // user_info는 있지만, onboarding_keyword가 없는 경우, 기본적인 리스트를 보여준다.
  if (!userOnboardingKeyword) {
    return await getDefaultRecommendList(db);
  }

  const [campingZoneRows] =
    await db.execute(`SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, keyword, onboarding_keyword onboardingKeyword
      FROM camping_zone cz
    INNER JOIN (
    SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
      FROM camping_zone cz
    INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
    GROUP BY czs.camping_zone_id
    ) a ON cz.id = a.camping_zone_id`);

  const campingZoneList = campingZoneRows.map((cz: any) => {
    const onboardingKeyword = JSON.parse(cz.onboardingKeyword) ?? [];

    const matchCount = onboardingKeyword.filter((keyword: string) =>
      keyword.includes(keyword),
    ).length;

    return {
      ...cz,
      matchCount,
    };
  });

  return campingZoneList
    .sort((a: any, b: any) => b.matchCount - a.matchCount)
    .slice(0, 7)
    .map((cz: any) => ({
      id: cz.id,
      name: cz.name,
      displayAddress: cz.displayAddress,
      campImage: cz.campImage,
      minimumAmount: cz.minimumAmount,
      onboardingKeyword: cz.onboardingKeyword,
    }));
};

const getFirstRecommendList = async (db: any, userId: string | null) => {
  if (userId === null) {
    return [];
  }
  const selectUserInfoQuery = 'SELECT * FROM user_info WHERE id = ?';
  const [userInfoRow] = await db.execute(selectUserInfoQuery, [userId]);

  const userInfo: any = userInfoRow;
  console.log(userInfo);
  const userOnboardingKeyword = JSON.parse(userInfo[0].onboarding_keyword);

  if (!userOnboardingKeyword) {
    return [];
  }
  /*  console.log(userOnboardingKeyword[0]); */

  const [recommendFirstList] = await db.execute(
    `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, keyword, onboarding_keyword onboardingKeyword
    FROM camping_zone cz
  INNER JOIN (
  SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
    FROM camping_zone cz
  INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
  GROUP BY czs.camping_zone_id
  ) a ON cz.id = a.camping_zone_id
  WHERE cz.keyword LIKE '%${userOnboardingKeyword[0]}%'
ORDER BY RAND()
   LIMIT 7`,
  );

  return recommendFirstList;
};

const getSecondRecommendList = async (db: any, userId: string | null) => {
  if (userId === null) {
    return [];
  }

  const selectUserInfoQuery = 'SELECT * FROM user_info WHERE id = ?';
  const [userInfoRow] = await db.execute(selectUserInfoQuery, [userId]);

  const getRandomKeyword = () => {
    const randomNumber = Math.floor(Math.random() * 9);
    return TYPE.stay[randomNumber].type;
  };

  const userInfo: any = userInfoRow;

  const userOnboardingKeyword = JSON.parse(userInfo[0].onboarding_keyword);

  if (!userOnboardingKeyword) {
    return [];
  }

  const getOnboardingKeyword = () => {
    if (userOnboardingKeyword.indexOf(getRandomKeyword()) > -1) {
      userOnboardingKeywordRandom =
        userOnboardingKeyword[
          userOnboardingKeyword.indexOf(getRandomKeyword())
        ];
    } else {
      getRandomKeyword();
    }
  };

  let userOnboardingKeywordRandom = '';

  console.log(userOnboardingKeywordRandom);
  /*  console.log(userOnboardingKeyword[0]); */

  const [recommendFirstList] = await db.execute(
    `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, keyword, onboarding_keyword onboardingKeyword
    FROM camping_zone cz
  INNER JOIN (
  SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
    FROM camping_zone cz
  INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
  GROUP BY czs.camping_zone_id
  ) a ON cz.id = a.camping_zone_id
  WHERE cz.keyword LIKE '%${userOnboardingKeywordRandom}%'
ORDER BY RAND()
   LIMIT 7`,
  );

  return { recommendFirstList, userOnboardingKeywordRandom };
};

const getDefaultRecommendList = async (db: any) => {
  const [recommendList] = await db.execute(
    `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, onboarding_keyword AS onboardingKeyword
    FROM camping_zone cz
   INNER JOIN (
  SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
    FROM camping_zone cz
   INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
   GROUP BY czs.camping_zone_id
   ) a ON cz.id = a.camping_zone_id
   LIMIT 7`,
  );

  return recommendList;
};
