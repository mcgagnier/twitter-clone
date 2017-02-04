
$(document).ready(function() {

    // Part One - reveal tweet button and character count and double window size
    $('.tweet-compose').on('click', function() {
        $('#tweet-controls').show();
        $('.tweet-compose').css('height','5em');
    })
    $('#char-count').on('keypress' -1)

    // Part Two - Character count and tweet button disable
    var count = $('#char-count').html();
    $('.tweet-compose').on('keyup', function(){
      var newCount = count - $(this).val().length
      $('#char-count').html(newCount)

      if (newCount <= 10) {
          $('#char-count').css('color', 'red');
      }

      if (newCount < 0) {
          $('#tweet-submit').prop('disabled', true);
      }
    });

    // Part Three - Submit tweet and put in feed
    // $('#tweet-submit').on('click', function() {
    // $('#profile-summary')prepend('#stream')
    // })



})
