import { NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async () => {
  try {
    const db = await pool.getConnection();

    const [recommendList] = await db.execute(
      'SELECT id, name, address, camp_image as campImage, 40000 as minimumAmount, keyword FROM camping_zone',
    );
    const [popularList] = await db.execute(
      'SELECT id, name, address, camp_image as campImage, 40000 as minimumAmount, keyword FROM camping_zone',
    );
    const [recentList] = await db.execute(
      'SELECT id, name, address, camp_image as campImage, 40000 as minimumAmount, keyword FROM camping_zone ORDER BY created_at DESC',
    );

    db.release();
    return NextResponse.json({
      result: { recommendList, popularList, recentList },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};