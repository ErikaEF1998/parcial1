document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",op1);
document.getElementById("r").addEventListener("click",op2);
document.getElementById("d").addEventListener("click",op3);
document.getElementById("m").addEventListener("click",op4);
document.getElementById("igual").addEventListener("click",showResult);

function n1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n1").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n2").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n3").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n4").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n5").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n6").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n7").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n8").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n9").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}
function n0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("n0").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function op1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("s").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function op2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("r").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function op3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("d").innerHTML;
	document.getElementById('resultado').innerHTML = actual + sumado
}

function op4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("m").innerHTML;
	document.getElementById('resultado').innerHTML = actual +  sumado
}

function showResult() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumar = actual.indexOf("+");
	let restar = actual.indexOf("-");	
	let multiplicar = actual.indexOf("x");
	let dividir = actual.indexOf("/");
	supri = actual.indexOf("x");
	if (sumar !== -1) {
		arr = actual.split("+",2);
		resultado = parseInt(arr[0]) + parseInt(arr[1]);
		document.getElementById("resultado").innerHTML = resultado;
	} else if (restar !== -1) {
		arr = actual.split("-",2);
		resultado = arr[0] - arr[1];
		document.getElementById("resultado").innerHTML = resultado;
		
	} else if (dividir !== -1) {
		arr = actual.split("/",2);
		resultado = arr[0] / arr[1];
		document.getElementById("resultado").innerHTML = resultado;
		
	} else if (multiplicar !== -1) {
		arr = actual.split("x",2);
		resultado = arr[0] * arr[1];
		document.getElementById("resultado").innerHTML = resultado;
		
	}	
}

function verCodigo(){
	document.getElementById('resultado').innerHTML = "1610077577";
}

function limpiar(){
	document.getElementById('resultado').innerHTML = "";
}