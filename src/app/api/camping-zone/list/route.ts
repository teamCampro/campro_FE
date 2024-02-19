import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async (req: NextRequest) => {
  const location = await req.nextUrl.searchParams.get('location');

  // 데이터 더 넣고 필터 기능 마저 추가 해야됨
  // const checkIn = await req.nextUrl.searchParams.get('checkIn');
  // const checkOut = await req.nextUrl.searchParams.get('checkOut');
  // const adult = await req.nextUrl.searchParams.get('adult');
  // const child = await req.nextUrl.searchParams.get('child');
  // const pet = await req.nextUrl.searchParams.get('pet');

  try {
    const db = await pool.getConnection();

    const userId = 1;

    let query =
      'SELECT id, name,  address, display_address as displayAddress, lat, lng, camp_image as campImage, 40000 as minimumAmount, keyword FROM camping_zone WHERE 1 = 1';

    if (location) {
      query += ` AND address LIKE '%${location}%'`;
    }

    const [filtedCampingZoneList] = await db.execute(query);

    db.release();
    return NextResponse.json({ result: filtedCampingZoneList });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};
