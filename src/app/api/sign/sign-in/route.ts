import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';

const bcrypt = require('bcrypt');

export const POST = async (req: NextRequest) => {
    try {
        const signInUserData = await req.json();
        const db = await pool.getConnection();
        const query = 'SELECT COUNT(*) AS cnt FROM user_info WHERE email = ?';
        const [rows] = await db.execute(query, [signInUserData.email]);
        let tmpResult: any = rows;
        const userEmailExists = tmpResult[0].cnt;

        if (userEmailExists === 0) {
            const message = '입력하신 이메일은 가입되지 않은 이메일입니다.'
            return NextResponse.json({ error: message, }, { status: 500 },);
        }

        else {
            const query2 = 'SELECT password FROM user_info WHERE email = ?';
            const [rows2] = await db.execute(query2, [signInUserData.email]);
            db.release();
            let tmpResult2: any = rows2;
            const savedPassword = tmpResult2[0].password;
            const passwordMatch = await bcrypt.compare(signInUserData.password, savedPassword);

            if (passwordMatch) {
                return NextResponse.json({});
            }

            else {
                const message = '입력하신 비밀번호가 틀립니다.';
                return NextResponse.json({ error: message, }, { status: 500 },);
            }
        }
    } catch (error) {
        return NextResponse.json(
            { error, }, { status: 500 },
        );
    }
};