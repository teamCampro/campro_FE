import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async (req: NextRequest) => {
  const location = await req.nextUrl.searchParams.get('location');

  const adult = parseInt((await req.nextUrl.searchParams.get('adult')) ?? '0');
  const child = parseInt((await req.nextUrl.searchParams.get('child')) ?? '0');
  const pet = await req.nextUrl.searchParams.get('pet');
  const facilities = await req.nextUrl.searchParams.get('facilities');
  const theme = await req.nextUrl.searchParams.get('theme');
  const trip = await req.nextUrl.searchParams.get('trip');
  const stay = await req.nextUrl.searchParams.get('stay');

  try {
    const db = await pool.getConnection();

    let query = `SELECT cz.id, cz.name, cz.address, cz.display_address as displayAddress, cz.lat, cz.lng, 
                    cz.camp_image as campImage, a.minimumAmount, cz.keyword 
                   FROM camping_zone cz
                  INNER JOIN (
                    SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
                      FROM camping_zone cz
                     INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
                     GROUP BY czs.camping_zone_id
                  ) a ON cz.id = a.camping_zone_id
                  INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
                  WHERE 1 = 1`;

    if (location) {
      query += ` AND address LIKE '%${location}%'`;
    }

    if (adult || child) {
      query += ` AND czs.min_people <= ${adult + child}`;
      query += ` AND czs.max_people >= ${adult + child}`;
    }

    if (pet) {
      query += ` AND czs.pet_yn IS TRUE`;
    }

    query += getWhereQuery(facilities, 'cz.facilities');
    query += getWhereQuery(theme, 'czs.theme');
    query += getWhereQuery(trip, 'cz.onboarding_keyword');
    query += getWhereQuery(stay, 'cz.onboarding_keyword');

    query += ` GROUP BY cz.id`;

    const [filtedCampingZoneList] = await db.execute(query);

    db.release();
    return NextResponse.json({ result: filtedCampingZoneList });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};

const getWhereQuery = (queryParam: string | null, table: string) => {
  let whereQuery = '';

  if (queryParam) {
    const queryArray = queryParam.split(',');

    if (queryArray.length > 0) {
      if (queryArray.length === 1) {
        whereQuery += ` AND ${table} LIKE '%${queryArray[0]}%'`;
      } else {
        queryArray.forEach((f, i) => {
          if (i === 0) {
            whereQuery += ` AND (${table} LIKE '%${f}%'`;
          } else if (i === queryArray.length - 1) {
            whereQuery += ` OR ${table} LIKE '%${f}%')`;
          } else {
            whereQuery += ` OR ${table} LIKE '%${f}%'`;
          }
        });
      }
    }
  }

  return whereQuery;
};
