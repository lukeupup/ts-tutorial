/**
 * literal type & Union Types & Intersection Types & type assertions
 */

// literal
let username: "Luke" = "Luke";
// username = 'LUKE';

type Method = "get" | "post" | "put" | "delete";

function request(url: string, method: Method = "get") {
  return fetch(url, { method });
}
request("/api/user", "post");
// request("/api/user", "aaaa");

type LogLevel = 0 | 1 | 2 | 3;

function setLogLevel(level: LogLevel) {}

setLogLevel(0);
// setLogLevel(4);

// union types
const sn1: string | number = 1;
const sn2: string | number = "string";

function toString(arg: string | number | boolean) {
  if (typeof arg === "string") {
    // typeof can restrict the type
    return arg;
  } else if (typeof arg === "number") {
    return arg.toFixed(2);
  } else {
    return arg === true ? "true" : "false";
  }
}

function valueOf(arg: boolean | number) {
  return arg.valueOf(); // valueOf exists on each type
  // return arg.toFixed();
}

// intersection types
type Animal = { goTo: (x: number, y: number) => void };
type Monster = { roar?: (text?: string) => void };
type AnimalAndMonster = Animal & Monster;

const dragon: AnimalAndMonster = {
  // other: () => {},
  goTo: (x, y) => {
    console.log(x, y);
  },
  roar: text => {
    console.log(text);
  }
};

type SelfProps = {
  username: string;
};
type I18NProps = {
  t: (key: string, args: object) => string;
};
type RouterProps = {
  match: {
    params: object;
  };
};

type TotalProps = SelfProps & I18NProps & RouterProps;

function MyComponent(props: TotalProps) {
  return props.t("Hello", { username: props.username });
}

// type assertions

type Amount = string | number;
function getAmount(): Amount {
  return 123;
}
const amount = getAmount();
// amount.toFixed();
(amount as number).toFixed();

// type assertions is useful especially for typing api.
type User = {
  id: string;
  username: string;
};
async function getData(url: string) {
  const response = await fetch(url);
  return await response.json(); //<=== any
}
async function getUserInfo() {
  const userInfo1 = await getData("/user");
  console.log(userInfo1.username);
  const userInfo2 = (await getData("/user")) as User;
  console.log(userInfo2.username);
}

// non-empty assertion using !

type Node = {
  id: string;
  children?: Node[];
};

const a: Node = { id: "1" };
if (a.children) {
  a.children.forEach(n => console.log(n.id));
}
// NOTE: this could cause a runtime error!
a.children!.forEach(n => console.log(n.id));

function printChildren(node: Node) {
  a.children!.forEach(n => console.log(n.id));
}
function checkAndPrintChildren(node: Node) {
  if (node.children) {
    printChildren(node);
  }
}

export default {};
