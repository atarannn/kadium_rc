$(document).ready(function(){
  $(".page__inner").on("click",".btn-down", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top - 200;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});
