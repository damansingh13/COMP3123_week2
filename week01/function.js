function welcome(){
    console.log("Welcome to the class");
}
function greet(name){
    console.log("Hello, ${name} ");
}
console.log(typeof welcome);
console.log(typeof greet);

//Function expression

var welcome = function(){
    console.log("Welcome to the class");
}

//Arrow Function
var welcome = () => {
    console.log("Welcome to the class");
}

var greet = name => {
 console.log("Hello, ${name");
}

var add =  (a,b) => a + b // Arrow function is better since it saves time in coding as we don't have to use curly brackets and function is declared in one line

var add = (a,b) =>{
    return a + b
}

function print(a, b, ...c){
    console.log(arguments);
    console.log(a);
    console.log(b);
    console.log(c);
}
print(1,2,3,4,5,6,7,8,9,10);