/**
 * Functions
 */

function toUpper(text: string): string {
  return text.toUpperCase();
}

// use type inference
const toLower = (text: string) => {
  return text.toLowerCase();
};

type TextTransformer = (text: string) => string; // <=== one of my favorite form
const f11: TextTransformer = text => text.toLowerCase();
// const f12: TextTransformer = text => text.toLowerCase;
const transformByCallback = function(
  message: string,
  callback: TextTransformer
): string {
  return callback(message);
};
transformByCallback("hello", f11);
transformByCallback("hello", toUpper);
// transformByCallback("hello", t => t.split(""));

interface TextTransformer2 {
  (text: string): string;
}
const f21: TextTransformer2 = text => text.replace(/\s/g, "");

// optional args

type API = (name: string, params?: string) => any;
// arg name doesn't matter
const getUserInfo: API = (username: string, params?: string) => {
  return { username, params };
};
const getBookInfo: API = (bookName: string) => {
  return { bookName };
};
// const getStoreInfo: API = (storeName: string, params: string) => {
//   return { storeName, params };
// };

// default args
// type inference on gender
const getPetInfo: API = (name: string, gender = "M") => {
  return { name, gender };
};
// default arg should not be in type
// type API2 = (name: string, params = 'M') => {};

// rest params
type TextReducer = (text: string, ...others: string[]) => string;

const concat: TextReducer = (text, ...rest) => {
  let ret = text;
  for (let i = 0; i < rest.length; i++) {
    ret += rest[i];
  }
  return ret;
};
const identity: TextReducer = (t: string) => t;

// overloads
// type JQuery = string[];
// type HtmlNode = { tagName: string };

// function $(element: string): JQuery;
// function $(element: HtmlNode): JQuery;
// function $(element: any): JQuery {
//   if (typeof element === "string") {
//     return [element];
//   }
//   return [element.tagName];
// }

export default {};
