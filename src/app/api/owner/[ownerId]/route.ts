import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async (
	req: NextRequest,
	{ params }: { params: { ownerId: string } },
) => {
	try {
		const db = await pool.getConnection();

		const { ownerId } = params;

		const query = 'SELECT * FROM user_info WHERE id = ?';
		const [row] = await db.execute(query, [ownerId]);

		let userInfo: any = row;

		const czQuery = `SELECT id campingZoneId, name campingZoneName FROM camping_zone cz
    WHERE cz.boss_id = ?`;

		const [ownerCampingZoneList]: any = await db.execute(czQuery, [ownerId]);

		const result = {
			name: userInfo[0].name,
			email: userInfo[0].email,
			phone: userInfo[0].phone,
			role: userInfo[0].role,
			nickname: userInfo[0].nickname,
			ownerCampingZoneList,
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
