
# koa  typescript的一次实践
### typescript 知识点<br/>
#### typescript的安装<br/>
```
npm install typescript ts-node  --save
```
####  typescript中koa的使用
```
npm  install koa @types/koa --save

typescript --init  //创建tsconfig配置文件

//配置文件配置项
{
    "compilerOptions": {
        "target": "ES2017",     /*编译到ES2017版本的js*/
        "module": "commonjs",   /*使用commonjs规范*/
        "sourceMap": true,      /*生成map文件*/
        "outDir": "./dist",     /*输出文件夹*/
        "strict": true,         /*启用所有严格的类型检查选项*/
        "noImplicitAny": true,  /*允许any类型*/
    },
    "include": [                /*要进行编译的文件*/
        "src/**/*"              /*src目录下的所有文件*/
    ]
}
```

#### async、await、promise的使用<br/>
```
interface IBase{
    do(i:number):Promise<any>;
}
class BaseClass implements IBase{
    async do(i:number):Promise<any>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve();
            },i);
        });
    }
}
 
class Aclass extends BaseClass{
    async run(i:number,s:string):Promise<void>{
        let j = 0;
        while(j<10){
            console.log(s);
            await this.do(i);
            j++;
        }
    }
}
 
async function main(){
    let a = new Aclass();
    let b = new Aclass();
    
    a.run(2000,'aaaaa');
    b.run(3500,'bbbbb');
    
}
main();


```



开发环境执行：npm run server
```
"server": "cross-env nodemon --watch './' -e ts,tsx --exec 'ts-node' './app.ts'"
```



