/////////////////////////////////////
// Lecture: Hoisting
/*We already know that any variable declared within a scope belongs to that scope. 
* But what we don’t know yet is that no matter where variables are declared within a particular scope,
* all variable declarations are moved to the top of their scope (global or local). This is because of a concept called */

/*
// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


// variables

console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/



/////////////////////////////////////
// Lecture: Scoping
/* Scoping is determining where variables, functions, and objects are accessible in your code during runtime.
* In Javascript, there are two scopes:
* Global Scope: There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it’s defined outside of a function.
* Local Scope :Variables declared within a function are in the local scope. 
* Variables in the local scope are only accessible within the function in which they are defined,
* i.e they are bound to their respective functions each having different scopes.
*/
/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
/*Scoping answers the ques&on “where can we access a certain
variable?”
• Each new funcMon creates a scope: the space/environment, in
which the variables it defines are accessible.
• Lexical scoping: a func&on that is lexically within another func&on
gets access to the scope of the outer func&on. */
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/



/////////////////////////////////////
// Lecture: The this keyword
/* the this keyword points at the global object,
(the window object, in the browser).
• Method call: the this variable points to the object that is calling
the method.
• The this keyword is not assigned a value un5l a func5on where it is
defined is actually called.*/

/*
//console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
