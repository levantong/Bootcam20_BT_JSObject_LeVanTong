function DanhSachNhanVien(){
    //khởi tạo mảng
    this.mangNV = [];
    //thêm nv
    this.themNV = function(nv){
        this.mangNV.push(nv)
    }
    //tìm vị trí nv trong mảng dựa vào tài khoản
    this.timViTri = function(ma){
        var viTri = -1;
        this.mangNV.map(function(nv, index){
            if(nv.taiKhoan == ma){
                viTri = index
            }
        })
        return viTri;
    }
    //xóa nv
    this.xoaNV = function(ma){
        var viTri = this.timViTri(ma);
        console.log(viTri)
        if (viTri > -1) {
            this.mangNV.splice(viTri,1)
        }
    }
    //lấy thông tin đối tượng từ vị trí
    this.layThongTin = function(ma){
        var viTri = this.timViTri(ma);
        if(viTri > -1){
            return this.mangNV[viTri];
        }
    }
    //cập nhật nhân viên
    this.capNhatNV = function(nv){
        var viTri = this.timViTri(nv.taiKhoan);
        if (viTri > -1){
            this.mangNV[viTri] = nv;
        }
    }

}