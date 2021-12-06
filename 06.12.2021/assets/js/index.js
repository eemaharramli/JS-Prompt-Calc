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


alert(`Sum of numbers: ${SumOfNumbers(number1, number2)}`)
alert(`Divide of numbers: ${DivideOfNumbers(number1, number2)}`)
alert(`Difference of numbers: ${DifferenceOfNumbers(number1, number2)}`)
alert(`Multiply of numbers: ${MultiplyOfNumbers(number1, number2)}`)

