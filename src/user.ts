import {controller} from './controller';
class user extends controller{

    constructor() {
        super();
    }
    

    async getname(ctx:any, next:any){
        ctx.body = await super.failed({message:'444444444444'});
    }

    async setName(ctx:any, next:any){
        ctx.body = await super.success({data:[2,4,5,6,7]});
    }

}

export default new user();

