$(document).ready(function() {
  var colors = ['red', 'blue', 'green', 'peachpuff', 'brown', 'orange'];
  var currentColor;

  createBlocks();
  changeColor();

  $('.color-button').on('click', handleInput);

  function handleInput() {
    if($(this).data('color') === currentColor) {
      alert('You got it!\n\nNow try another!');
      changeColor();
    } else {
      updateMessage('Oh no! You guessed wrong!');
    }
  }

  function createBlocks() {
    for(var i = 0; i < colors.length; i++) {
      $('#button-container').append('<div class="color-button"></div>');
      var $el = $('#button-container').children().last();
      $el.css('background-color', colors[i]);
      $el.data('color', colors[i]);
    }
  }

  function changeColor() {
    currentColor = colors[randomNumber(0, colors.length - 1)];
    updatePrompt();
  }

  function updatePrompt() {
    $('#color-prompt').text('Can you find the ' + currentColor + ' block?');
  }

  function updateMessage(msg) {
    var $el = $('#message-text');
    $el.text(msg);
    $el.fadeIn('fast').delay(5000).fadeOut('slow');
  }


});

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
