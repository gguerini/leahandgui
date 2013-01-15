$(document).ready(function() {

  $(window).scrollTop(0);
  
  var trueHeight = 10;
  $("a[href^=#]").live("click",function() {
    cible = $(this).attr('href');
    hauteur = $(cible).offset().top - trueHeight;
    $("html,body").stop(true,true).animate({scrollTop:hauteur},1000,'easeOutExpo');
    $(".nav li").removeClass("current");
    $(this).parent().addClass("current");
    return false;
  });
  
  var heightH5 = 0
  $('p.h5').each(function() {
    if($(this).height() > heightH5) {
      heightH5 = $(this).height()
    }
  });
  $('p.h5').height(heightH5);


  $('.hastip').tooltipsy({
    alignTo: 'element',
    offset: [0, 1]
  });
  
  $('input[type=text], textarea').focus(function() {    
    var defaultValue = $(this).attr('alt');   
    $(this).css({color:"#998876",fontStyle:'normal'});    
    if($(this).val() == defaultValue) {     
      $(this).val('');    
    }
    $(this).prev('.error').fadeOut(200);
  }); 
  
  $('input[type=text], textarea').blur(function() {   
    var defaultValue = $(this).attr('alt');   
    if($(this).val() == '') {     
      $(this).val(defaultValue);      
      $(this).css({color:'#BEB4A9',fontStyle:'italic'});    
    } 
  }); 
  
  $('#envoyer').hover(function() {
    $(this).stop(true,true).animate({
      opacity:1
    },500,'easeOutExpo');
  },function() {
    $(this).stop(true,true).animate({
      opacity:0.8
    },500,'easeOutExpo');
  });
  
  $('.btnplanmap').hover(function() {
    $(this).stop(true,true).animate({
      opacity:1
    },500,'easeOutExpo');
  },function() {
    $(this).stop(true,true).animate({
      opacity:0.7
    },500,'easeOutExpo');
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
  
  $('.mailto').hover(function() {
    $(this).stop(true,true).animate({
      opacity:1
    },500,'easeOutExpo');
  },function() {
    $(this).stop(true,true).animate({
      opacity:0.9
    },500,'easeOutExpo');
  }); 
  
  $(window).scroll(function() {
    var scroller = $(window).scrollTop();
    var offSetScroll = 550;
    var offSetScrollBottom = 6620;    
    if(scroller>=offSetScroll && scroller<=offSetScrollBottom) {
      $("#go_home").fadeIn(250);
    }
    else {
      $("#go_home").fadeOut(250);
    }
  });
  

});