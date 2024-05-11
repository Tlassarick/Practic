import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()
async function getAbonents(){
    const [rows] = await pool.query("SELECT * FROM abonent")
    return rows
}

const abonent = await getAbonents()
console.log(abonent)