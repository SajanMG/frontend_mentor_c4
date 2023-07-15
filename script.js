$(document).ready(function () {
  var rate;
  $(".rate").click(function (e) {
    e.preventDefault();
    $(".rate").removeClass("focus");
    $(this).addClass("focus");
    rate = $(this).val();
  });

  $("#submit").on("click", function () {
    if (rate) {
      $("#given-rate").html(rate);
      $(".thank-you").css("display", "block");
      $(".front").css("display", "none");
    } else {
      alert("Please choose your rating before submitting");
    }
  });
});
