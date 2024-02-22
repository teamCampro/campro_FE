import { pool } from '@/src/app/api/libs/mysql';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
	req: NextRequest,
	{ params }: { params: { ownerId: string } },
) => {
	try {
		const db = await pool.getConnection();
		const { ownerId } = params;

		const query = `
    SELECT r.id, cz.camp_image campingZoneImage, r.status, czs.name siteName,
			ui.name userName, r.stay_start_at stayStartAt, r.stay_end_at stayEndAt
    FROM reservation r
		INNER JOIN camping_zone_site czs ON r.camping_zone_site_id = czs.id
    INNER JOIN camping_zone cz ON czs.camping_zone_id = cz.id
    INNER JOIN user_info ui ON r.user_id = ui.id  
		WHERE cz.boss_id = ?`;

		const [ownerReservationList] = await db.execute(query, [ownerId]);

		const result = { ownerReservationList };

		db.release();
		return NextResponse.json({ result });
	} catch (error) {
		return NextResponse.json(
			{ error }, { status: 500 },
		);
	}
};
