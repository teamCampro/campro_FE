import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

export const PATCH = async (req: NextRequest) => {
  try {
    const onboardingData = await req.json();
    const db = await pool.getConnection();

    const query = `UPDATE user_info SET onboarding_keyword = ? WHERE id = ?`;

    await db.execute(query, [
      JSON.stringify(onboardingData.onboardingKeyword),
      onboardingData.userId,
    ]);

    db.release();
    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
