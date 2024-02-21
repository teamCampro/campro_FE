import { NextRequest, NextResponse } from "next/server";
import { pool } from "../../../libs/mysql";

export const POST = async (req: NextRequest) => {
    try {
        const czSiteData = await req.json();
        const db = await pool.getConnection();
        const siteImagesString = JSON.stringify(czSiteData.siteImages);
        const siteSizeString = JSON.stringify(czSiteData.siteSize);

        const czSiteInsertQuery = `
        INSERT INTO camping_zone_site (camping_zone_id, child_site_name, min_nights, min_people, floor_type, pet_yn, price,
        camping_type, max_parking, site_size, check_in_time, check_out_time)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        const czSiteInsertResult: any = await db.execute(czSiteInsertQuery,
            [czSiteData.campingZoneId, czSiteData.childSiteName, czSiteData.minNights, czSiteData.minPeople,
            czSiteData.floorType, czSiteData.petYN, czSiteData.price, czSiteData.campingType,
            czSiteData.maxParking, siteSizeString, czSiteData.checkInTime, czSiteData.checkOutTime,
        ]);

        const czSiteImageId = czSiteInsertResult[0].insertId;
        const imageQuery = `
        INSERT INTO camping_zone_site_sub_image (camping_zone_site_id, img_urls)
        VALUES (?, ?)`;

        await db.execute(imageQuery, [czSiteImageId, siteImagesString]);
        db.release();
        return NextResponse.json({});
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}