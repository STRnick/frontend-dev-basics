/*
 *  const: Block Scope의 상수
 */

// 1. block scopemaprk 
try {
   const num = 10;
   console.log(num);
} catch(e) {
    console.error('[error] ' + e);
}

// 2. 대입(Assignment) 에러
try {
    const o = {};
    o.name = '둘리'; // 에러X

    o = {};         // 에러 O
 } catch(e) {
     console.error('[error] ' + e);
 }