import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../../libs/mysql';

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } },
) => {
  try {
    const db = await pool.getConnection();

    const { userId } = params;
    const status = await req.nextUrl.searchParams.get('status');

    let query = `SELECT r.id, cz.name campingZoneName, czs.name campingZoneSiteName, r.stay_start_at stayStartAt, r.stay_end_at stayEndAt, r.status
                   FROM reservation r
                  INNER JOIN camping_zone cz ON r.camping_zone_id = cz.id
                  INNER JOIN camping_zone_site czs ON r.camping_zone_site_id = czs.id
                  WHERE r.user_id = ?`;

    if (status) {
      query += ` AND r.status = ?`;
    }

    const queryValues = status ? [userId, status] : [userId];
    const [reservationList] = await db.execute(query, queryValues);

    db.release();
    return NextResponse.json({ result: { reservationList } });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};
