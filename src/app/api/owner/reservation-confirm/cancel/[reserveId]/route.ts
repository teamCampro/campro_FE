import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/src/app/api/libs/mysql";

export const PATCH = async (
	req: NextRequest,
	{ params }: { params: { reserveId: string } },
) => {
	try {
		const db = await pool.getConnection();
		const { reserveId } = params;

		const reserveStatusQuery = `SELECT status FROM reservation WHERE id = ?`;

		const reserveStatusResult: any = await db.execute(reserveStatusQuery, [reserveId]);
		const reservationStatus = reserveStatusResult[0][0].status;

		if (reservationStatus === 'RESERVE_WAITING') {
			const query = `UPDATE reservation SET status = 'RESERVE_CANCEL' WHERE id = ?`;
			await db.execute(query, [reserveId]);

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