/**
 * terminal> tsc
 * tsc는 ts파일에 있는 코드를 컴파일해서 index.js와 index.js.map을 만듦
 */
/****************************************************************************/
console.log("hello");
/****************************************************************************/
const name="jieun",
    age = 25,
    gender ="female";

// const sayHi = (name, age, gender?) => {}
// ? - optional argument
const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, you are a ${gender}`;
};
/*
arguments 개수를 반드시 맞추어 주어야 함.
Javascript에서는 문제가 되지 않음. but, Typescript에서는 반드시 체크.
*/
console.log(sayHi(name, age, gender));
/****************************************************************************/
const person = {
    name: "jieun",
    age: 25,
    gender: "female"
}
/*
arguments로 객체를 넘기고 싶다면?
console.log(sayHi(person));  // error! arguments는 3개를 받기로 되어 있음.
그러면 어떻게? interface 생성
*/
interface Human {
    name: string;
    age: number;
    gender: string;
}

const sayHello = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
console.log(sayHello(person));
/****************************************************************************/
/*
interface는 js에서 작동하지 않는다.
interface가 js에서 작동하도록 하려면? interface 대신에 class
-> interfaceClass.ts
*/

// 이 파일이 모듈이다. 이걸 선언해야 name이 선언됨. (버그같음)
export {};