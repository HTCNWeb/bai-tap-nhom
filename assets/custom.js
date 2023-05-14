//preload data vào localStorage
let data = [
    //varsity
    {
        category: "Varsity",
        catLink: "VARSITY.html",
        name: "Ted Jacket",
        price: "299.000 VND",
        color: ["Blue", "Gray"],
        imglink1: "assets/img/danhmucsanpham/VARSITY/ted-jacket-2-0.jpg",
        imglink2: "assets/img/danhmucsanpham/VARSITY/ted-jacket-2-1.jpg",
    },
    //hoodie
    {
        category: "Hoodies",
        catLink: "HOODIES.html",
        name: "Script Hoodie",
        price: "229.000 VND",
        color: ["Black", "Grey"],
        imglink1: "assets/img/danhmucsanpham/HOODIES/script-hoodie0.jpg",
        imglink2: "assets/img/danhmucsanpham/HOODIES/script-hoodie1.jpg",
    },
    {
        category: "Hoodies",
        catLink: "HOODIES.html",
        name: "Signature Zipup Hoodie",
        price: "229.000 VND",
        color: ["Grey", "Black"],
        imglink1: "assets/img/danhmucsanpham/HOODIES/signature-zipup-hoodie-1-0.jpg",
        imglink2: "assets/img/danhmucsanpham/HOODIES/signature-zipup-hoodie-1-1.jpg",
    },
    //jacket
    {
        category: "Jacket",
        catLink: "JACKET.html",
        name: "Windbreaker Gorpcore Jacket",
        price: "239.000 VND",
        color: ["Black", "White"],
        imglink1: "assets/img/danhmucsanpham/JACKET/windbreaker-gorpcore-jacket0.jpg",
        imglink2: "assets/img/danhmucsanpham/JACKET/windbreaker-gorpcore-jacket1.jpg",
    },
    {
        category: "Jacket",
        catLink: "JACKET.html",
        name: "Sporty Jacket",
        price: "249.000 VND",
        color: ["Black Grey", "White Red"],
        imglink1: "assets/img/danhmucsanpham/JACKET/sporty-jacket0.jpg",
        imglink2: "assets/img/danhmucsanpham/JACKET/sporty-jacket1.jpg",
    },
    //cardigan
    {
        category: "Cardigans",
        catLink: "CARDIGANS.html",
        name: "Schoolknit Cardigan",
        price: "179.000 VND",
        color: ["Grey", "Cream White"],
        imglink1: "assets/img/danhmucsanpham/CARDIGANS/schoolknit-cardigan1.jpg",
        imglink2: "assets/img/danhmucsanpham/CARDIGANS/schoolknit-cardigan3.jpg",
    },
    //t-shirts
    {
        category: "T-Shirts & Polo Shirts",
        catLink: "T-SHIRTS-POLO-SHIRTS.html",
        name: "Bloke Tee",
        price: "149.000 VND",
        color: ["Black", "White"],
        imglink1: "assets/img/danhmucsanpham/T-SHIRTS-POLO-SHIRTS/bloke-tee0.jpg",
        imglink2: "assets/img/danhmucsanpham/T-SHIRTS-POLO-SHIRTS/bloke-tee1.jpg",
    },
    {
        category: "T-Shirts & Polo Shirts",
        catLink: "T-SHIRTS-POLO-SHIRTS.html",
        name: "Cities Ball Tee",
        price: "149.000 VND",
        color: ["White", "Light Blue"],
        imglink1: "assets/img/danhmucsanpham/T-SHIRTS-POLO-SHIRTS/cities-ball-tee1.jpg",
        imglink2: "assets/img/danhmucsanpham/T-SHIRTS-POLO-SHIRTS/cities-ball-tee2.jpg",
    }
];
function loadData(nameSP) {
    //load new
    let result = data.find((item) => item.name === nameSP);
    localStorage.setItem("data", JSON.stringify(result));
}

