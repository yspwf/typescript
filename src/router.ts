//import Router from 'koa-router';
import Router from 'koa-router';
const router = new Router();

import config from '../config';


//config.forEach(route => router[route.method](route.path, route.action));


config.forEach(route => {
    if(route.method == 'get'){
        router.get(route.path, route.action);
    }else{
        router.post(route.path, route.action);
    }
});

/*
import user from './user';
router.get('/', async (ctx, next) => {
    
    let data = await user.getname();
    ctx.body = "get  ///"+data[0].sum;
});

router.post('/user/:id', async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.params);
    ctx.body = "get  user"
});

router.post('/user', async (ctx, next) => {
    console.log(ctx.request.body);
    ctx.body = "post  user"
});
*/

export {router};
