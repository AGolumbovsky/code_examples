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