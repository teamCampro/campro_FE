import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

const bcrypt = require('bcrypt');

const hashedPassword = async (pw: any) => {
  const saltRounds = 3;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(pw, salt);
};

export const POST = async (req: NextRequest) => {
  try {
    const userData = await req.json();
    const db = await pool.getConnection();
    const userEmail = userData.email;
    const query = 'SELECT COUNT(*) AS cnt FROM user_info WHERE email = ?';
    const [rows] = await db.execute(query, [userEmail]);
    let tmpResult: any = rows;
    const exists = tmpResult[0].cnt;

    if (userData.role === 'USER' || userData.role === 'OWNER') {
      if (exists === 0) {
        const hashingPW = await hashedPassword(userData.password);
        const query2 =
          'INSERT INTO user_info (email, phone, password, role, nickname) VALUES (?, ?, ?, ?, ?)';
        await db.execute(query2, [
          userData.email,
          userData.phone,
          hashingPW,
          userData.role,
          userData.nickname,
        ]);
        db.release();
        return NextResponse.json({});
      } else {
        const message = '입력하신 이메일은 이미 존재하는 이메일입니다.';
        return NextResponse.json({ error: message }, { status: 500 });
      }
    } else {
      const message = 'role 입력 오류';
      return NextResponse.json({ error: message }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
