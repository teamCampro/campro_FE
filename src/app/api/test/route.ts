import { NextResponse } from 'next/server';
import { pool } from '../libs/mysql';

export const GET = async () => {
  try {
    const db = await pool.getConnection();

    const userId = 1;

    const query = 'SELECT * FROM user_info WHERE user_id = ?';
    const [rows] = await db.execute(query, [userId]);

    const query2 = 'SELECT * FROM user_info';
    const [rows2] = await db.execute(query2, []);

    db.release();
    return NextResponse.json([rows, rows2]);
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};
