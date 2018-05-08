

var calculator = {

	display: document.getElementById("display"),
	valordisplay: "0",
	operacion: "",
	valor1: 0,
	valor2: 0,
	valorfinal: 0,
	resultado: 0,
	teclaigual: false,

	init: (function(){
		this.asignarEventosDeLosBotones(".tecla");
		this.asignareventosalafuncion();
	}),

	asignarEventosDeLosBotones: function(selector){
		var x = document.querySelectorAll(selector);
		for (var i = 0; i<x.length;i++) {
			x[i].onmouseover = this.eventoEncogeBoton;
			x[i].onmouseleave = this.eventoregresaBoton;
		};
	},

	eventoEncogeBoton: function(event){
		calculator.EncogeBoton(event.target);
	},

	eventoregresaBoton: function(event){
		calculator.AumentaBoton(event.target);
	},

	EncogeBoton: function(elemento){
		var x = elemento.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			elemento.style.width = "75px";
			elemento.style.height = "62px";
		} else if(x=="mas") {
			elemento.style.width = "98%";
			elemento.style.height = "98%";
		} else {
		elemento.style.width = "75px";
		elemento.style.height = "62px";
		}
	},

	AumentaBoton: function(elemento){
		var x = elemento.id;
		if (x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto" ) {
			elemento.style.width = "29%";
			elemento.style.height = "62.91px";
		} else if(x=="mas") {
			elemento.style.width = "90%";
			elemento.style.height = "100%";
		} else {
		elemento.style.width = "22%";
		elemento.style.height = "62.91px";
		}
	},

	asignareventosalafuncion: function(){

		document.getElementById("on").addEventListener("click", function() {calculator.borrardisplay();});
		document.getElementById("sign").addEventListener("click", function() {calculator.cambiarSigno();});
		document.getElementById("punto").addEventListener("click", function() {calculator.ingresarDecimal();});
		document.getElementById("igual").addEventListener("click", function() {calculator.verResultado();});
		document.getElementById("dividido").addEventListener("click", function() {calculator.ingresarOperacion("/");});
		document.getElementById("por").addEventListener("click", function() {calculator.ingresarOperacion("*");});
		document.getElementById("menos").addEventListener("click", function() {calculator.ingresarOperacion("-");});
		document.getElementById("mas").addEventListener("click", function() {calculator.ingresarOperacion("+");});
		document.getElementById("0").addEventListener("click", function() {calculator.ingresarNumero("0");});
		document.getElementById("1").addEventListener("click", function() {calculator.ingresarNumero("1");});
		document.getElementById("2").addEventListener("click", function() {calculator.ingresarNumero("2");});
		document.getElementById("3").addEventListener("click", function() {calculator.ingresarNumero("3");});
		document.getElementById("4").addEventListener("click", function() {calculator.ingresarNumero("4");});
		document.getElementById("5").addEventListener("click", function() {calculator.ingresarNumero("5");});
		document.getElementById("6").addEventListener("click", function() {calculator.ingresarNumero("6");});
		document.getElementById("7").addEventListener("click", function() {calculator.ingresarNumero("7");});
		document.getElementById("8").addEventListener("click", function() {calculator.ingresarNumero("8");});
		document.getElementById("9").addEventListener("click", function() {calculator.ingresarNumero("9");});
	},

	borrardisplay: function(){

	  this.valordisplay = "0";
		this.operacion = "";
		this.valor1 = 0;
		this.valor2 = 0;
		this.resultado = 0;
		this.Operación = "";
		this.teclaigual = false;
		this.valorfinal = 0;
		this.updatedisplay();
	},

	cambiarSigno: function(){
		if (this.valordisplay !="0") {
			var auxiliar;
			if (this.valordisplay.charAt(0)=="-") {
				auxiliar = this.valordisplay.slice(1);
			}	else {
				auxiliar = "-" + this.valordisplay;
			}
		this.valordisplay = "";
		this.valordisplay = auxiliar;
		this.updatedisplay();
		}
	},

	ingresarDecimal: function(){
		if (this.valordisplay.indexOf(".")== -1) {
			if (this.valordisplay == ""){
				this.valordisplay = this.valordisplay + "0.";
			} else {
				this.valordisplay = this.valordisplay + ".";
			}
			this.updatedisplay();
		}
	},

	ingresarNumero: function(valor){
		if (this.valordisplay.length < 8) {

			if (this.valordisplay=="0") {
				this.valordisplay = "";
				this.valordisplay = this.valordisplay + valor;
			} else {
				this.valordisplay = this.valordisplay + valor;
			}
		this.updatedisplay();
		}
	},

	ingresarOperacion: function(z){
		this.valor1 = parseFloat(this.valordisplay);
		this.valordisplay = "";
		this.operacion = z;
		this.teclaigual = false;
		this.updatedisplay();
	},

	verResultado: function(){

		if(!this.teclaigual){
			this.valor2 = parseFloat(this.valordisplay);
			this.valorfinal = this.valor2;
			this.realizarOperacion(this.valor1, this.valor2, this.operacion);

		} else {
		this.realizarOperacion(this.valor1, this.valorfinal, this.operacion);
		}

		this.valor1 = this.resultado;
		this.valordisplay = "";

		if (this.resultado.toString().length < 9){
			this.valordisplay = this.resultado.toString();
		} else {
			this.valordisplay = this.resultado.toString().slice(0,8) + "...";
		}

		this.teclaigual = true;
		this.updatedisplay();

	},

	realizarOperacion: function(valor1, valor2, operacion){
		switch(operacion){
			case "+":
				this.resultado = eval(valor1 + valor2);
			break;
			case "-":
				this.resultado = eval(valor1 - valor2);
			break;
			case "*":
				this.resultado = eval(valor1 * valor2);
			break;
			case "/":
				this.resultado = eval(valor1 / valor2);
		}
	},

	updatedisplay: function(){
		this.display.innerHTML = this.valordisplay;
	}

};

calculator.init();
