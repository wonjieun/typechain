/**
 * terminal> tsc
 * tsc는 ts파일에 있는 코드를 컴파일해서 index.js와 index.js.map을 만듦
 */

console.log("hello");

const name="jieun",
    age = 25,
    gender ="female";

// const sayHi = (name, age, gender?) => {}
// ? - optional argument
const sayHi = (name:string, age:number, gender:string): string => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

// argument 개수를 반드시 맞추어 주어야 함.
// Javascript에서는 문제가 되지 않음.
console.log(sayHi(name, age, gender));

// 이 파일이 모듈이다. 이걸 선언해야 name이 선언됨. (버그같음)
export {};