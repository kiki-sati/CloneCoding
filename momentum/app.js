/* let 과 const의 차이
const -> constant(상수) : 변하지 않는 값
let은 생성하는것 -> 새로운게 생기면 선언하지 않고 만들면 된다.
항상 const 가끔 let 사용금지 var
const a = 5;
const b = 2;
let myName = "kimrumm";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "kimrummee"
console.log("your new name is " + myName); */

/* 불
const amIFat = null;
let somethis;
console.log(somethis);
 */

/* 데이터 저장 방법 - 배열
[] ,로 구분

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]

get item from array
console.log(daysOfWeek);

add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek); */

/* Object
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name); */

//function : 반복해서 사용할 수 있는 코드 조각
// 어떤 코드를 캡슐화해서 실행을 여러번 할 수 있게 해준다.  
function sayHello() {       
    console.log("Hello my name is c");
}

sayHello();
sayHello();
sayHello();
sayHello();