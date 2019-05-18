import Koa from 'koa';
import Router from 'koa-router';
import KoaBody from 'koa-body';

const app:Koa = new Koa();

app.use(KoaBody());

import {router} from './src/router';

// const router = new Router();
// router.get('/', async (ctx, next) => {
//     console.log(ctx.request.query);
//     console.log(ctx.request.querystring);
//     ctx.body = "get  ///";
// });

// router.post('/user/:id', async (ctx, next) => {
//     console.log(ctx.params);
//     ctx.body = "get  user"
// });
// router.post('/user', async (ctx, next) => {
//     console.log(ctx.request.body);
//     ctx.body = "post  user"
// });


app.use(router.routes()).use(router.allowedMethods());



// app.use(async ctx => {
//     ctx.body = "hello  typescript node！";
// });
app.listen(8080, ()=>{
  console.log('server is start ...........');
});