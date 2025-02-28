let year = +prompt("Nhập năm vào để kiểm tra");
if(isNaN(year)){
    alert("Nhập số năm không phải chữ");
}else if( year%4 == 0 && year%100!=0 && year%400!=0){
    alert("năm này là năm nhuận");
}else{
    alert("không phải là năm nhuận");
}