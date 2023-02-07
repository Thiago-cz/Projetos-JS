function insert(num) {
	let result = document.querySelector("#result").innerHTML
	let previus = document.querySelector("#previus").innerHTML

	if (checkOperation() && result.length < 11) {
		document.querySelector("#previus").innerHTML += num

		if (checkSimbol(previus.charAt(previus.length - 1))) {
			document.querySelector("#result").innerHTML = ""
			console.log(previus.charAt(previus.length - 1))
		}
		document.querySelector("#result").innerHTML += num
	} else {
		document.querySelector("#result").innerHTML += num
	}
}

function checkOperation() {
	var previus = document.querySelector("#previus").innerHTML

	if (previus.includes("-") || previus.includes("+") || previus.includes("*") || previus.includes("/")) {
		return true
	}
	return false
}
function checkSimbol(simbol) {
	if (simbol == "+" || simbol == "-" || simbol == "*" || simbol == "/") {
		return true
	}
	return false
}

function simbol(simbol) {
	let result = document.querySelector("#result").innerHTML
	result += simbol
	document.querySelector("#previus").innerHTML = result
}
function virgula() {
	document.querySelector("#result").innerHTML += "."
}

function clean() {
	document.getElementById("result").innerHTML = ""
	document.getElementById("previus").innerHTML = ""
}

function clearLast() {
	let result = document.querySelector("#result").innerHTML
	let previus = document.querySelector("#previus").innerHTML
	document.getElementById("result").innerHTML = result.substring(0, result.length - 1)
	document.getElementById("previus").innerHTML = previus.substring(0, previus.length - 1)
}
let lastResult = 0

function soma(num1, num2,) {
	let n1 = parseFloat(num1), n2 = parseFloat(num2)
	let result = 0

	if (lastResult == 0) {
		result = n1 + n2
		return result
	}
	result = lastResult + n1
	return result
}

function subtracao(num1, num2) {
	let n1 = parseFloat(num1), n2 = parseFloat(num2), result = 0

	if (lastResult == 0) {
		result = n1 - n2
		return result
	}
	result = lastResult - n1
	return result
}

function multiplicacao(num1, num2) {
	let n1 = parseFloat(num1), n2 = parseFloat(num2), result

	if (lastResult == 0) {
		result = n1 * n2
		result = parseFloat(result.toFixed(9))
		return result
	}
	result = lastResult * n1
	return parseFloat(result.toFixed(9))
}
function divisao(num1, num2) {
	let n1 = parseFloat(num1), n2 = parseFloat(num2), result

	if (lastResult == 0) {
		result = n1 / n2
		return parseFloat(result.toFixed(9))
	}
	result = lastResult / n1
	return result.toFixed(9)
}

function result() {
	let previus = document.querySelector("#previus").innerHTML
	let num1 = "", num2 = "", key = true, simbol

	for (var iterator of previus) {

		if (!checkSimbol(iterator) && key) {
			num1 += iterator
		} else if (!key) {
			num2 += iterator
		} else {
			key = false
			simbol = iterator
		}
	}

	switch (simbol) {
		case '+':
			document.querySelector("#result").innerHTML = soma(num1, num2)
			break
		case '-':
			document.querySelector("#result").innerHTML = subtracao(num1, num2)
			break
		case '*':
			document.querySelector("#result").innerHTML = multiplicacao(num1, num2)
			break
		case '/':
			document.querySelector("#result").innerHTML = divisao(num1, num2)
			break
	}
	document.querySelector("#previus").innerHTML = ""
}
