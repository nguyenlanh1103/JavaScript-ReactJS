/*
Một số hàm built-in 
1.ALERT - bật lên hộp thoại base
2.Console - in thông báo
3.Confirm - hộp thoại confirm trên màn hình
4.Prompt - bật lên hộp thoại và ô iput nhập giá trị
5.Set timeout- Thực thi 1 đoạn code sau 1 khoảng thời gian được ấn định 
6.Set interval - Thực thi liên tục 1 đoạn code sau 1 khoảng thời gian được ấn định (liên tục lặp đi lặp lại)
*/
var fullname = 'Nguyen Lanh';

console.log(fullname)

confirm('bạn chưa đủ 18+ để vào trang này!');

prompt('bạn chưa đủ tuổi , hãy xác nhận độ tuổi');

setTimeout(function(){
    alert('thong bao')
},1000) 
// 1000mili giây = 1s

setTimeout(function(){
    console.log('day la log')
},1000) 