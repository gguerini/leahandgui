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

  var presence_msg = ""

  $('form[data-update-target]')
    .live('ajax:success', function(data, status, xhr) {
      var target = $(this).data('update-target');
      var response = "";

      if (status.presence_wedding) {
        response = "<h3>Thanks " + status.name + "!<br>We can't wait to party with you! :)</h3>";
      }
      else {
        response = "<h3>Bummer! Are you really sure you don't want to come? You will be missed. :(</h3>";
      }
      $('#' + target).html(response);
    })
    .live('ajax:error', function(xhr, status, error) {
      var errors = $.parseJSON(status.responseText);
      if (errors.email != undefined && errors.email == "has already been taken") {
        var target = $(this).data('update-target');
        var response = "<h3>You already RSVP. If you would like to update your status, please contact Leah or Guillermo.</h3>";
        $('#' + target).html(response);
      }
  });

  $("input#rsvp_email").verimail({
    denyTempEmailDomains: true,
    messageElement: "p#status-message",
    language: 'ptbr'
  });

});