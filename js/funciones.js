function mostrarImagen(event) {
	var imagen = document.getElementById('imagen');
	imagen.src = URL.createObjectURL(event.target.files[0]);
  }

  function calcularEdad()   {
	var fechaNacimiento = document.getElementById("fechaNacimiento").value;
	var fechaActual = new Date();
	
	var anioNacimiento = parseInt(fechaNacimiento.substring(0, 4));
	var mesNacimiento = parseInt(fechaNacimiento.substring(5, 7));
	var diaNacimiento = parseInt(fechaNacimiento.substring(8, 10));
	
	var anioActual = fechaActual.getFullYear();
	var mesActual = fechaActual.getMonth() + 1;
	var diaActual = fechaActual.getDate();

	var edadAnios = anioActual - anioNacimiento;
	var edadMeses = mesActual - mesNacimiento;
	
	if (diaActual < diaNacimiento) {
		edadMeses--;
	  }
	  
	  if (edadMeses < 0) {
		edadAnios--;
		edadMeses = 12 - Math.abs(edadMeses);
	  }
	  
	  document.getElementById("resultado").value = edadAnios + " años y " + edadMeses + " meses";
	}

  function calcularAntiguedad() {
	var fechaIngreso = document.getElementById("fechaIngreso").value;
	var fechaActual = new Date();
	
	var anioIngreso = parseInt(fechaIngreso.substring(0, 4));
	var mesIngreso = parseInt(fechaIngreso.substring(5, 7));
	var diaIngreso = parseInt(fechaIngreso.substring(8, 10));
	
	var anioActual = fechaActual.getFullYear();
	var mesActual = fechaActual.getMonth() + 1;
	var diaActual = fechaActual.getDate();
	
	var antiguedadAnios = anioActual - anioIngreso;
	var antiguedadMeses = mesActual - mesIngreso;
	
	if (diaActual < diaIngreso) {
		antiguedadMeses--;
	  }
	  
	  if (antiguedadMeses < 0) {
		antiguedadAnios--;
		antiguedadMeses = 12 - Math.abs(antiguedadMeses);
	  }
	  
	  document.getElementById("resultado_ant").value = antiguedadAnios + " años y " + antiguedadMeses + " meses";
	  calcularPrestaciones(antiguedadAnios, antiguedadMeses);
	}

  
   function calcularPrestaciones(anios, meses){
	calcularPrestaciones(antiguedadAnios, antiguedadMeses);
	let salario;
	salario=parseInt(document.getElementById('salario').value);
	var total = anios * 12 + meses;
    document.getElementById("resultado_pres").value = total ;

   }
 