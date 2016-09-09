$(document).ready(function(){
	var number = numberGen();
	var count = 0;

	/*--- Display information modal box ---*/
 $(".what").click(function(){
   $(".overlay").fadeIn(1000);
 });

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
  $(".overlay").fadeOut(1000);
});

 /*------- New Game ------------*/
 $('.new').click(function () {
   $('#feedback').text('Make your Guess!');
     //makes counter and input start over
   $('#guessList').empty();
   count = 0;
   $('#count').text(count);
   $('#userGuess').val("");
   number = numberGen();
   //button becomes enabled.
   $('#guessButton').prop('disabled', false);  
});

 /*----------- User Input ----------------*/  
 $('form').submit(function(e){
   e.preventDefault(); 
   $('#feedback').empty();
   var guessVal = $('#userGuess').val();
   $('#guessList').append('<li>' + guessVal + '</li>');
   guessVal = Number(guessVal);
   formula(guessVal);
 });

// /*----------- Number Checker ----------------*/
var formula = function(hat){
  count++;
  $('#count').html(count);
  
//When figured out the button gets disabled.
 if(hat === number) {
  $('#feedback').text('YOU FIGURED IT OUT! YOU\'RE SO SMART!');
  $('#guessButton').prop('disabled', true);
  return;
}
else if (hat > number - 3 && hat < number + 3){
  $('#feedback').text('You\'re getting warmer!');
  return;
}

else if (hat > number - 15 && hat < number + 15){
  $('#feedback').text('You\'re getting warmer!');
  return;
}
else if (isNaN(hat)) {
  $('#feedback').text('Please enter a number.');
  return;
}
else {
  $('#feedback').text('Cold cold cold!');
  return;
};
};




/*------- Random Number Generator ------------*/
function numberGen() {
  var number = Math.floor((Math.random() * 100) + 1);
  return number;
}

/*---------------- End --------------------*/
});













