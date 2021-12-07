let number1 = +prompt('Input first number')
let number2 = +prompt('Input second number')

function SumOfNumbers(number1, number2) {
    return number1 + number2
}

function DivideOfNumbers(number1, number2){
    return number1 / number2
}

function DifferenceOfNumbers(number1, number2){
    return number1 - number2
}

function MultiplyOfNumbers(number1, number2) {
    return number1 * number2
}

if((number1 == parseInt(number1)) && (number2 == parseInt(number2)) ){
	alert(`Sum of input numbers: ${SumOfNumbers(number1, number2)}`)
	alert(`Difference of input numbers: ${DifferenceOfNumbers(number1, number2)}`)
	alert(`Multiple of input numbers: ${MultiplyOfNumbers(number1, number2)}`)
	alert(`Divide of input numbers: ${DivideOfNumbers(number1, number2)}`)
}else{
	alert('Some of inputs isn\'t a number')
}
