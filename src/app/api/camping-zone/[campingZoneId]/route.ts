import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async (
  req: NextRequest,
  { params }: { params: { campingZoneId: string } },
) => {
  try {
    const db = await pool.getConnection();

    const { campingZoneId } = params;

    const query = `
    SELECT camp_image campImage, img_urls imgUrls, name, address, tel, intro, facilities, plan_image planImage,
      manner_time_start mannerTimeStart, manner_time_end mannerTimeEnd, open_time openTime, next_open_date nextOpenDate,
      guide, refund_guide refundGuide, boss_name bossName, boss_company_name bossCompanyName, boss_address bossAddress,
      boss_email bossEmail, business_number businessNumber, tour_number tourNumber, lat, lng, tour, keyword
      FROM camping_zone cz
      INNER JOIN camping_zone_sub_image czsi ON cz.id = czsi.camping_zone_id
      WHERE cz.id = ?`;

    const [campingZoneDetail] = await db.execute(query, [campingZoneId]);

    const query2 = `SELECT name campingZoneSiteName, check_in_time checkInTime, check_out_time checkOutTime,
    price, camping_type campingType, max_people maxPeople, parking_guide parkingGuide, pet_yn petYn, id, min_nights minNights, site_image siteImage
    FROM camping_zone_site
    WHERE camping_zone_id = ?
  `;
    const query3 = `SELECT id reviewId, user_id userId, start_time startTime, update_time updateTime, star, review_keyword reviewKeyword, description FROM review WHERE camp_id = ?
`;

    const [campingZoneSiteList] = await db.execute(query2, [campingZoneId]);
    const [reviewList] = await db.execute(query3, [campingZoneId]);

    const result = {
      campingZoneDetail,
      campingZoneSiteList,
      reviewList,
    };

    db.release();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};
