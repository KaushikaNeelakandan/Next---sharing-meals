import sql from 'better-sqlite3'

const db=sql('meals.db')
export async function getMeals()
{
    await new Promise((resolve)=>setTimeout(()=>{resolve('Data loaded asynchronously');},2000));
    
    return db.prepare(`SELECT * FROM meals`).all();
   
}
//throw new Error('loading meals failed');
// import sqlite3 from 'sqlite3'
// //import sql from 'sqlite3'
// //import { open } from 'sqlite3'
// const sql=require('sqlite3')
// const {open}=require('sqlite3')
// // import sql from 'better-sqlite3'
// //import {open} from 'better-sqlite3'
// const db=sql('mealsnew.db')
// export async function getMeals(){
//     // const db=await open({
//     //     filename:'mealsnew.db'
//     // });
//     const db=sql('mealsnew.db')
//     const data =await db.all('SELECT * FROM meals')
//     console.log(data)
// }