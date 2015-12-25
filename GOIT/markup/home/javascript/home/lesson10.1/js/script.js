function enterNum (n1, n2) {
    result = n1;
    var isDegreeNegative = false ;
    if (n2 < 0) {
        n2 *= -1;
        isDegreeNegative = true;
    }
    for (var i = 1; i < n2; i++) {
        result *= n1;
    }
    if (isDegreeNegative) {
        return 1/result;
    } else return result;

}
var number = parseInt (prompt ('Input first number'));
var degree = parseInt (prompt ('Input the second number'));
console.log ("result:" + Math. pow (number, degree));
alert ("result of functin:" + enterNum (number, degree));
