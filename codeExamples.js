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











