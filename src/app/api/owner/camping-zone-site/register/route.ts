import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../libs/mysql';

export const POST = async (req: NextRequest) => {
  try {
    const czSiteData = await req.json();
    const db = await pool.getConnection();
    const siteImagesString = JSON.stringify(czSiteData.siteImages);
    const siteImage = czSiteData.siteImages[0];
    const siteSizeString = JSON.stringify(czSiteData.siteSize);

    const czSiteInsertQuery = `
INSERT INTO camping_zone_site (camping_zone_id, name, min_nights, min_people, max_people, floor_type, pet_yn,
price, theme, camping_type, max_parking, site_size, check_in_time, check_out_time, site_image, parking_guide)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const czSiteInsertResult: any = await db.execute(czSiteInsertQuery, [
      czSiteData.campingZoneId,
      czSiteData.name,
      czSiteData.minNights,
      czSiteData.minPeople,
      czSiteData.maxPeople,
      czSiteData.floorType,
      czSiteData.petYN,
      czSiteData.price,
      czSiteData.theme,
      czSiteData.campingType,
      czSiteData.maxParking,
      siteSizeString,
      czSiteData.checkInTime,
      czSiteData.checkOutTime,
      siteImage,
      czSiteData.parkingGuide,
    ]);

    const czSiteId = czSiteInsertResult[0].insertId;
    const imageQuery = `
INSERT INTO camping_zone_site_sub_image (camping_zone_site_id, img_urls)
VALUES (?, ?)`;

    await db.execute(imageQuery, [czSiteId, siteImagesString]);

    const additionalOptionQuery = `
INSERT INTO camping_zone_site_additional_option
(camping_zone_site_id, option_name, price, option_order)
VALUES (?,?,?,?)`;

    const czSiteMapExecute = async () => {
      await Promise.all(
        czSiteData.options.map(async (optionData: any, index: any) => {
          await db.execute(additionalOptionQuery, [
            czSiteId,
            optionData.optionName,
            optionData.optionPrice,
            index + 1,
          ]);
        }),
      );
    };
    czSiteMapExecute();

    db.release();
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
