/*
 *  객체(Object)의 구조 분해(Destructing)
 *
 *  1. 객체(object)
 */

// ex1 - basic
const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@gmail.com'
}

// let firstName = user.firstName;
// let lastName = user.lastName;
let {firstName, lastName} = user;
console.log(firstName, lastName);

// ex2 - default value
const goods = {
    name: 'TV',
    price: 1000,
    stockCount: 100
}

let {name, price, soldCount=0, stockCount=0} = goods;
console.log(name, price, soldCount, stockCount);

// ex3- 구조분해 해야 할 속성과 변수 이름이 다를 때
const person = {
    name: '이수민',
    country: 'Korea'
}

let {name:fullName, country:place} = person;
console.log(fullName, place);

// ex4 - 내부 객체(Nested Object)의 구조 분해
const student = {
    name: '둘리',
    age: 10,
    score: {
        math: 90,
        korean: 70,
        science: 100
    }
}

const{name:studentName, score:{math=0, korean=0, science=0, music=0}} = student;
console.log(`
${studentName}의 성적
수학: ${math}
국어: ${korean}
과학: ${science}
음악: ${music}
`);

// ex05 - 함수의 파라미터
const averageScore = function({name, score:{math:mt=0, korean:k=0, science:s=0, music:ms=0}}) {
    console.log(`${name}의 평균은 ${(mt + k + s + ms)/4}점 입니다.`);
}

averageScore(student);