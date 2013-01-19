$(document).ready(function() {

  $(window).scrollTop(0);
  
  var trueHeight = 10;
  $("a[href^=#]").live("click",function() {
    scroll_area = $(this).attr('href');
    scroll_diff = $(scroll_area).offset().top - trueHeight;
    $("html,body").stop(true,true).animate({scrollTop:scroll_diff}, 1000, 'easeOutExpo');
    
    return false;
  });
  
  $('.hastip').tooltipsy({
    alignTo: 'element',
    offset: [0, 1]
  });
  
  $('.arrow').hover(function() {
    $(this).stop(true,true).animate({
      opacity:1
    },500,'easeOutExpo');
  },function() {
    $(this).stop(true,true).animate({
      opacity:0.5
    },500,'easeOutExpo');
  }); 
  
  $(window).scroll(function() {
    var scroller = $(window).scrollTop();
    var offSetScroll = 550;
    var offSetScrollBottom = 7320;    

    if(scroller >= offSetScroll && scroller <= offSetScrollBottom) {
      $("#go_home").fadeIn(250);
    }
    else {
      $("#go_home").fadeOut(250);
    }
  });

});