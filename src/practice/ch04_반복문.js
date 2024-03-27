let fruits = ['사과', '배', '감'];

for (let i = 0; i < fruits.length; i++)
    console.log(fruits[i]);

for (let fruit of fruits)
    console.log(fruit);

var x = 4;  // var는 재선언 가능 // 하지만 코드가 길어지면 어디서 어떻게 선언되었는지 판단하기 어려우니 가급적 사용제한
var x = 6;
// let y = 4; , let y = 6;  let은 재선이 안됨