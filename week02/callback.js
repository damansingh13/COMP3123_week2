var add = function  (a,b){
    return a + b;
}
var sub =  function (a,b){
    return a - b;
}

var makeacall = function(a,b, add, sub){
    if(a > b)
        return sub(a,b);
    else
        return add(a, b); 
    callback(a,b);
}

var r = makeacall(5,3, add, sub) //2
console.log(r);

var print = function () {
    console.log("Hello-1");
}
setInterval(print, 1000);

setInterval(() => {
    console.log("Hello-2");
}, 2000);