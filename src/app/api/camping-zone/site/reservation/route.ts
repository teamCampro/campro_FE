import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../libs/mysql';

export const POST = async (req: NextRequest) => {
  try {
    const reservationData = await req.json();
    const db = await pool.getConnection();

    const query = `
        INSERT INTO reservation (camping_zone_id, camping_zone_site_id, user_id, reserved_at, status, stay_start_at,
          stay_end_at, adult, child, pet, pay_method, car_info, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await db.execute(query, [
      reservationData.campingZoneId,
      reservationData.campingZoneSiteId,
      reservationData.userId,
      new Date(),
      'RESERVE_WAITING',
      reservationData.stayStartAt,
      reservationData.stayEndAt,
      reservationData.adult,
      reservationData.child,
      reservationData.pet,
      reservationData.payMethod,
      reservationData.carInfo,
      new Date(),
      new Date(),
    ]);

    db.release();
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
