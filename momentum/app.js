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

plus one more day to the array
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
// function sayHello() {       
//     console.log("Hello my name is c");
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello(); 

// const calculator = {
//     plus: function (a, b) {
//         return a + b;
//     },
//     min: function (a, b) {
//         return a - b;
//     },
//     div: function (a, b) {
//         return a / b;

//     },
//     multi: function (a, b) {
//         return a * b;

//     },
//     power: function (a, b) {
//         return a ** b;

//     }
// };

// const plusResult = calculator.plus(2, 3);
// const minResult = calculator.min(plusResult,10);
// const divResult = calculator.div(10, minResult);
// const multiResult = calculator.multi(divResult, plusResult);
// const powerResult = calculator.power(divResult, minResult);

// const age = 96;
// function calculatorKrAge(ageOfForeiner){
//     return ageOfForeiner + 2;
// }

// const krAge = calculatorKrAge(age);

// console.log(krAge);


// 조건문
// 음주 가능 여부 계산기
// prompt 사용자가 볼 수 있게 창을 띄어준다.
// typeof 값의 타입을 볼 수 있다.
// 함수는 내부에서 외부로 값이 나온다.
const age = parseInt(prompt("How old are you?")); //페이지 잠시 일시정지

// console.log();

if(isNaN(age || age < 0)){
    console.log("Please write a number");
} else if(age<18) {
    console.log("You are too young")
} else if (age >= 18 && age <= 50){
    console.log("You can drink");
} else if (age > 50 && age <= 80){
    console.log("You should exercise");
} else if(age ===100){
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want.");
} 


// 값 형변환
//parseInt();15



