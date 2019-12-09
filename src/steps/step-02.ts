/**
 * Type inference
 */

const n = 1;
n.toFixed(2);
// n.split('');

const s = "hello";
const sa = s.split("");
// s.toFixed(2);
sa.forEach(p => {
  // <=== type can be inferred even in callback
  p.startsWith("a");
  // p.toFixed(2);
});

function f1(n: number) {
  const s = n.toFixed();
  s.startsWith("0");
  //   s.startsWith(0);
  //   s.toFixed();
}

type UserProfile = { name: string; age: number; gender?: string }; // <=== gender is optional

let u1: UserProfile = { name: "LK", age: 30 }; // <=== Sometimes you have to declare type explicitly
u1.gender = "M";
// u1.age.startsWith("a");
u1.gender.startsWith("a"); // <=== will

let u2 = { name: "LK", age: 30 };
// u2.gender = "M";
u1.name.startsWith("a");
// u1.age.startsWith("a");

export default {};
