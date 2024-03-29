function Validation() {

    //Kiểm tra xem input có rỗng không?
    this.ktRong = function (value, alert, spanID) {
        if (value.trim() != "") {
            //nếu không rỗng, trả về true, ko có thông báo
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
            //Nếu rỗng => trả về false (ko hợp lệ, hiện cảnh báo)
        document.getElementById(spanID).innerHTML = alert;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    //Kiểm tra số tài khoản có trùng không?
    this.ktTaiKhoan = function (value, alert, spanID, mangNV) {
        //Không trùng
        var TKTrung = false;
        TKTrung = mangNV.some(function (nv) {
            return value == nv.taiKhoan;
        });
        //Nếu trùng
        if (TKTrung) {
            //Trùng báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        } else {
            //không trùng trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
    }


    //kiểm tra kiểu tên nhập vào (chỉ có chữ, không có số và kt đặc biệt)
    this.ktTen = function (value, alert, spanID) {
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        //Chuyển sang RegExp
        var reg = new RegExp(pattern)

        if (reg.test(value)) {
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    //Kiểm tra định dạng email nhập vào
    this.ktEmail = function (value, alert, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(pattern)) {
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
    //Kiểm tra mật khẩu nhập vào (không giới hạn độ dài, yêu cầu có cả chữ viết hoa, thường, số và ký tự đặc biệt)
    this.ktPass = function(value, alert, spanID){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
        if (value.match(pattern)) {
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    //Kiểm tra ngày nhập vào đề phòng user nhập tay sai định dạng
    this.ktDate = function(value, alert, spanID){
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
        if (value.match(pattern)) {
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    //Kiểm tra lương
    this.ktLuong = function(value, alert, spanID){
        var pattern = /^[0-9]+$/;
        if (value.match(pattern)) {
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    //Kiểm tra người dùng có chọn 1 mục trong mục chức vụ hay không?
    this.ktChucVu = function(selectID, alert, spanID){
        if(document.getElementById(selectID).selectedIndex != 0 ){
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }

    //Kiểm tra số giờ làm (yêu cầu từ 80-200)
    this.ktGioLam = function (value, alert, spanID) {
        if (value >= 80 && value < 200) {
            //hợp lệ trả về true
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        } else {
            //Không hợp lệ báo lỗi, trả về false
            document.getElementById(spanID).innerHTML = alert;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
    }
}