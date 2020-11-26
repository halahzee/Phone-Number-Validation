
/*


The function will allow the following phone number patterns

Input 								Expected output

" "										false
letters & numbers (abc4567890) 			 false
(123) 456-7890 							 true
(123)456-7890 							 true
123-456-7890  							 true
1234567890								true
123456									false
null									false
10 numbers								True

*/


//This file test an external function from the phone number validation that located in another file called app file. 

let validation = require("../app/phoneNumberValidation.js");

let assert = require ('chai').assert; 

describe('Phone Number Validation ', function(){

it('Empty string should fail', function(){
	let returnValue = validation.phoneNumberValidation(""); // empty string --- false 
	assert.equal(returnValue, false);
});

it('non numeric and numbers should fail', function(){
	let returnValue = validation.phoneNumberValidation("abc456789"); // letters and numbers - false 
	assert.equal(returnValue, false);
});


it('only non numeric should fail', function(){
	let returnValue = validation.phoneNumberValidation("abcdefghij"); // all letters - false 
	assert.equal(returnValue, false);
});

it('less than 10 numbers should fail', function(){
	let returnValue = validation.phoneNumberValidation("123456 "); // less than 10 --- false 
	assert.equal(returnValue, false);
});


it('Correct pattern should pass', function(){
	let returnValue = validation.phoneNumberValidation("(123) 456-7890"); // this pattern  ---- True 
	assert.equal(returnValue, true);
});

it('Correct pattern but more than 10 numbers should fail', function(){
	let returnValue = validation.phoneNumberValidation("(123) 456-7890000"); // same correct pattern more than 10 characters ---- false
	assert.equal(returnValue, false);
});

it('10 numbers should pass', function(){
	let returnValue = validation.phoneNumberValidation("1234567890");  // only 10 numbers ---- True. 
	assert.equal(returnValue, true);
});




});