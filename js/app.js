$(document).ready( function (){

var number = prompt("Please enter a number::");

//converts strings to numbers

var integer = +number;

//checks to see if prompt result is a whole number.

if (integer % 1 != 0) {

	 integer =prompt("Please enter a number!!!") }; 

//counts from 1 to the number submitted to the prompt with FizzBuzzes

var counts = function(integer){

 for (var x= 1; x <= integer; x++){
	if ((x % 3 == 0) && (x % 5 == 0)) {
		document.write('FizzBuzz');
	} else if ( x % 3 == 0) {
		document.write('Fizz');
	} else if ( x % 5 == 0) {
		document.write('Buzz');
	}	else {document.write(" "+x+" ");

};
};

//appends text to div  in html

$('#output').append('x');
};

counts(integer);

});