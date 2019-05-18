// import demo from './src/demo';
// console.log(demo('w3434'));
// // let d = new demo();
// const config = [
//     {path:'/user/:id',method:'post',func: 'w34' }
// ];

// export {config};


import userobj from './src/user';


export default [
  {
    path: '/',
    method: 'get',
    action: userobj.getname
  },
  {
    path: '/user',
    method: 'post',
    action: userobj.setName
  }
];