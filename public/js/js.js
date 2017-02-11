var mmenu=false;
var fadeStart=80 
    ,fadeUntil=400 
    ,fading = $('.navbar')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0.9;
    var targetOffset = $("#learning").offset().top;
    var targetOffset2 = $("#schedule").offset().top;
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
    if(offset<targetOffset-200){
      if(!$('body').is('.mcolor')){
        $('body').attr('class','');
        $('body').addClass('mcolor bganimate');
      }
    }else if(offset>targetOffset2-200){
      if(!$('body').is('.black')){
        $('body').attr('class','');
        $('body').addClass('black bganimate');
      }
    }
    else if(offset>targetOffset-200){
      if(!$('body').is('.lcolor')){
        $('body').attr('class','');
        $('body').addClass('lcolor bganimate');
      }
    }
    fading.css('background','rgba(255,255,255,' + opacity + ')');
});
$(document).ready(function(){
  fading.hide();
  $('#thief').addClass('thiefmove');
	smoothScroll.init({speed:1000});
	$('#whatcomcamp').parallax("50%",0.3);
  /*$('#learning .container .container img').hover(function(){
    $('#learning .container .container img').css('opacity','0');
    $(this).css('opacity','1');
  },function(){
    $('#learning .container .container img').css('opacity','1');
  });*/
  $('#learning .container .container img').hover(function(){
    $(this).attr('style','opacity:1');
    $(this).attr('class','jello animated');
  },function(){
    $(this).attr('class','');
  });
  if ($(window).width() < 768) {
    //$('[data-toggle="popover"]:nth-of-type(odd)').attr('data-placement','right');
    $('[data-toggle="popover"]:eq(0)').attr('data-placement','left');
    $('[data-toggle="popover"]:eq(1)').attr('data-placement','right');
    $('[data-toggle="popover"]:eq(2)').attr('data-placement','left');
    $('[data-toggle="popover"]:eq(3)').attr('data-placement','right');
    $('[data-toggle="popover"]:eq(4)').attr('data-placement','left');
  } 
  $('[data-toggle="popover"]').popover();
  new WOW({
    offset:30
  }).init();
});

// scroll
var onScroll=false;
$(window).scroll(function(){
  $('body').css('background-color','#323E6E'+($(this).scrollTop()/10));
});