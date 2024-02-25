import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/src/app/api/libs/mysql';

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { userId: number; reservationId: string } },
) => {
  try {
    const db = await pool.getConnection();
    const { userId, reservationId } = params;

    const selectQuery = `SELECT status FROM reservation WHERE id = ? AND user_id = ?`;
    const [row] = await db.execute(selectQuery, [reservationId, userId]);
    const reservationStatus: any = row;

    if (!reservationStatus[0]) {
      return NextResponse.json(
        { error: '해당 예약은 존재하지 않습니다.' },
        { status: 500 },
      );
    }

    if (
      !(
        reservationStatus[0].status === 'RESERVE_WAITING' ||
        reservationStatus[0].status === 'RESERVE_COMPLETE'
      )
    ) {
      return NextResponse.json(
        { error: '해당 예약은 취소할 수 없습니다.' },
        { status: 500 },
      );
    }

    const query = `UPDATE reservation SET status = 'RESERVE_CANCEL' WHERE id = ? AND user_id = ?`;
    await db.execute(query, [reservationId, userId]);

    db.release();
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
