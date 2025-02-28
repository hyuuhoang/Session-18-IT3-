let year = +prompt("Nhập số năm kinh nghiệm của nhân viên:");
if(year < 1){
    alert("Mới vào nghề.");
}else if(year > 1 && year < 3){
    alert("Nhân viên có kinh nghiệm.");
}else if(year > 3 && year < 6){
    alert("Chuyên viên.");
}else{
    alert("Quản Lý.");
}