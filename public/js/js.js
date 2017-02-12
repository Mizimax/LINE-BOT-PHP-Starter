var mmenu=false;
var fadeStart=80 
    ,fadeUntil=400 
    ,fading = $('.navbar')
;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0.9;
    var targetOffset = $("#learning").offset().top;
    if( offset<=fadeStart ){
      opacity=0;
      fading.hide(); 
    }else if( offset<=fadeUntil ){
        opacity=0+Math.max(0,Math.min(0.9,offset/fadeUntil));
    }
    if(offset>fadeStart){
      fading.show(); 
    }
    fading.css('background','rgba(162, 36, 88,' + opacity + ')');
});
$(document).ready(function(){
  fading.hide();
	smoothScroll.init({speed:1000});

  $('#learning .container .container img').hover(function(){
    $(this).attr('style','opacity:1');
    $(this).attr('class','jello animated');
  },function(){
    $(this).attr('class','');
  });
  if ($(window).width() < 768) {
    $('[data-toggle="popover"]:eq(0)').attr('data-placement','left');
    $('[data-toggle="popover"]:eq(1)').attr('data-placement','right');
    $('[data-toggle="popover"]:eq(2)').attr('data-placement','left');
    $('[data-toggle="popover"]:eq(3)').attr('data-placement','right');
    $('[data-toggle="popover"]:eq(4)').attr('data-placement','left');
  } 
  $('[data-toggle="popover"]').popover();
  var lanopt = $("#faq");

  lanopt.on("show.bs.collapse",".collapse", function(){
     lanopt.find(".collapse.in").collapse("hide");
  });
  new WOW({
    offset:30
  }).init();
});

// scroll
var onScroll=false;
$(window).scroll(function(){
  $('body').css('background-color','#323E6E'+($(this).scrollTop()/10));
});