numSquares = parseInt(prompt("Please enter a number between 3 & 100."))

$(document).ready(function(){
  grid = $('#grid');
  if( numSquares > 2 && numSquares <= 100){
  } else {
    numSquares = 64; 
  }
    for (g=1; g < numSquares; g++) {
      for (c=1; c < numSquares; c++) {
        grid.append('<div class="square"></div>');
      } 
      grid.append('<div class="nl"></div>');
    } 

    squareSize = 960/(numSquares)
    $('.square').width(squareSize);
    $('.square').height(squareSize);
});

$(document).ready(function() {
  $('.square').hover(function(){
    $(this).fadeOut('fast').fadeIn('fast');
    $(this).css("background-color", "black");
  });
});

$(document).ready(function() {
  $('button').on('click', function(){
    location.reload()
  });
});
