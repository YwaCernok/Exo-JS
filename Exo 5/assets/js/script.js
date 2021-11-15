var button = document.getElementById('button');
var recupValue = function () {
    var number1 = document.getElementById ('number1').value;
    var number2 = document.getElementById ('number2').value;
    alert (number1 / number2)
}
button.addEventListener('click', recupValue);



document.getElementById('button').addEventListener('click', function modulo(){
    alert('Reste de la division : ' + document.getElementById('firstNumber').value % document.getElementById('secondNumber').value)
})