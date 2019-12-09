import { async } from "q";
import { string } from "prop-types";

/**
 * Generic Types
 */

// return what ever it receives
function identity1(arg: any) {
  return arg;
}
const result1 = identity1(1);
result1.nonExistingMethod();

function identity2<T>(arg: T): T {
  return arg;
}
const result21 = identity2<number>(1);
// result21.nonExistingMethod();
result21.toFixed();

const result22 = identity2("hello"); // type can be inferred from args
result22.toUpperCase();

// promise

const promise1 = new Promise<string>(resolve => {
  // value in resolve can't be inferred
  // resolve(Math.random());
  resolve(Math.random().toString());
});
promise1.then(v => console.log(v.split(".")));

type User = {
  id: string;
  username: string;
};
async function getUser(id: string): Promise<User> {
  const response = await fetch("/user");
  return response.json();
}

// default type
type PlainObject<T = string> = {
  // type can accept generic types, too
  [key: string]: T;
};
const a: PlainObject = {
  // default type variable is string
  // key1: 1,
  key2: "hello"
};
const b: PlainObject<User> = {
  // key1: 'hello',
  key2: { id: "luke", username: "Luke" }
};
const c: PlainObject<string | number> = {
  key1: 1,
  key2: "hello"
};

// multiple types
function makeTuple<T1, T2>(elem1: T1, elem2: T2, defaultValue: any): [T1, T2] {
  return [elem1 || defaultValue, elem2 || defaultValue];
}

// generic type constraints

interface Person {
  age: number | string;
}
interface Person1 extends Person {
  age: number;
}
interface Person2 extends Person {
  age: string;
}

function getAge<T extends Person>(target: T): T["age"] {
  return target.age;
}
const p1: Person1 = { age: 12 };
const age1 = getAge(p1);
age1.toFixed();
const p2: Person2 = { age: "12" };
const age2 = getAge(p2);
age2.toLowerCase();
// age2.toFixed();
const nonPerson = { name: "luke" };
// getAge(nonPerson);

export default {};
