const mysql = require('mysql');

const  {host,user,password,database} = require('../dbconfig');
//console.log(host,user,password,database);
// const connection = mysql.createConnection({
//   host     : '192.168.10.139',
//   user     : 'root',
//   password : '',
//   database : 'demo'
// });
// connection.connect();

// interface IBase{
//     do(sql:string):Promise<any>;
// }

class db{

    conn:any;

    constructor(){
        this.conn =  mysql.createConnection({
            host     : host,
            user     : user,
            password : password,
            database : database
          });
        this.conn.connect();
    }

    async query(sql:string):Promise<any>{
        return new Promise((resolve, reject)=>{
            // setTimeout(() => {
            //     resolve('44444444');
            // }, i);
            this.conn.query(sql, function(err:any, rows:any, fields:any){
                if(err){
                    console.log(err);
                }else{
                    //console.log(rows);
                    resolve(rows);
                }
            });
        });
    }
}

export default new db();

//export {BaseClass};

// async function main(){
//       let obj = new BaseClass();
//       obj.do('select 1+1 as sum');
// }
// main();
