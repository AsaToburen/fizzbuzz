$(document).ready( function (){

for (var x= 1; x <= 100; x++){
	if ((x % 3 == 0) && (x % 5 == 0)) {
		document.write('FizzBuzz');
	} else if ( x % 3 == 0) {
		document.write('Fizz');
	} else if ( x % 5 == 0) {
		document.write('Buzz');
	}	else {document.write(" "+x+" ");
}

$('#output').append('x');
};
});