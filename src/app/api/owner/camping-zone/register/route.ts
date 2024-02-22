import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../libs/mysql';

export const POST = async (req: NextRequest) => {
  try {
    const czData = await req.json();
    const db = await pool.getConnection();
    const seasonString = JSON.stringify(czData.season);
    const facilitiesString = JSON.stringify(czData.facilities);
    const campSubImagesString = JSON.stringify(czData.campSubImages);

    const czInsertQuery = `
        INSERT INTO camping_zone (name, tel, boss_id, boss_email, business_number, tour_number, facilities,
            season, open_day, address, camp_image, plan_image, intro)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const czInsertResult: any = await db.execute(czInsertQuery, [
      czData.name,
      czData.tel,
      czData.bossId,
      czData.bossEmail,
      czData.businessNumber,
      czData.tourNumber,
      facilitiesString,
      seasonString,
      czData.openDay,
      czData.address,
      czData.campImage,
      czData.planImage,
      czData.intro,
    ]);

    const czDataImageId = czInsertResult[0].insertId;
    const czImageInsertQuery = `
        INSERT INTO camping_zone_sub_image (camping_zone_id, img_urls) VALUES (?, ?)`;

    await db.execute(czImageInsertQuery, [czDataImageId, campSubImagesString]);
    db.release();
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
