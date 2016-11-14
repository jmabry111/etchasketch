numSquares = parseInt(prompt("Please enter a number between 2 & 100."))

$(document).ready(function(){
  grid = $('#grid');
  if( numSquares > 2 && numSquares <= 100){
  } else {
    numSquares = 64; 
  }
    for (g=1; g <= numSquares; g++) {
      for (c=1; c <= numSquares; c++) {
        grid.append('<div class="square"></div>');
      } 
      grid.append('<div class="nl"></div>');
    } 

    squareSize = 600/(numSquares)
    $('.square').width(squareSize);
    $('.square').height(squareSize);
});

$(document).ready(function() {
    lineColor = chooseColor() || 'black';
    $('.square').hover(function(){
      $(this).fadeOut('fast').fadeIn('fast');
      $(this).css("background-color", lineColor);
    });
});

$(document).ready(function() {
  $('button').on('click', function(){
    location.reload()
  });
});

function chooseColor() {
  lineColor = $('#color').val();
  $('#color').on('change', function(){
    if($(this).val() == "random"){
      lineColor = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    } else {
      lineColor = $(this).val();
    }
  });
}

