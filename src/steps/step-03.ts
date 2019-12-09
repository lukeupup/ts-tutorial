/**
 * Interface
 */

function updateUser(user: { id: string; name: string }) {
  console.log(user);
}

updateUser({ id: "luke", name: "Luke Lu" });
// updateUser({ id: "luke", name: "Luke Lu", age: 1 });

interface User1 {
  id: string; // <=== semicolon, not comma
  name: string;
}

const u11: User1 = {
  id: "luke",
  name: "Luke Lu"
};

// const u12: User1 = {
//   id: "luke",
//   name: "Luke Lu",
//   age: 32
// };

// const u13: User1 = {
//   id: "luke",
// };

interface User2 {
  id: string;
  name: string;
  age?: number; // <=== Optional property
}

const u21: User2 = {
  id: "luke",
  name: "Luke"
};

const u22: User2 = {
  id: "luke",
  name: "Luke",
  age: 32
};

interface User3 {
  id: string;
  name: string;
  age?: number;
  [key: string]: any; // <=== arbitrary property
}

const u31: User3 = {
  id: "luke",
  name: "Luke"
};
const u32: User3 = {
  id: "luke",
  name: "Luke",
  detail: {}
};
// const u33: User3 = {
//   id: "luke",
//   name: "Luke",
//   age: "32"
// };

// interface User3_1 {
//   id: string;
//   name: string;
//   age?: number;
//   [key: string]: boolean;
// }

type User4 = {
  id: string;
  name: string;
};
const u41: User4 = {
  id: "luke",
  name: "Luke"
};

interface User5 extends User1 {
  gender: string;
}
const u51: User5 = {
  id: "luke",
  name: "Luke",
  gender: "M"
};

// type User6 extends User1 {}
type User6 = User1 & { gender: string }; // <=== there will be expected result if we want join User1 and {id: number}
const u61: User6 = {
  id: "luke",
  name: "Luke",
  gender: "M"
};

type User7 = {
  readonly id: string;
  readonly name: string;
};
const u71: User7 = {
  id: "luke",
  name: "Luke"
};
// u71.name = 'Luke Lu';
Object.assign(u71, { name: "Luke" });

interface API {
  currentUser?: User1;
  setUser(user: User1): void;
  getUser(id: string): User1 | undefined;
}

class Class1 implements API {
  currentUser?: User1 = undefined;
  otherProp: string = "hello"; // <=== can contain other props
  setUser(user: User1) {
    this.currentUser = user;
  }
  getUser(id: string) {
    return this.currentUser;
  }
}
export default {};