// hiện nút xem chi tiết sản phẩm khi hover
$(document).ready(function () {
    let cards = document.querySelectorAll(".product-box");

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

//trang chi tiết sản phẩm
$(document).ready(function () {
    if(window.location.pathname.includes("prodinfo")) {

        //lấy dữ liệu và đắp vào trang
        if(localStorage.data === 'undefined') {
            window.location.href = "404.html";
        }
            let prodData = JSON.parse(localStorage.data);
            [...document.getElementsByClassName("prodName")].forEach((elem) => {
                elem.textContent = prodData.name;
            });
            [...document.getElementsByClassName("prodPrice")].forEach((elem) => {
                elem.textContent = prodData.price;
            });
            [...document.getElementsByClassName("img1")].forEach((elem) => {
                elem.src = prodData.imglink1;
            });
            [...document.getElementsByClassName("img2")].forEach((elem) => {
                elem.src = prodData.imglink2;
            });
            [...document.getElementsByClassName("prodColor")].forEach((elem, index) => {
                elem.textContent = prodData.color[index];
            });
            $(".prodCategory").html(`<a class=\"text-uppercase\" href=${prodData.catLink}>${prodData.category}</a>`)

        // nút tăng giảm số lượng trong trang chi tiết sản phẩm
        // Lấy đối tượng input và hai nút tăng/giảm
        let input = document.querySelector(".prodCount");
        let btnDecrease = document.querySelector("#button-giam");
        let btnIncrease = document.querySelector("#button-tang");

        //function thay số lượng
        function changeQuantity(delta) {
            let value = parseInt(input.value);
            if (isNaN(value) || value === 1 && delta === -1) {
                value = 1;
            } else {
                value += delta;
                input.value = value;
            }
        }

        // Thêm sự kiện click cho nút tăng và giảm
        btnIncrease.addEventListener("click", function () {
            changeQuantity(1);
        });
        btnDecrease.addEventListener("click", function () {
            changeQuantity(-1);
        });

        // tắt cuộn chuột tăng giảm giá trị của input type number
            let inputNumber = document.querySelector('input[type="number"]');
            inputNumber.addEventListener(
                "mousewheel",
                function (e) {
                    // Ngăn chặn sự kiện cuộn chuột mặc định của trình duyệt
                    e.preventDefault();
                },
                { passive: false }
            ); // Sử dụng {passive: false} để ngăn chặn một số trình duyệt tối ưu hiệu suất

        // thay ảnh nhỏ sản phẩm thành ảnh chính khi click ảnh và color
            let mainimg = document.getElementById("Main-Img");
            let smallimg = document.getElementsByClassName("small-img");

            smallimg[0].onclick = function () {
                mainimg.src = smallimg[0].src;
            };
            smallimg[1].onclick = function () {
                mainimg.src = smallimg[1].src;
            };

            $('input[name="color"]').click(function (e) {
                let pickColor = $('input[name="color"]:checked').val();
                if (pickColor == "color-1") {
                    mainimg.src = smallimg[0].src;
                } else if (pickColor == "color-2") {
                    mainimg.src = smallimg[1].src;
                } else {
                    mainimg.src = smallimg[2].src;
                }
            });
    }
});
function addCart() {
    //get sản phẩm có sẵn trong data
    let prodData = JSON.parse(localStorage.data);
    let checkColor = $('input[name="color"]:checked').val();
    let color = (checkColor === 'color-1') ? prodData.color[0] : prodData.color[1];
    let size = $('input[name="size"]:checked').val();
    let quantity = $('.prodCount')[0].value;
    let cartDB = JSON.parse(localStorage.cart);
    let prod = {
        "imgLink": (checkColor === 'color-1') ? prodData.imglink1 : prodData.imglink2,
        "prodNameOnly": `prodData.name`,
        "prodName": `${prodData.name}\n${size} / ${color}`,
        "prodPrice": prodData.price,
        "prodQuantity": quantity
    }
    let checkDup = cartDB.find((product) => product.prodName.includes(prodData.name))
    if(checkDup && checkDup.prodQuantity !== quantity) {
        checkDup.prodQuantity = quantity;
    } else {
        cartDB.push(prod);
    }
    localStorage.setItem("cart", JSON.stringify(cartDB));
    alert("Thêm sản phẩm vào giỏ hàng thành công!");
}


//trang giỏ hàng
function deleteRow(btn, nameSP) {
    let row = btn.closest('tr');
    let cartDB = JSON.parse(localStorage.cart);
    let index = cartDB.findIndex(function(item) {
        return item.prodNameOnly === nameSP;
    });
    if(index !== -1) {
        cartDB.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartDB));
    }
    row.parentNode.removeChild(row);
}
$(document).ready(function () {
    if (window.location.pathname.includes("cart")) {
        let listSP = document.getElementsByClassName('cartList')[0];
        let cartDB = JSON.parse(localStorage.cart);
        cartDB.forEach(function(element) {
            let prodString = `<tr><td><div style="height: 120px;" class="d-flex justify-content-center align-items-center"><img class="img-thumbnail" src=${element.imgLink} alt="" width="100px" height="100px"></div></td><td><div style="height: 120px;" class="d-flex justify-content-center align-items-center"><div class=""><h5><a class="text-decoration-none text-dark" href="#">${element.prodName}</a></h5></div></div></td><td><div style="height: 120px;" class="d-flex justify-content-center align-items-center">${element.prodPrice}</div></td><td><div style="height: 120px;" class="d-flex justify-content-center align-items-center"><div class="input-group group-soLuong"><div class="input-group-prepend"><button class="btn btn-outline-dark no-border-radius" type="button" id="decrease-quantity2">-</button></div><input style="border: 1px solid black;" type="number" class="form-control text-center" aria-label="Số lượng" aria-describedby="button-addon1" value=${element.prodQuantity} minlength="0" id="quantity2" name="quantity2"><div class="input-group-append"><button class="btn btn-outline-dark no-border-radius" type="button" id="increase-quantity2">+</button></div></div></div></td><td><div style="height: 120px;" class="d-flex justify-content-center align-items-center">${(parseFloat(element.prodPrice.replace(/[^\d.-]/g, '').replace('.', ''))*element.prodQuantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'VND')}</div></td><td><div style="height: 120px;" class="d-flex justify-content-center align-items-center"><button class="btn btn-default" onclick="deleteRow(this, '${element.prodNameOnly}')"><i class="bi bi-trash-fill"></i></button></div></td></tr>`
            listSP.innerHTML += prodString;
        });

    }
})


//trang checkout
$(document).ready(function () {
  let cart = $('.checkoutInfo');
  let cartDB = JSON.parse(localStorage.cart);
  let total = 0;
    cartDB.forEach(function(element) {
        let prodInfo = element.prodName.split('\n');
        let prodString = `<li class="list-group-item d-flex justify-content-between lh-condensed"><div><h6 style="color: black;"><b>${prodInfo[0]}</b></h6><small class="text-muted">${prodInfo[1]}</small></div><span class="text-muted">${(Number(element.prodPrice.replace(/\s/g, '').replace('VND', ''))*element.prodQuantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'K')}</span></li>`
        cart.append(prodString);
        total += Number(element.prodPrice.replace(/\s/g, '').replace('VND', ''))*element.prodQuantity;
    })
    cart.append(`<li class="list-group-item d-flex justify-content-between"><span>Tổng (VNĐ)</span><strong>${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }).replace('₫', 'K')}</strong></li>`)
})

//global functions
$(document).ready(function () {
    let cartDB = JSON.parse(localStorage.cart);
    let cart = $(".cartSize")
    if(cartDB.length > 0) {
        cart.html(cartDB.length);
    }
})