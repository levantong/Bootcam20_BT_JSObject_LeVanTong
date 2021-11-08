// Làm hàm lấy giá trị theo ID 

function get(id) {
    return document.getElementById(id);
}

//Tạo thể hiện của DanhSachNhanVien:
var dsnv = new DanhSachNhanVien();



//lập hàm lưu mảng dsnv vào LocalStorage với key là DSNV
function setLocalStorage(mangNV) {
    localStorage.setItem("DSNV", JSON.stringify(mangNV));  //chuyển kiểu Json, lưu vào local Storge
}

function getLocalStorage(){
    if(localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienTable(dsnv.mangNV)
    }
}

//Tạo thể hiện của Validation
var validation = new Validation();

//lấy thông tin nhân viên từ form nhập vào
function layThongTinNV(){
    var taiKhoan = get("tknv").value;
    var ten = get("name").value;
    var email = get("email").value;
    var pass = get("password").value;
    var date = get("datepicker").value;
    var luong = get("luongCB").value; 
    var chuc = get("chucvu").value;
    var gio = get("gioLam").value;

    var isValid = true; //isValid: biến thể hiện thõa mãn yêu cầu nhập vào

    isValid &= validation.kt


    var nv = new NhanVien(taiKhoan.trim(), ten, email, pass, date, luong, chuc, Number(gio))
    nv.tongLuong = nv.tinhLuong();
    nv.loaiNV = nv.xepLoai()

    dsnv.themNV(nv) //thêm nhân viên vào mảng dsnv
    console.log(dsnv.mangNV)

    hienTable(dsnv.mangNV)
    setLocalStorage(dsnv.mangNV); //lưu mảng dsnv vào LocalStorage

}

get('btnThemNV').onclick = layThongTinNV

//Hiển thị thông tin sinh viên khi load trang
function hienTable(mangNV) {
    var content = ''; //biến hiển thị để cộng dồn chuỗi vào khi duyệt mảng nhân viên
    for (var i = 0; i < mangNV.length; i++) {
        content += `
        <tr>
            <td>${mangNV[i].taiKhoan}</td>
            <td>${mangNV[i].ten}</td>
            <td>${mangNV[i].email}</td>
            <td>${mangNV[i].ngayLam}</td>
            <td>${mangNV[i].chucVu}</td>
            <td>${mangNV[i].tongLuong}</td>
            <td>${mangNV[i].loaiNV}</td>
            <td style="display: flex;">
                <button onclick="xoaNhanVien('${mangNV[i].taiKhoan}')" class="btn btn-danger mr-1">Xóa</button>
                <button onclick="xemThongTin('${mangNV[i].taiKhoan}')" class="btn btn-info" data-toggle="modal" data-target="#myModal">Cập nhật</button>
            </td>
    	</tr>`
    }
    get("tableDanhSach").innerHTML = content;
}

 
getLocalStorage() //Hiển thị danh sách nhân viên đã lưu trong Local Storage lên bảng khi tải trang 

function xoaNhanVien(ma) {
    console.log(dsnv.mangNV)
    dsnv.xoaNV(ma);
    setLocalStorage(dsnv.mangNV);
    hienTable(dsnv.mangNV)
}

function xemThongTin(ma){
    var nvTimDuoc = dsnv.layThongTin(ma);
    if (nvTimDuoc != undefined) {
        get("tknv").disabled = true;
        get("tknv").value = nvTimDuoc.taiKhoan;
        get("name").value = nvTimDuoc.ten;
        get("email").value = nvTimDuoc.email;
        get("password").value = nvTimDuoc.matKhau;
        get("datepicker").value = nvTimDuoc.ngayLam;
        get("luongCB").value = nvTimDuoc.luongCoBan;
        get("chucvu").value = nvTimDuoc.chucVu;
        get("gioLam").value = nvTimDuoc.gioLam;

    }
}

function capNhatNV(){
    var taiKhoan = get("tknv").value;
    var ten = get("name").value;
    var email = get("email").value;
    var pass = get("password").value;
    var date = get("datepicker").value;
    var luong = get("luongCB").value; //chuyển lương nhập vào kiểu số, định dạng hiển thị lại
    var chuc = get("chucvu").value;
    var gio = get("gioLam").value;

    //tạo giá trị nhân viên mới
    var newNV = new NhanVien(taiKhoan, ten, email, pass, date, luong, chuc, gio)
    //tính lại lương và xếp loại nhân viên nếu có thay đổi
    newNV.tongLuong = newNV.tinhLuong();
    newNV.loaiNV = newNV.xepLoai();
    //gán giá trị mới vào nv cần cập nhật
    dsnv.capNhatNV(newNV);
    //cập nhật thay đổi vào LocalStorage, hiện lại bảng
    setLocalStorage(dsnv.mangNV);
    hienTable(dsnv.mangNV)
}
get("btnCapNhat").onclick = capNhatNV;