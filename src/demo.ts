// export class demo{

//     test(){
//         return async(ctx:any, next:any) =>{
//             console.log(ctx.request.body);
//             console.log(ctx.params);
//         };
//     }

// }

// import {user} from './user';
// import { copyFileSync } from 'fs';

// let arr:Array<any> = [];
// arr.push(user);
// console.log(arr);
// arr.forEach(element => {
//     console.log(element);
// });

// declare function require(moduleName: string): any;
// import {userobj} from './user';


// let myuser: typeof user = require("./user");
// let validator = new myuser();
// console.log(validator.getname());
// // export default function(cl:string){
// //    // let res = arr.find();
// //     arr.find(el => {
// //        console.log(el);
// //     });
// //     return cl;
// // }

// export default function(el:string){
//     return '3333333';
// }


class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    test:string;
    constructor(name: string) { 
        super(name);
        this.test = '44444';
        }
    move(distanceInMeters = 5) {
        console.log(this.test);
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);