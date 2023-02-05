function insert(num) {
	var text = document.querySelector("#result").textContent
	if(text.length <= 14) {
		document.querySelector("#result").innerHTML += num
	}
}
function simbol(num) {
	let n = document.querySelector("#result").innerHTML
	n = n.charAt(n.length - 1)

	if (n != "") {
		switch (n) {
			case "+": break
			case "-": break
			case "*": break
			case "/": break
			case ".": break
			default: document.querySelector("#result").innerHTML += num
		}
	}
}

function clean() {
	document.getElementById("result").innerHTML = ""
}

function clearLast() {
	var result = document.getElementById("result").innerHTML
	document.getElementById("result").innerHTML = result.substring(0, result.length - 1)
}

function finalResult() {
	var content = document.querySelector("#result").innerHTML
	var n1 = new Array, simbols = new Array, n2 = new Array
	var control1 = false
	var control2 = true

	if (content) {

		for (i = 0; i < content.length; i++) {
			var char = content.charAt(i)

			if (control2 & char != "+" & "-" & "*" & "/") {
				n1.push(char)
				control1 = false
			} else {
				simbols.push(char)
				control1 = true
				control2 = false
			}
			if (control1 & char != "+" & "-" & "*" & "/") {
				n2.push(char)
			} else {
				control2 = true
			}
		}

		var result = 0, first = true

		for (var i = 0; i < simbols.length - 1; i++) {
			var x = simbols

			if (first) {
				switch (x) {
					case "/":
						result = n1[i] / n2[i]

					case "*": result = n1[i] * n2[i]
				}
			} else {

			}
		}
	}

}