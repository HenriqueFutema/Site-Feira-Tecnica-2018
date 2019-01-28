$(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('nav').addClass('bg-active');

    } else{
      $('nav').removeClass('bg-active');

    }

});



var $doc =$('html, body');
var menut =$("#meuheader").innerHeight();
$('nav a').click(function(){
$doc.animate({
    scrollTop:$($.attr(this,'href')).offset().top - menut},500);
 return false;
});


$(document).ready(function(){
  $('.phone').mask('0000-0000');
});
