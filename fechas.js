//Máscara para fecha
var patron = new Array(2, 2, 4);
function mascara(d, sep, pat, nums) {
	if (d.valant != d.value) {
		var val = d.value;
		var largo = val.length;
		val = val.split(sep);
		var val2 = '';
		for (var r = 0; r < val.length; r++) {
			val2 += val[r];
		}
		if (nums) {
			for (var z = 0; z < val2.length; z++) {
				if (isNaN(val2.charAt(z))) {
					var letra = new RegExp(val2.charAt(z), "g");
					val2 = val2.replace(letra, "");
				}
			}
		}
		val = ''
		var val3 = new Array()
		for (var s = 0; s < pat.length; s++) {
			val3[s] = val2.substring(0, pat[s]);
			val2 = val2.substr(pat[s]);
		}
		for (var q = 0; q < val3.length; q++) {
			if (q == 0) {
				val = val3[q];
			}
			else {
				if (val3[q] != "") {
					val += sep + val3[q];
				}
			}
		}
		d.value = val;
		d.valant = val;
	}
}
​
//Validar si existe la fecha ingresada
function validaFechaExistente(fecha, idMsg) {
	$("#" + idMsg).text("");
	if (fecha.length > 0 && fecha.length < 10) {
		$("#" + idMsg).text("- Debe ingresar la fecha con formato dd/mm/aaaa.");
		validacionesOk = false;
		return false;
	}
	var datePat = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
	var fechaCompleta = fecha.match(datePat);
	if (fechaCompleta == null) {
		return false;
	}
	var dia = fechaCompleta[1];
	var mes = fechaCompleta[3];
	var anio = fechaCompleta[5];
	if (dia < 1 || dia > 31) {
		$("#" + idMsg).text("- El valor del día debe estar comprendido entre 1 y 31.");
		validacionesOk = false;
		return false;
	}
	if (mes < 1 || mes > 12) {
		$("#" + idMsg).text("- El valor del mes debe estar comprendido entre 1 y 12.");
		validacionesOk = false;
		return false;
	}
	if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) {
		$("#" + idMsg).text("- El mes " + mes + " no tiene 31 días!");
		validacionesOk = false;
		return false;
	}
if (mes == 2) { // bisiesto
	var bisiesto = (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0));
	if (dia > 29 || (dia == 29 && !bisiesto)) {
		$("#" + idMsg).text("- Febrero del " + anio + " no contiene " + dia + " dias!");
		validacionesOk = false;
		return false;
	}
}
}
​

//validar fecha inicial mayor que fecha final
function validarFechaMayorQue(fechaInicial, fechaFinal, idMsg1, idMsg2) {
	$("#" + idMsg1).text("");
	$("#" + idMsg2).text("");
	if ((fechaInicial != undefined || fechaInicial != "") && (fechaFinal != undefined || fechaFinal != "")) {
		var valuesStart = fechaInicial.split("/");
		var valuesEnd = fechaFinal.split("/");
		var dateStart = new Date(valuesStart[2], (valuesStart[1] - 1), valuesStart[0]);
		var dateEnd = new Date(valuesEnd[2], (valuesEnd[1] - 1), valuesEnd[0]);
		if (dateStart >= dateEnd) {
			$("#" + idMsg1).text("la fecha de inicio debe ser menor que la fecha de término.");
			$("#" + idMsg2).text("la fecha de inicio debe ser menor que la fecha de término.");
			validacionesOk = false;
			return false;
		}
	}
}
​

function validarFechaMayorQue(fechaInicial, fechaFinal, idMsg1, idMsg2) {
	$("#" + idMsg1).text("");
	$("#" + idMsg2).text("");
	if ((fechaInicial != undefined || fechaInicial != "") && (fechaFinal != undefined || fechaFinal != "")) {
		var valuesStart = fechaInicial.split("/");
		var valuesEnd = fechaFinal.split("/");
		var dateStart = new Date(valuesStart[2], (valuesStart[1] - 1), valuesStart[0]);
		var dateEnd = new Date(valuesEnd[2], (valuesEnd[1] - 1), valuesEnd[0]);
		if (dateStart >= dateEnd) {
			$("#" + idMsg1).text("la fecha de inicio debe ser menor que la fecha de término.");
			$("#" + idMsg2).text("la fecha de inicio debe ser menor que la fecha de término.");
			validacionesOk = false;
			return false;
		}
	}
}