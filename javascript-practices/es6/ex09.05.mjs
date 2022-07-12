/*
 *  named & unnamed export
 *  
 */

const _a = function(a, b) {
    return a + b;
}

const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const divide = function(a, b){
    return a / b;
}

const multiply = function(a, b){
    return a * b;
}

export {add, subtract}
export default {divide, multiply}