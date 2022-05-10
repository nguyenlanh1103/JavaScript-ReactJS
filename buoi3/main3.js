/*
 boolean - dkien true or false
*/
var a = 1;
var b = 2;

var isSuccess = a < b;
console.log(isSuccess)
/*
if - else
*/
var isSuccess = 1 < 2;

if(isSuccess){
    console.log('dieu kien đúng');
}else{
    console.log('điều kiện sai');
}
/*
Toán Tử Logic
1.&& - And
2.|| - or - 1 trong các vế đúng đkiện cũng đưa ra giá trị true
3. ! - Not - phủ định lại giá trị 
*/

var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0 && c > 0 ){
    console.log('điều kiện đúng !');
} 
// not
if(!(a > 0)){
    console.log('true')
}