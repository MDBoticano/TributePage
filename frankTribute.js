$(document).ready(function(){

    // Hover over Nostalgia, Ultra
    $(function() {
        $('#nostalgia-ultra-art').hover(function() {
          $('.hello').css('color', 'yellow');
        }, function() {
          // on mouseout, reset the background colour
          $('.hello').css('color', '');
        });
      });

    // Hover over Channel Orange
    $(function() {
    $('#channel-orange-art').hover(function() {
        $('#bye').css('color', 'yellow');
    }, function() {
        // on mouseout, reset the background colour
        $('#bye').css('color', '');
        });
    });


});
