(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $("#download-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#start").offset().top
          }, 700);
      });
    $("#about,#about1").click(function() {
    $('html, body').animate({
        scrollTop: $("#abt").offset().top-100
          }, 700);
      });
    });