$(document).ready(function() {

	var int = prompt("Please enter a number between 1 and 100"); //box asking for number btw 1-100
	
	parseInt("int", 0);
	
	while (int % 1 != 0) //checks to see if the number put in is a decimal or not
		{
			var int = prompt("Now try a number that is not a decimal");
			parseInt("int", 0);
		}

	//while (int >100) {
	//		var int = prompt("I said 'between 1 and 100'. Try again.");
	//		parseInt("int", 0);
	//	}

	fizzBuzz();

	console.log(int);

	
	

     
	
	

	function fizzBuzz (){
		if (int % 3 == 0 && int % 5 == 0) // if the remainder of the division of 3 and 5 =0>
		{
			$('<p></p>').appendTo("body").html('<p>' + "FizzBuzz!" + '</p>');
		} 
		else if (int % 5 == 0) //if the remainder of the division of 5 = 0 >
		{
			$('<p></p>').appendTo("body").html('<p>' + "Buzz!" + '</p>');
		}
		else if (int % 3 == 0)//if the remainder of the division of 3 = 0 >
		{
			$('<p></p>').appendTo("body").html('<p>' + "Fizz!" + '</p>');
		}
		else $('<p></p>').appendTo("body").html('<p>' + int + '</p>');
	};
}); 