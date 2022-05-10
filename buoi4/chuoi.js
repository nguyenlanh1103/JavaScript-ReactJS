/*
Làm việc với chuỗi
    //Length - mảng.length = số lượng phần tử;
    //Find index - Tìm vị trí 1 kí tự nằm trong một chuỗi
    array.findIndex(function(currentValue, index, arr),thisValue)
    *currentValue - giá trị của phần tử hiện tại.
    index - chỉ số của phần tử hiện tại.
    arr - mảng mà phần tử hiện tại thuộc về.
    thisValue - tham số không bắt buộc. Nếu được truyền vào thì thisValue 
    sẽ được sử dụng làm giá trị this, Nếu không được truyền vào thì giá trị "this" là "undefined".
    //Cut String - cắt chuỗi
    //Replace - ghi đè
    //convert to upper case - chuyển đổi chuỗi tất cả thành chữ hoa
    //Trim - loại bỏ khoảng trắng 2 đầu
    //Split - cắt 1 chuỗi thành 1 array
*/
var myString = 'Hoc JS co ban va nang cao'
console.log(myString.length);
//find index
console.log(myString.indexOf('JS'));
//cut string
console.log(myString.slice(4, 6 )) // trái -> phải
console.log(myString.slice(-8, -1 )) // phải -> trái
//replace
console.log(myString.replace('JS', 'JavaScript'));
//convert to upper case
console.log(myString.toLocaleUpperCase())
//convert to upper case
console.log(myString.toLocaleLowerCase())
//trim
console.log(myString.trim())
//Split 
var laguages = 'JavaScript , PHP, Pythor'
console.log(laguages.split(', '))
//get a charater by index
var myString2 = ' Nguyen Lanh'
console.log(myString2[10])
//to fixed - làm tròn số thập phân
var age = 18;
var PI = 3.14;

console.log(PI.toFixed())