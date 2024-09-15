
function capitalizeInitials(str){
    let result = "";
    let flag = true;

    for(i=0;i < str.length; i++){
        let current = str[i];
        if (current == " "){
            result = result + current;
            flag = true;
        }
        else{
            if (flag && current >= "a" && current <= "z"){
                result = result + upper(current)
                flag = false;
            }
            else {
                result = result + current;
                flag = false;
            }

        }
    }
    return result;
}

function upper(alphabet){
    const la = 'abcdefghijklmnopqrstuvwxyz';
    const ua = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 26; i++) {
        if (alphabet == la[i]) {
            return ua[i];
        }
    }
    return alphabet;
}

let string1 = "he eats an apple";
let output = capitalizeInitials(string1);
console.log(output); 