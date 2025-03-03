let a = +prompt("Nhập cạnh a:");
let b = +prompt("Nhập cạnh b:");
let c = +prompt("Nhập cạnh c:");

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Vui lòng nhập số hợp lệ và lớn hơn 0!");
} else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Tam giác đều");
    } else if (a === b || a === c || b === c) {
        alert("Tam giác cân");
    } else if (
        a * a + b * b === c * c || 
        a * a + c * c === b * b || 
        b * b + c * c === a * a
    ) {
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
} else {
    alert("Ba cạnh không tạo thành tam giác!");
}
