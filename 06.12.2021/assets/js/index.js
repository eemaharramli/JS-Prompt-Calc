let continution = false
do{
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
		alert(`Sum of input numbers: ${SumOfNumbers(firstNumber, secondNumber)}`)
		alert(`Difference of input numbers: ${DifferenceOfNumbers(firstNumber, secondNumber)}`)
		alert(`Multiple of input numbers: ${MultiplyOfNumbers(firstNumber, secondNumber)}`)
		alert(`Divide of input numbers: ${DivideOfNumbers(firstNumber, secondNumber)}`)
	}else{
		alert('Some of inputs isn\'t a number')
	}
	
	let answer = confirm('Do you want to calculate more?')
	
	answer ? continution = true : continution = false
	
}while(continution)
