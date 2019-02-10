$(document).ready(function(){

    // Hover over Nostalgia, Ultra
    $(function() {
        $('#nostalgia-ultra-art').hover(function() {
          $('.nostalgia-ultra-songs').css('color', 'yellow');
        }, function() {
          // on mouseout, reset the background colour
          $('.nostalgia-ultra-songs').css('color', '');
        });
      });

    // Hover over Channel Orange
    $(function() {
    $('#channel-orange-art').hover(function() {
        $('.channel-orange-songs').css('color', 'yellow');
    }, function() {
        // on mouseout, reset the background colour
        $('.channel-orange-songs').css('color', '');
        });
    });


});
