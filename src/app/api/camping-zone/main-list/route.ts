import { NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async () => {
  try {
    const db = await pool.getConnection();

    const [recommendList] = await db.execute(
      `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, keyword
        FROM camping_zone cz
      INNER JOIN (
      SELECT czs.camping_zone_id, MIN(czs.price) minimumAmount
        FROM camping_zone cz
      INNER JOIN camping_zone_site czs ON cz.id = czs.camping_zone_id
      GROUP BY czs.camping_zone_id
      ) a ON cz.id = a.camping_zone_id
      LIMIT 7`,
    );
    const [popularList] = await db.execute(
      `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, keyword
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
      `SELECT id, name, display_address as displayAddress, camp_image as campImage, a.minimumAmount, keyword
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

    db.release();
    return NextResponse.json({
      result: { recommendList, popularList, recentList },
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
