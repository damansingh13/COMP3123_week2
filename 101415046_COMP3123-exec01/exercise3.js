function right (string){
    if (string.length >= 3){
        new_str= "";
        for (i = string.length - 3 ; i < string.length; i++){
            new_str += string[i];
        }
        for (i=0 ; i < string.length - 3 ; i++ ){
            new_str += string[i];
        }
    return new_str;
    }
    return string;
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
