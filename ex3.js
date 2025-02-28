let login = prompt("Nhập tên từ bàn phím");
if(login == "ADMIN" || login == "admin"){
    let Themaster = prompt("Nhập mật khẩu");
    if(Themaster == "TheMaster"){
        alert("Welcome.");
    }else if(Themaster == "Null"){
        alert("Welcome.");
    }else{
        alert("Wrong password.");
    }
}else if(login == "Null"){
    alert("Cancelled");
}else{
    alert("I Don't know you");
}
