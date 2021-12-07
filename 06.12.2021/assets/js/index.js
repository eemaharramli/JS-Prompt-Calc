let firstNumber = +prompt('Input first number')
let secondNumber = +prompt('Input second number')

function SumOfNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function DivideOfNumbers(firstNumber, secondNumber){
    return firstNumber / secondNumber
}

function DifferenceOfNumbers(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

function MultiplyOfNumbers(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

if((firstNumber == parseInt(firstNumber)) && (secondNumber == parseInt(secondNumber)) ){
	alert(`Sum of input numbers: ${SumOfNumbers(number1, number2)}`)
	alert(`Difference of input numbers: ${DifferenceOfNumbers(number1, number2)}`)
	alert(`Multiple of input numbers: ${MultiplyOfNumbers(number1, number2)}`)
	alert(`Divide of input numbers: ${DivideOfNumbers(number1, number2)}`)
}else{
	alert('Some of inputs isn\'t a number')
}
