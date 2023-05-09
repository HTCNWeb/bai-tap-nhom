$(document).ready(function() {
    $('input[name="payment-method"]').change(function() {
      var selected = $('input[name="payment-method"]:checked').val();
      $('.payment-info').hide();
      $('.payment-' + selected + '-info').show();
    });
  });
