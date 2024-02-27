import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../../../libs/mysql';

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string; reservationId: string } },
) => {
  try {
    const db = await pool.getConnection();

    const { userId, reservationId } = params;

    let query = `SELECT cz.name campingZoneName, cz.address, cz.tel campingZoneTel, cz.plan_image planImage, r.id rId, czs.name campingZoneSiteName, czs.site_image siteImage, czs.max_people maxPeople, czs.price campingZoneSitePrice, 
                  r.adult, r.child, r.pet, r.stay_start_at stayStartAt, r.stay_end_at stayEndAt, r.car_info carInfo, r.reserved_at reservedAt, 
                  r.pay_method payMethod, r.status, ui.name userName, ui.phone userPhone
                   FROM reservation r
                  INNER JOIN camping_zone cz ON r.camping_zone_id = cz.id
                  INNER JOIN camping_zone_site czs ON r.camping_zone_site_id = czs.id
                  INNER JOIN user_info ui ON r.user_id = ui.id
                  WHERE r.id = ? AND r.user_id = ?;`;

    const [row] = await db.execute(query, [reservationId, userId]);

    const reservationDetail: any = row;

    const selectAdditionalOptionsQuery = `
      SELECT czsao.option_name optionName, czsao.price, rsao.amount
      FROM camping_zone_site_additional_option czsao
      INNER JOIN reservation_selected_additional_option rsao
      ON rsao.option_id = czsao.id
      WHERE rsao.reservation_id = ?
      ORDER BY czsao.option_order;`;

    const [additionalOptions] = await db.execute(selectAdditionalOptionsQuery, [
      reservationDetail[0].rId,
    ]);

    const result = {
      campingZoneName: reservationDetail[0].campingZoneName,
      address: reservationDetail[0].address,
      campingZoneTel: reservationDetail[0].campingZoneTel,
      campingZoneSiteName: reservationDetail[0].campingZoneSiteName,
      maxPeople: reservationDetail[0].maxPeople,
      campingZoneSitePrice: reservationDetail[0].campingZoneSitePrice,
      adult: reservationDetail[0].adult,
      child: reservationDetail[0].child,
      pet: reservationDetail[0].pet,
      stayStartAt: reservationDetail[0].stayStartAt,
      stayEndAt: reservationDetail[0].stayEndAt,
      carInfo: reservationDetail[0].carInfo,
      reservedAt: reservationDetail[0].reservedAt,
      payMethod: reservationDetail[0].payMethod,
      status: reservationDetail[0].status,
      userName: reservationDetail[0].userName,
      userPhone: reservationDetail[0].userPhone,
      planImage: reservationDetail[0].planImage,
      siteImage: reservationDetail[0].siteImage,
      additionalOptions,
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
