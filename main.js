function tinhKetQua() {
    var thunhap = document.getElementById("thunhap").value;
    var tienvay = document.getElementById("tienvay").value;
    var laisuat = document.getElementById("laisuat").value;
    var thoigianvay = document.getElementById("thoigianvay").value;
    thunhap = Number(thunhap);
    tienvay = Number(tienvay);
    laisuat = Number(laisuat);
    thoigianvay = Number(thoigianvay);
    if (isNaN(thunhap, tienvay, laisuat, thoigianvay) || (thunhap, tienvay, laisuat, thoigianvay) < 0 ){
        alert("Kiểm tra lại dữ liệu !");
        return;
    }
    var cothetra = thunhap * 0.6;
    var phaitra = (tienvay * (1 + laisuat / 100)) / thoigianvay;
    var ketqua1 = document.getElementById("ketqua1");
    var ketqua2 = document.getElementById("ketqua2");
    ketqua1.textContent = "Số tiền có thể trả mỗi tháng: " + cothetra;
    ketqua2.textContent = "Số tiền phải trả mỗi tháng: " + phaitra;
    if (cothetra > phaitra) {
        document.getElementById("dudk").style.display = "block";
        document.getElementById("khongdudk").style.display = "none";
    }
    else {
        document.getElementById("khongdudk").style.display = "block";
        document.getElementById("dudk").style.display = "none";
    }
}
