let a = +prompt("Mời bạn nhập vào số a:");
let b = +prompt("Mời bạn nhập vào số b:");
let dau = prompt("Nhập các phép tính (+ , - , * , /)");

if (isNaN(a) || isNaN(b)) { 
    alert("Bạn phải nhập số hợp lệ!"); 
} else {
    let ketQua;
    if (dau == "+") {
        ketQua = a + b;
    } else if (dau == "-") {
        ketQua = a - b;
    } else if (dau == "*") {
        ketQua = a * b;
    } else if (dau == "/") {
        if (b === 0) {
            alert("Không thể chia cho 0!");
            ketQua = "Lỗi!";
        } else {
            ketQua = a / b;
        }
    } else {
        alert("Phép toán không hợp lệ!");
        ketQua = "Lỗi!";
    }

    if (ketQua !== "Lỗi!") {
        alert(`Kết quả của phép tính ${a} ${dau} ${b} = ${ketQua}`);
    }
}
