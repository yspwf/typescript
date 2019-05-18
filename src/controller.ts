import {success, successWithCode, failed} from './helper';
import db from './db';
class controller{

       async findOne(table:string, feilds:any, where:any){
            console.log('select'+feilds+' from '+table+' where'+where);
            let sql = 'select '+feilds+' from '+table+' where '+where;
            //console.log(sql);
            return await db.query(sql);
       }

       
        // 成功返回
        async success(result:object){
             return {
               retCode: 200,
               retValue: result
            }
        }

        // 成功没数据返回
        async successWithCode(msg:object){
             return {
               retCode: 200,
               msg,
            }
        }
        ​
        // 失败返回
        async failed(error:any){
             console.log(error)
             return {
               retCode: 500,
               msg: error.message || error || '服务器异常'
            }
        }
}

export {controller};
