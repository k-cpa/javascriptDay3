const number = document.getElementById('number');
const number2 = document.getElementById('number2');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', function (){
    const value = Number(number.value);
    const value2= Number(number2.value);

    result.textContent = (value + value2);
})