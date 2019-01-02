//Validar largo textarea o textinput
// id="comentario"
// onkeyup="validarlongitud('comentario', 'contadorcomentario', 200)"
// onchange="validarlongitud('comentario', 'contadorcomentario', 200)"
// <label id="contadorcomentario"></label>

function validarlongitud(idvalor, idcontador, num_caracteres_permitidos) {
	var cadena = $("#" + idvalor).val();
	var num_caracteres = cadena.length;
	var saltos = 0;
	for (var i = 0; i < cadena.length; i++) {
		if (cadena.codepointat(i) == 10) {
			saltos++;
		}
	}
	num_caracteres += saltos;
	if (num_caracteres > num_caracteres_permitidos) {
		$("#" + idvalor).val(cadena.substring(0, cadena.length - (num_caracteres - num_caracteres_permitidos)));
	}
	var disponibles = num_caracteres_permitidos - num_caracteres;
	if (disponibles < 0) {
		disponibles = 0;
	}
	$("#" + idcontador).text("");
	$("#" + idcontador).text(disponibles + " caracteres disponibles.");
}
​