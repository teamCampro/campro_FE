import { NextRequest, NextResponse } from 'next/server';
import { pool } from '../../libs/mysql';
import bcrypt from 'bcrypt';

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
            const passwordQuery = 'SELECT id, password FROM user_info WHERE email = ?';
            const [passwordRows] = await db.execute(passwordQuery, [signInUserData.email]);
            db.release();
            let tmpPasswordResult: any = passwordRows;
            const savedPassword = tmpPasswordResult[0].password;
            const passwordMatch = await bcrypt.compare(signInUserData.password, savedPassword);
            const result = {
                userId: tmpPasswordResult[0].id
            }
            if (passwordMatch) {
                return NextResponse.json({result});
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