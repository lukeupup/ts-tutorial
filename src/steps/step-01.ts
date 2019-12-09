/**
 * Primitive types
 */

let n: number = 1;
// n = '0'; <=== won't do any type casting

let s: string = "hello";
s = `${s} world`;
// s = 1;

let b: boolean = true;

let sa: string[] = ["hello", "world"];
sa.push("!!");
// sa.push(1);
// sa = [1];

let a: any = 1;
a = [];
a = "string";

let aa: any[] = ["string", true];
// aa = 'string';

let u: undefined = undefined;
// u = NaN;
// u = false;
// u = null;

let nil: null = null;
// nil = undefined;
// nil = 0;

let o1: { name: string; age: number } = { name: "LK", age: 30 };
o1.age += 1;
// o1.age = '32';
// let o2: { name: string; age: number } = { name: "LK", age: 30, gender: "M" };

// Don't use object or Object!!

// let o1: object = () => {};
// let o2: object = [1, 2];
// o2.map(n => n.toFixed(2));
// let o3: object = { a: 1 };
// o3.hasOwnProperty("key");
// o3.constructor;
// console.log(o3);

// let O1: Object = [];
// let O2: Object = {};
// O2.a = 1;

type UserProfile = { name: string; age: number };
let o3: UserProfile = { name: "XQ", age: 30 };

type MyNum = number;
let mynum: MyNum = 1;

export default {};
