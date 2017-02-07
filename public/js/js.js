$(document).ready(function(){
	smoothScroll.init({speed:1500});
	$('#home').parallax("50%",0.4);
	new WOW().init();
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
    $('.menu').slideDown('slow');
    onScroll=false;
}, 1000);