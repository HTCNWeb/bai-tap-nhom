// hiện nút xem chi tiết sản phẩm khi hover
$(document).ready(function () {
    var cards = document.querySelectorAll(".product-box");

    [...cards].forEach((card) => {
        card.addEventListener("mouseover", function () {
            card.classList.add("is-hover");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("is-hover");
        });
    });
});
//Kiểm tra ràng buộc modal đăng nhập và đăng ký
$(document).ready(function () {
    function ktraten1() {
        let ten = $("#user1").val();
        let patten = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*){1}$/;
        if (patten.test(ten)) {
            //dung
            $("#er1").html("*");
            $("#user1").removeClass("is-invalid");
            $("#user1").addClass("is-valid");
            return true;
        } else {
            $("#er1").html("Ten sai!!!!");
            $("#user1").addClass("is-invalid");
            return false;
        }
    }
    $("#user1").blur(function (e) {
        ktraten1();
    });
    function ktraho() {
        let ho = $("#ho").val();
        let patten = /^([A-Z]{1}[a-z]*)$/;
        if (patten.test(ho)) {
            $("#erho").html("");
            $("#ho").removeClass("is-invalid");
            $("#ho").addClass("is-valid");
            return true;
        } else {
            $("#erho").html("Họ không hợp lệ");
            $("#ho").addClass("is-invalid");
            return false;
        }
    }
    $("#ho").blur(function (e) {
        ktraho();
    });
    function ktraten() {
        let ten = $("#ten").val();
        let patten = /^([A-Z]{1}[a-z]*)$/;
        if (patten.test(ten)) {
            $("#erten").html("");
            $("#ten").removeClass("is-invalid");
            $("#ten").addClass("is-valid");
            return true;
        } else {
            $("#erten").html("Tên không hợp lệ");
            $("#ten").addClass("is-invalid");
            return false;
        }
    }
    $("#ten").blur(function (e) {
        ktraten();
    });
    function ktrasdt() {
        let sdt = $("#sdt").val();
        let patten = /^\d{1,12}$/;
        if (patten.test(sdt)) {
            $("#ersdt").html("");
            $("#sdt").removeClass("is-invalid");
            $("#sdt").addClass("is-valid");
            return true;
        } else {
            $("#ersdt").html("Số điện thoại không hợp lệ");
            $("#sdt").addClass("is-invalid");
            return false;
        }
    }
    $("#sdt").blur(function (e) {
        ktrasdt();
    });
    function ktramail() {
        let mail = $("#email").val();
        let patten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (patten.test(mail)) {
            $("#ermail").html("");
            $("#email").removeClass("is-invalid");
            $("#email").addClass("is-valid");
            return true;
        } else {
            $("#ermail").html("Email không hợp lệ");
            $("#email").addClass("is-invalid");
            return false;
        }
    }
    $("#email").blur(function (e) {
        ktramail();
    });
    function ktrapass() {
        let pass = $("#pass").val();
        if (pass === "") {
            $("#erpass").html("Mật khẩu không được rỗng");
            $("#pass").addClass("is-invalid");
            return false;
        } else {
            $("#erpass").html("");
            $("#pass").removeClass("is-invalid");
            $("#pass").addClass("is-valid");
            return true;
        }
    }
    $("#pass").blur(function (e) {
        ktrapass();
    });
});

// nút tăng giảm trang chi tiết sản phẩm
$(document).ready(function () {
    // Lấy đối tượng input và hai nút tăng/giảm
    var input = document.querySelector(".form-control");
    var btnDecrease = document.querySelector("#button-giam");
    var btnIncrease = document.querySelector("#button-tang");

    // Định nghĩa hàm tăng giảm số lượng sản phẩm
    function changeQuantity(delta) {
        var value = parseInt(input.value);
        if (isNaN(value)) {
            value = 0;
        }
        value += delta;
        if (value < 0) {
            value = 0;
        }
        input.value = value;
    }

    // Thêm sự kiện click cho nút tăng và giảm
    btnIncrease.addEventListener("click", function () {
        changeQuantity(1);
    });

    btnDecrease.addEventListener("click", function () {
        changeQuantity(-1);
    });
});

// tắt cuộn chuột tăng giảm giá trị của input type number
$(document).ready(function () {
    var inputNumber = document.querySelector('input[type="number"]');
    inputNumber.addEventListener(
        "mousewheel",
        function (e) {
            // Ngăn chặn sự kiện cuộn chuột mặc định của trình duyệt
            e.preventDefault();
        },
        { passive: false }
    ); // Sử dụng {passive: false} để ngăn chặn một số trình duyệt tối ưu hiệu suất
});

// thay ảnh nhỏ sản phẩm thành ảnh chính khi click ảnh và color
$(document).ready(function () {
    var mainimg = document.getElementById("Main-Img");
    var smallimg = document.getElementsByClassName("small-img");

    
    smallimg[0].onclick = function () {
        mainimg.src = smallimg[0].src;
    };
    smallimg[1].onclick = function () {
        mainimg.src = smallimg[1].src;
    };
    smallimg[2].onclick = function () {
        mainimg.src = smallimg[2].src;
    };

    $('input[name="color"]').click(function (e) { 
        var pickColor = $('input[name="color"]:checked').val();
        if (pickColor == "color-1"){
            mainimg.src = smallimg[0].src;
        }
        else if (pickColor == "color-2"){
            mainimg.src = smallimg[1].src;
        }
        else{
            mainimg.src = smallimg[2].src;
        }
        
    });
});
