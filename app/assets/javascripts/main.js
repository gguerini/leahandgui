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
    var offSetScroll = 580;
    var offSetScrollBottom = 7920;

    if (scroller >= 450) {
      $("#flag").fadeOut(250);
    }
    else {
     $("#flag").fadeIn(250); 
    }

    if(scroller >= offSetScroll && scroller <= offSetScrollBottom) {
      $("#go_home").fadeIn(250);
    }
    else {
      $("#go_home").fadeOut(250);
    }
  });

  $('form[data-update-target]')
    .live('ajax:success', function(data, status, xhr) {
      var target = $(this).data('update-target');

      if (status.presence_wedding) {
        $('#message_presence').toggle();
      }
      else {
        $('#message_absence').toggle();
      }
      $('#' + target).hide();
    })
    .live('ajax:error', function(xhr, status, error) {
      var errors = $.parseJSON(status.responseText);
      if (errors.email != undefined) {
        var error_message = new String(errors.email);

        // console.log(error_message.substring(0, 21));
        // console.log(error_message.substring(0, 18));

        if(error_message.substring(0, 21) == "is already registered" || error_message.substring(0, 18) == "já está cadastrado") {
          var target = $(this).data('update-target');
          $('#message_already_rsvp').toggle();
          $('#' + target).hide();
        }
      }
  });

  // $("input#rsvp_email").verimail({
  //   denyTempEmailDomains: true,
  //   messageElement: "p#status-message",
  //   language: 'ptbr'
  // });

});