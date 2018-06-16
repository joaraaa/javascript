var n = 3;
var f = 3.2;
var s = 'abc';
var b = true;
function test() {
    return 1;
}
function test1() {
}
var n1 = 2;
var n2 = 2;
var result = 0;
result = n1 + n2;
console.log(n1 + '+' + n2 + '=' + result);
result = n1 - n2;
console.log(n1 + '-' + n2 + '=' + result);
result = n1 / n2;
console.log(n1 + '/' + n2 + '=' + result);
result = n1 * n2;
console.log(n1 + '*' + n2 + '=' + result);
n1++;
console.log('n1++ =' + n1);
n1--;
console.log('n1-- =' + n1);
n1 += 1;
console.log('n1+= =' + n1);
n1 -= 1;
console.log('n1-= =' + n1);
result = n1 % n2;
console.log(n1 + '%' + n2 + '=' + n1 % n2);
n1 = 3;
console.log(n1++);
console.log(n1);
var age = 20;
console.log('age==20' + (age == 20));
console.log('age!=20' + (age != 20));
console.log('age>=20' + (age >= 20));
console.log('age<=20' + (age <= 20));
console.log('age>20' + (age > 20));
console.log('age<20' + (age < 20));
var age1 = 10;
console.log(age == 20 || age1 == 20);
console.log(age == 20 && age1 == 20);
for (var idx = 1; idx < 10; idx++) {
    if (idx % 2 == 0) {
        console.log(idx);
    }
}
var arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr[0]);
console.log(arr.length);
for (var idx = 0; idx < arr.length; idx++) {
    console.log(arr[idx]);
}
//# sourceMappingURL=test.js.map