asyncSqrt(0, function (value, result) {
	obtenerEmisores();
	console.log('END execution with value =', value, 'and result =', result);
	asyncSqrt(1, function (value, result) {
		obtenerAnios();
		console.log('END execution with value =', value, 'and result =', result);
		asyncSqrt(2, function (value, result) {
			procesarTabla();
			console.log('END execution with value =', value, 'and result =', result);
		});
	});
});



function asyncSqrt(value, callback) {
	console.log('START execution with value =', value);
	setTimeout(function () {
		callback(value, value * value);
	}, 0 | Math.random() * 100);
}



function mostrarCargando(bloquear) {
	cargando = cargando + bloquear;
	if (cargando > 0) {
		bloquearPantalla();
	}
	if (cargando == 0) {
		desbloquearPantalla();
	}
}