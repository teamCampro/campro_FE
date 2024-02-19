import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../libs/mysql';

export const POST = async (req: NextRequest) => {
    try {
        const czData = await req.json();
        const db = await pool.getConnection();
        const seasonString = JSON.stringify(czData.season);
        const facilitiesString = JSON.stringify(czData.facilities);

        const query = `
        INSERT INTO camping_zone (name, tel, boss_email, business_number, tour_number, facilities,
            season, open_day, address, camp_image, plan_image, intro)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await db.execute(query, [czData.name, czData.tel, czData.bossEmail, czData.businessNumber,
        czData.tourNumber, facilitiesString, seasonString, czData.openDay, czData.address, czData.campImage,
        czData.planImage, czData.intro]);

        db.release();
        return NextResponse.json({});
    } catch (error) {
        return NextResponse.json(
            { error, }, { status: 500 },
        );
    }
};