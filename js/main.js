// Làm hàm lấy giá trị theo ID 

function get(id) {
    return document.getElementById(id);
}

//Tạo thể hiện của DanhSachNhanVien:
// var dssv = new DanhSachNhanVien();
// var validation = new Validation();

//lấy thông tin nhân viên 
function layThongTinNV(){
    var taiKhoan = get("tknv").value;
    var ten = get("name").value;
    var email = get("email").value;
    var pass = get("password").value;
    var date = get("datepicker").value;
    var luong = get("luongCB").value;
    var chuc = get("chucvu").value;
    var gio = get("gioLam").value;




    var nv = new NhanVien(taiKhoan.trim(), ten, email, pass, date, luong, chuc, Number(gio))
    nv.tongLuong = nv.tinhLuong();
    nv.loaiNV = nv.xepLoai()
    
    console.log(nv)
}

get('btnThemNV').onclick = layThongTinNV