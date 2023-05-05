$(document).ready(function() {
    $('input[name="payment-method"]').change(function() {
      var selected = $('input[name="payment-method"]:checked').val();
      $('.payment-info').hide();
      $('.payment-' + selected + '-info').show();
    });
  });

  function startCountdown(expireTime) {
    var countdownElement = document.getElementById("countdown");

    // Tính thời gian còn
    var remainingTime = expireTime - Date.now();
    if (remainingTime < 0) {
      remainingTime = 0;
    }

    // Hiển thị thời gian đếm ngược
    var countdownInterval = setInterval(function () {
      remainingTime -= 1000;
      var minutes = Math.floor(remainingTime / 60000);
      var seconds = Math.floor((remainingTime % 60000) / 1000);
      countdownElement.innerHTML =
        "Thời gian còn : " +
        minutes +
        " phút " +
        seconds +
        " giây";

      // Kiểm tra nếu thời gian hết
      if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Đã hết thời gian thanh toán";
      }
    }, 1000);
  }

  function generateQRCode() {
    // Tạo URL thanh toán
    var amount = 100000;
    var orderId = Math.floor(Math.random() * 1000000000);
    var returnUrl = "http://example.com/success";
    var notifyUrl = "http://example.com/notify";
    var qrCodeUrl =
      "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" +
      encodeURIComponent(
        "https://test-payment.momo.vn/gw_payment/transactionProcessor?merchantId=MOMOTESTER20210529&merchantName=Demo%20Merchant&merchantOrderId=" +
          orderId +
          "&requestId=" +
          orderId +
          "&amount=" +
          amount +
          "&orderInfo=Thanh%20toán%20qua%20MoMo&returnUrl=" +
          returnUrl +
          "&notifyUrl=" +
          notifyUrl +
          "&extraData="
      );

    // Hiển thị mã QR
    var qrCodeElement = document.getElementById("qr-code");
    qrCodeElement.innerHTML = "<img src='" + qrCodeUrl + "' />";

    // Bắt đầu đếm ngược
    startCountdown(Date.now() + 600000); // 10 phút
  }

  generateQRCode();
  
