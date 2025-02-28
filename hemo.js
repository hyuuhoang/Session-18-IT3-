let salary = +prompt("nhập số tiền lương");
if(salary<5000000){
    console.log("thuế thu nhập là:", 0);
}else if(5000000<salary && salary<10000000){
    console.log("thuế thu nhập là", salary*5 /100)
}else if(10000000<salary && salary<15000000){
    console.log("thuế thu nhập là", salary*10 /100)
}

let stt = prompt("Mời nhập trạng thái");
let check = stt == "WORKING" ? "Đang làm việc" : "Không";

console.log("Trạng thái: ", check);

let check1 = stt == "WORKING" ? "Đang làm việc" : "Không";
console.log("Trạng thái: ", check);

let check2 = stt == "WORKING" ? "Đang làm việc" : "Không";
console.log("Trạng thái: ", check);

let check3 = stt == "WORKING" ? "Đang làm việc" : "Không";
console.log("Trạng thái: ", check);