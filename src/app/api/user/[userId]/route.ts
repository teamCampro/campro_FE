import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } },
) => {
  try {
    const db = await pool.getConnection();

    const { userId } = params;

    const query = 'SELECT * FROM user_info WHERE id = ?';
    const [row] = await db.execute(query, [userId]);

    let userInfo: any = row;

    const result = {
      name: userInfo[0].name,
      email: userInfo[0].email,
      phone: userInfo[0].phone,
      role: userInfo[0].role,
      nickname: userInfo[0].nickname,
      onboard: userInfo[0].onboarding_keyword,
    };
    console.log(result);
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
