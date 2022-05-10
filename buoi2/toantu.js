/*
Các phép toán tử 
1. Toán tử số học - Arithmetic
2. Toán Tử Gán - Assignment
3. Toán Tử So Sánh - Comparison
4. Toán Tử Logic - Logical

*/

// Toán tử số học
var a = 1 * 2;
console.log(a)
// Toán tử gán 
var fullname = 'Lanh cutephomaique';
// Toán Tử So Sánh
var a = 1;
var b = 2;

if(a < b){
    alert('dung');
}
 console.log(a<b)
// Toán tử logic
var a = 1;
var b = 2;

if(a > 0 && b > 0){
    alert('a & b lon hon 0');
}
/*
Toán tử gán 
toán tử      ví dụ      tương đương
=           x = y       x = y
+=          x += y      x = x + y
-=          x -= y      x = x - y
*=          x *= y      x = x * y
/=          x /= y      x = x / y
**=         x **= y     x = x ** y

*/
// Cộng + , trừ -, * nhân , ** lũy thừa, / chia, 
var a = 1;
var b = 2;

var c = a + b;
console.log(c)

// %chia lấy số dư
var a = 8;
var b = 2;

var c = a % b;
console.log(c)
// Tăng 1 giá trị số ++
var a = 6;

a++;
console.log(a)
// giảm 1 giá trị --
var a = 6;

a--;
console.log(a)
/*
* Toán tử chuỗi - String operator
*/
var fistName = 'Nguyen';
var lastName = 'Lanh';
var date = '25/5/2000'

console.log(fistName + lastName + '  '+ date);
/*
==  bằng
!=  không bằng
>   lớn hơn
<   nhỏ hơn
>=  lớn hơn hoặc bằng
<=  nhỏ hơn hoặc bằng
*/
var a = 1;
var b = 2;

if(a == b){
  console.log(true);
}else{
 console.log(false);
}