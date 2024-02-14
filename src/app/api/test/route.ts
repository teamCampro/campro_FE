import { NextResponse } from 'next/server';

const conn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
const mysql = require('mysql');
const connection = mysql.createConnection(conn);

const executeQuery = (query: any, arrParams: any) => {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, arrParams, (err: any, data: any) => {
        if (err) {
          console.log('Error in executing the query');
          reject(err);
        }
        console.log('------db.jsx------');
        //console.log(data)
        resolve(data);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const GET = async () => {
  await connection.connect();

  let sql = 'SELECT * FROM user_info';
  let result = await executeQuery(sql, []);
  // await connection.query(sql, (error: any, data: any, field: any) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     // console.log(data);
  //     // result = data;
  //     return NextResponse.json(data);
  //   }
  // });

  // console.log(result);

  return NextResponse.json(result);
  // return NextResponse.json('test');
};
