$(document).ready(function(){
	var number = numberGen();
	
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
document.location.reload(true);
});

/*----------- User Input ----------------*/  
$('form').submit(function(e){
	e.preventDefault(); 
	// console.log(hat);

});

// /*----------- Number Checker ----------------*/
var formula = function(hat){
	console.log(typeof(hat));
  	if(hat === number) {
  		$('#feedback').text('YOU FIGURED IT OUT! YOU\'RE SO SMART!');
  	}
  	else if (hat > number - 3 && hat < number + 3){
  		$('#feedback').text('You\'re getting warmer!');
  	}
  
  	else if (hat > number - 15 && hat < number + 15){
  		$('#feedback').text('You\'re getting warmer!');

  	}
  	else if (isNaN(hat)) {
  		$('#feedback').text('Please enter a number.');
  	}
  	else {
  		$('#feedback').text('Cold cold cold!');
  	};
  };

/*-------------- Hot or Cold Saying --------------*/
$('form').on('click', '#guessButton', function(){
	$('h2#feedback').empty();
	var hat = $('#userGuess').val();
	$('ul').append('<li>' + hat + '</li>');
	hat = parseInt(hat);
	formula(hat);
  });
	

/*-------------- Saved Number of Guesses----------*/
$('#guessButton').click(function(){
	update($('#count'));

});

function update(j) {
	var n = parseInt(j.text(), 10);
	j.text( n + 1);

}


/*---------------- End --------------------*/
});


/*------- Random Number Generator ------------*/
  	function numberGen() {
  	var number = Math.floor((Math.random() * 100) + 1);
  	console.log(number);
  	return number;
  	};











