import { pool } from '@/src/app/api/libs/mysql';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { ownerId: string; reserveId: string } },
) => {
  try {
    const db = await pool.getConnection();

    const { ownerId, reserveId } = params;
    const query = `SELECT r.adult, r.child, r.stay_start_at stayStartAt, r.stay_end_at stayEndAt,
		r.pet, czs.name czSiteName, ui.name userName, ui.phone userPhone,r.car_info carInfo,
		r.reserved_at reservedAt, r.pay_method payMethod, r.id rId, czs.price campingZoneSitePrice,
		TIMESTAMPDIFF(DAY,r.stay_start_at,r.stay_end_at) stayNights
		FROM reservation r
		INNER JOIN camping_zone_site czs ON r.camping_zone_site_id = czs.id
		INNER JOIN camping_zone cz ON czs.camping_zone_id=cz.id
		INNER JOIN user_info ui ON r.user_id = ui.id
		WHERE cz.boss_id = ? AND r.id = ?`;

    const [row]: any = await db.execute(query, [ownerId, reserveId]);
    const ownerReservationResult = row;

    const selectedAdditionalOptionQuery = `SELECT czsao.option_name optionName,
		czsao.price, rsao.amount
		FROM camping_zone_site_additional_option czsao
		INNER JOIN reservation_selected_additional_option rsao
		ON czsao.id=rsao.option_id
		WHERE rsao.reservation_id = ?
		ORDER BY rsao.option_order	
		`;

    const [selectedAdditionalOptionResult] = await db.execute(
      selectedAdditionalOptionQuery,
      [ownerReservationResult[0].rId],
    );
    const carInfo = JSON.stringify(ownerReservationResult[0].carInfo);
    const result = {
      adult: ownerReservationResult[0].adult,
      child: ownerReservationResult[0].child,
      stayStartAt: ownerReservationResult[0].stayStartAt,
      stayEndAt: ownerReservationResult[0].stayEndAt,
      pet: ownerReservationResult[0].pet,
      czSiteName: ownerReservationResult[0].czSiteName,
      userName: ownerReservationResult[0].userName,
      userPhone: ownerReservationResult[0].userPhone,
      carInfo,
      reservedAt: ownerReservationResult[0].reservedAt,
      payMethod: ownerReservationResult[0].payMethod,
      campingZoneSitePrice: ownerReservationResult[0].campingZoneSitePrice,
      stayNights: ownerReservationResult[0].stayNights,
      selectedAdditionalOptionResult,
    };
    db.release();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
