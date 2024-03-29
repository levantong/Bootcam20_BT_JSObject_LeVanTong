function NhanVien(taiKhoan, ten, email, pass, date, luong, chuc, gio){
    this.taiKhoan = taiKhoan;
    this.ten = ten;
    this.email = email;
    this.matKhau = pass;
    this.ngayLam = date;
    this.luongCoBan = luong;
    this.chucVu = chuc;
    this.gioLam = gio;
    this.tongLuong = 0;
    this.loaiNV = ''

    //phương thức tính lương và xếp loại nhân viên
    this.tinhLuong = function(){
        var total = '';
        if (this.chucVu == 'Sếp'){
            total = new Intl.NumberFormat().format(this.luongCoBan * 3)
        } else if (this.chucVu == 'Trưởng phòng'){
            total = new Intl.NumberFormat().format(this.luongCoBan * 2)
        } else if (this.chucVu == 'Nhân viên'){
            total = new Intl.NumberFormat().format(this.luongCoBan)
        } 
        return (total)
    }
    this.xepLoai = function(){
        var xeploai = '';
        if (this.gioLam >= 0 && this.gioLam < 160){
            xeploai = 'Trung Bình'
        } else if (this.gioLam >= 160 && this.gioLam < 176){
            xeploai = 'Khá'
        } else if (this.gioLam >= 176 && this.gioLam < 192){
            xeploai = 'Giỏi'
        } else{
            xeploai = 'Xuất Sắc'
        } 
        return (xeploai)
    }
}