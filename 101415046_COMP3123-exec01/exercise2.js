function max (num1, num2, num3){
    let largest = 0;
    if (num1 === num2 && num2 === num3) {
        return `All three numbers are equal.`;
    }
    
    else if (num1 === num2 && num1 > num3) {
        return `num1 and num2 are equal and the largest: ${num1}`;
    }

    else if (num1 === num3 && num1 > num2) {
        return `num1 and num3 are equal and the largest: ${num1}`;
    }

    else if (num2 === num3 && num2 > num1) {
        return  `num2 and num3 are equal and the largest: ${num2}`;
    }

    else if (num1 > num2 && num1>num3){
        largest = num1;
        return `the largest number is : ${largest}`;
    }
    else if (num2>num1 && num2>num3){
        largest = num2;
        return `the largest number is : ${largest}`;
    }
    else{
        largest = num3;
        return `the largest number is : ${largest}`;
    }
}
let a = 510, b = 510, c = 440;
let result = max(a, b, c);
console.log(result); // Output: the largest number is : 1000