var mmenu=false;
$(document).ready(function(){
	smoothScroll.init({speed:1000});
	$('#home').parallax("50%",0.4);
  new WOW().init();
  $('.mmenu').click(function(){
    if(mmenu==false){
        $('#menu li').css('display','inline-block');
        $('.mmenu span').attr('class','glyphicon glyphicon-remove');
        mmenu=true;
    }
    else{
        $('#menu li').attr('style','');
        $('.mmenu span').attr('class','glyphicon glyphicon-menu-hamburger');
        mmenu=false;
    }
  });
});

$.fn.scrollEnd = function(callback, timeout) {          
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

// scroll
var onScroll=false;
$(window).scroll(function(){
	if(!onScroll){
		$('.menu').slideUp();
		onScroll=true;
	}
});

$(window).scrollEnd(function(){
    $('.menu').slideDown('slow','swing');
    onScroll=false;
}, 800);