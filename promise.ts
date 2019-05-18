import * as mysql from 'mysql';

const connection = mysql.createConnection({
  host     : '192.168.10.139',
  user     : 'root',
  password : '',
  database : 'demo'
});
connection.connect();

interface IBase{
    do(sql:string):Promise<any>;
}

class BaseClass implements IBase{
    async do(sql:string):Promise<any>{
        return new Promise((resolve, reject)=>{
            // setTimeout(() => {
            //     resolve('44444444');
            // }, i);
            connection.query(sql, function(err,rows, fields){
                if(err){
                    console.log(err);
                }else{
                    resolve(rows);
                }
            });
        });
    }
}

class Aclass extends BaseClass{
    async run(i:number, s:string):Promise<void>{
        let j = 0;
        let data = await this.do('select 1+1 as sum');
        console.log(data['0'].sum);
        // while(j<10){
        //     console.log(s);
        //     await this.do(i);
        //     j++;
        // }
    }
}

async function main(){
    let a = new Aclass();
    //let b = new Aclass();

    a.run(200, 'aqqq');
    //a.run(350, 'bbbbbbbbb');
}
main();


// import { createServer, Server, IncomingMessage, ServerResponse } from 'http';
// // 明确类型麻烦些，却会获得非常详细的语法提示
 
// const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// })

// const hostname: string = "127.0.0.1";
// const port: number = 3000;
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })



// interface LabelledValue{
//     label?: string;
//     num?: number;
// }

// function printLable(labelledObj: LabelledValue){
//     console.log(labelledObj.num);
// }

// let myObj = {num:10, label:"Size 10 object"};

// printLable(myObj);