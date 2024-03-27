const anony = function() {
    console.log('익명 함수');
}
function named() {
    console.log('선언적 함수');
}

anony(); named();

const arrow = () => {
    console.log('화살표 함수, 람다함수');
}
arrow();
// 파라메타가 1개 있으면 ()를 생략할 수 있음
const param1 = x => {
    console.log('x=' + x);
}
param1(5);
// 함수 내부의 실행문이 return 한개밖에 없으면 { }, return 생략 가능
const add = (a, b) => a + b;
console.log(`add(3, 4) = ${add(3, 4)}`);

const fn = (name, count) => {
  // 1번 방법  if (count == undefined)
  //    count = 0;
  // 2번 방법  count = count ? count : 0;
    count = count || 0; // 3번 방법
    console.log(`${name}: ${count}`);
}
fn('apple', 10);
fn('banana');   // 값을 주지 않았을때 오류가 나지 않게 정하는 3가지 방법

function call3Times(callback) {
    for (let i=0; i<3; i++)
        callback();
}
// call3Times(named);      
// call3Times(anony);
// call3Times(function() {
//     console.log('콜백 함수로 직접 익명함수를 생성');
// });
call3Times(() => {
    console.log('콜백 함수로 화살표 함수를 생성');
});

setTimeout(() => {
    console.log('1000ms 이후에 실행이됩니다.');
}, 1000);
const si = setInterval(() => {
    console.log('0.5초마다 실행됩니다.');
}, 500);
setTimeout(() => {      // 3.1초 후에 반복실행되는 코드를 없앰
    clearInterval(si);
    console.log('3.1초 후에 반복실행코드 정지코드가 실행됩니다.');
}, 3100);
