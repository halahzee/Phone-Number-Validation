
//Javascript function document
// This file has the testing function that will be tested in the test file after importing it with require and the location of this function.

let validation = {};

validation.phoneNumberValidation = function(inValue) 
{
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(inValue);
}


module.exports = validation;


