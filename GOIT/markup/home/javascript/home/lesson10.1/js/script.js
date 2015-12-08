function enterNum (n1, n2) {
    result = 1;
    for (var i = 0; i < n2; i++) {
        result = result * n1;
        console.log ("Число" + n1 + "в степени" +(i + 1) + "=" + result);
    }
    return result;
}
var n1 = parseInt (prompt ('Input first number'));
var n2 = parseInt (prompt ('Input the second number'));
console.log ("result:" + Math. pow (n1, n2));
if (n1 > 0) {
    console.log ("result of functin:" + enterNum (n1, n2));
} else {
    alert ("Input number bigger than 0");
}
