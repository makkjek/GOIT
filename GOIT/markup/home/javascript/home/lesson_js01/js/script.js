function enterNum (number1, number2) {
    result = number1;
    var isDegreeNegative = false ;
    if (number2 < 0) {
        number2 *= -1;
        isDegreeNegative = true;
    }
    for (var i = 1; i < number2; i++) {
        result *= number1;
    }
    if (isDegreeNegative) {
        return 1/result;
    } else return result;

}
var number = parseInt (prompt ('Input first number'));
var degree = parseInt (prompt ('Input the second number'));
console.log ("result:" + Math. pow (number, degree));
alert ("result of functin:" + enterNum (number, degree));
