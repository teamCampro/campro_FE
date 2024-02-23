import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/src/app/api/libs/mysql";

export const PATCH = async (
	req: NextRequest,
	{ params }: { params: { reserveId: string } },
) => {
	try {
		const rStatusData = await req.json();
		const db = await pool.getConnection();
		const { reserveId } = params;
		const reservationStatus = rStatusData.status;

		if (reservationStatus === 'RESERVE_WAITING') {
			const query = `UPDATE reservation SET status = 'RESERVE_COMPLETE' WHERE id = ?`;
			await db.execute(query, reserveId);

			db.release();
			return NextResponse.json({});
		}

		else {
			const statusErrorMessage = '예약 대기 상태 아님';
			return NextResponse.json({ error: statusErrorMessage }, { status: 500 });
		}
		
	}
	catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
}