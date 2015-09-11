// weird and awesome ways to access the object's elements
var arr = [
    {
        name: "obama", 
        number: 44,
        first_term: true
    },
    
    function(number) {
        //change the number if re-elected
        arr[0].number ++;
        console.log(arr[0].number);
        console.log("something");
        
    }
    
];

arr[1](arr[0].number);


// arguments
if (arguments.length === 0) {
    console.log("no parameters specified");
};



// closure 
function yo (greeting) {
    
    return function(name) {
        console.log(greeting + " " + name);
    }
}
yo("OUTER greeting")("INNER name");

//catch it before it flies away

//this will work for a different i instead of all being the last one -- 3

// easy to use 'let' in the es6 instead of this code

function buildEr () {
    
    var arr = [];
    
    for(var i=0; i<3; i++) {
        arr.push(
            (function(j) {
                
                return function(){
                    
                    console.log(j);
                    
                }
            })(i)
        );
    };
    
    return arr;
}

var bldr = buildEr();

// invoke the first function from the arr
bldr[0]();





// sorry, I had to do it...
var is = {
    some: {
        bullshit: function() {
        
            console.log('Right you are, mister');
        }
    }
}

this.is.some.bullshit(); // I called it 


// functional programming

function mapEach (arr, fn) {
    
    var newArr = [];
    
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
         fn(arr[i]);
        )
    }
    return newArr;
}

var numeros = [1,3,7,5,8,3,0];

var double = mapEach(numeros, function(num) {
    return num * 2;
});


// bind() (creates a copy with .this you define)

var persona = {
    firstName: "Arnold",
    lastName: "Schwarzenegger",
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

// following function will not work without bind()

var logName = function() {
    console.log("name is: " + this.getFullName() )
}
// using bind()

var logBound = logName.bind(persona);
logBound();
// OR 
var logName = function(arg1, arg2) {
    console.log("name is: " + this.getFullName() )
}.bind(persona)

// call
logName.call("what .this will be", arg1, arg2)
//apply (almost same but takes an array of args)
logName.apply("the .this", [arg1, arg2])

//function borrowing
persona2 = {
    firstName: "Jean-Claude",
    lastName: "Van Dame"
}
logBound.call(persona2)

// fn currying
function multiply(a, b) {
    return a * b;
}
//sets .this(no change) and fixes first parameter to be 2
var multiplyBy2 = multiply.bind(this, 2);

multiplyBy2(5);


//constructors
function Drink(proof, country) {
    this.name = name,
    this.country = country
}


// new will create an empty object, invoke the Drink, return the object(if you don't use return statement)
var vodka = new Drink(80, 'around Russia');
var chacha = new Drink(90, "Georgia");


// this will return boolean whether String object longer than limit
// function sits on the String prototype and is accessible by all String objects
// the string is converted into an object
String.prototype.isGreaterThan = function(limit) {
    return this.length < limit;
}
console.log("zakobu".isGreaterThan(6)); // false; limit = 7 --> true