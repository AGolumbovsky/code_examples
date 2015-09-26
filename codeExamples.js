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


// bind() (creates a permanent copy with .this you define)

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

// this fn will only need the second parameter since this and first param are set above
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



// polyfill thing for Object.create, if doesn't exist in older browsers

  
  if (!Object.create) {
      Object.create = function(o) {
        if (arguments.length > 1) {
throw new Error('Object.create implementation... blah .... only accepts the first parameter') 
        function F() {};
        F.prototype = o;
        return new F();
        }
      }
  }

// javascript works in mysterious ways
// more stuff on types of stuff

var w = [
    'some string', 
    {
        one: "uno",
        two: "dos"
    },
    4.55555555
] ;
console.log(typeof w); // will return "object"
console.log(Object.prototype.toString.call(w)); // will return "[object array]".


typeof null; // !!! will return "object" !!!
typeof function() {}; // will return "function" so there is a way to tell from regular object


// javasript bugly behavior
var objecto = {
    
    mutee: "Original name", 
    
    rabbitHole: function() {
        
        this.mutee = "first mutation" // will change value of mutee, it's OK
        console.log(this);
        
        var bugly = function() {
            
            this.mutee = "second mutation" // this wii actually affect the **GLOBAL** obj. Not Cool if you don't know
            console.log(this);
        }
        bugly();
    }
}
objecto.rabbitHole();

// example of call and function borrowing:
// obj_2 borrows function from obj_1 and sets this to be obj_2. Pretty cool if you ask me
obj_1 = {
    uno: "uno",
    
    fun: function(ein, zwei) {
        
        this.uno = ein;
        this.dos = zwei;
    }
};


obj_2 = {
    uno: "odin", 
    dva: "dva"
};

obj_1.fun.call(obj_2, "ebalaZhabaGadyuku", "How much is the fish?");
console.log(obj_2);



















