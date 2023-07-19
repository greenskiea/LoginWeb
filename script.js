//nhập vào năm
// alert ra đây có phải là năm nhuận ko
//tính năm nhuận
let year = parseInt(prompt("nhập vào số năm:"));
// function leapYear(year) {
//     if ((year % 4 == 0  && year % 100 != 0) || year % 400 == 0) {
//         alert("đây là năm nhuận");
//     }
//     else{
//         alert("đây không phải là năm nhuận");
//     }
// }

let chi = "";
function tinhChi(year) {
    switch (year % 12) {
        case 0:
            chi = "Thân";
            break;
        case 1:
            chi = "Dậu";
            break;
        case 2:
            chi = "Tuất";
            break;
        case 3:
            chi = "Hợi";
            break;
        case 4:
            chi = "Tý";
            break;
        case 5:
            chi = "Sửu";
            break;
        case 6:
            chi = "Dần";
            break;
        case 7:
            chi = "Mão";
            break;
        case 8:
            chi = "Thìn";
            break;
        case 9:
            chi = "Tị";
            break;
        case 10:
            chi = "Ngọ";
            break;
        case 11:
            chi = "Mùi";
            break;
    }
}
let can = "";
function tinhCan(year){
    switch (year % 10) {
        case 0:
            can = "CANH";
            break;
        case 1:
            can = "TÂN";
            break;
        case 2:
            can = "NHÂM";
            break;
        case 3:
            can = "QUÝ";
            break;
        case 4:
            can = "GIÁP";
            break;
        case 5:
            can = "ẤT";
            break;
        case 6:
            can = "BÍNH";
            break;
        case 7:
            can = "ĐINH";
            break;
        case 8:
            can = "MẬU";
            break;
        case 9:
            can = "KỶ";
            break;
    }
}
tinhCan(year)
tinhChi(year)

let CanChi = can + " " + chi;
alert(CanChi)


