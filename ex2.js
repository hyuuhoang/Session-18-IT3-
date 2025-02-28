let toan = Number(prompt("Nhập điểm môn toán:"));
let van = Number(prompt("Nhập điểm môn văn:"));
let anh = Number(prompt("Nhập điểm môn anh:"));

let ĐTB = (toan + van + anh)/3;

if(ĐTB>8.0 && ĐTB == 8.0){
    alert("Xếp loại học lực : giỏi");
}else if(6.5<ĐTB && ĐTB<8.0){
    alert("Xếp loại học lực : khá");
}else if(5.0<ĐTB && ĐTB<6.4){
    alert("Xếp loại học lực : Trung bình");
}else{
    alert("Xếp loại học lực : Yếu");
}