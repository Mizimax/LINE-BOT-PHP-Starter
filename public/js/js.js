var mmenu=false;
var fadeStart=80 
    ,fadeUntil=400 
    ,fading = $('.navbar')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0.9
    ;
    if( offset<=fadeStart ){
      opacity=0;
      fading.hide(); 
    }else if( offset<=fadeUntil ){
        opacity=0+Math.max(0,Math.min(0.9,offset/fadeUntil));
    }
    if(offset>fadeStart){
      fading.show(); 
      //$('body').animate({ backgroundColor: rgba(0,0,0,1) }, 0);
    }
    if(offset<1000){
      if(!$('body').is('.mcolor')){
        $('body').attr('class','');
        $('body').addClass('mcolor bganimate');
      }
    }else if(offset>1000){
      if(!$('body').is('.black')){
        $('body').attr('class','');
        $('body').addClass('black bganimate');
      }
    }
    fading.css('background','rgba(255,255,255,' + opacity + ')');
});
$(document).ready(function(){
  fading.hide();
  $('#thief').addClass('thiefmove');
	smoothScroll.init({speed:1000});
	$('#whatcomcamp').parallax("50%",0.3);
  //$('#para1').parallax("50%",0.7);
  new WOW({
    offset:30
  }).init();
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
  $('body').css('background-color','#323E6E'+($(this).scrollTop()/10));
	if(!onScroll){
		$('.menu').slideUp();
		onScroll=true;
	}
});

$(window).scrollEnd(function(){
    $('.menu').slideDown('slow','swing');
    onScroll=false;
}, 800);
