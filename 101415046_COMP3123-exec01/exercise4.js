function angle_Type(num){
    if (num >= 0 && num < 90){
        return "Acute Angle";
    }
    else if (num == 90){
        return "Right Angle";
    }
    else if (num > 90 && num < 180){
        return "Obtuse Angle";
    }
    else if (num == 180){
        return "Straight angle";
    }
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))
