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

    // Hover over Endless
    $(function() {
        $('#endless-art').hover(function() {
            $('.endless-songs').css('color', 'yellow');
        }, function() {
            // on mouseout, reset the background colour
            $('.endless-songs').css('color', '');
        });
    });
    
    // Hover over Blonde
    $(function() {
        $('#blonde-art').hover(function() {
            $('.blonde-songs').css('color', 'yellow');
        }, function() {
            // on mouseout, reset the background colour
            $('.blonde-songs').css('color', '');
        });
    });
    

});
