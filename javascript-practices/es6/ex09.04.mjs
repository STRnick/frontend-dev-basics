/*
 *  named export
 *  
 *  1. exports.name = ... : commonJS(require)와 유사
 *  2. 이 모듈을 import할 때에는 destructing이 가능하다.
 */

const _a = function(a, b) {
    return a + b;
}

const add = function(a, b){
    return a(a + b);
}

const subtract = function(a, b){
    return a - b;
}

export {add, subtract}