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
	function limpiarDatos() {
		document.getElementById("salario").value = "";
	}
   function calcularPrestaciones(anios, meses){
	let salario;
	salario=parseInt(document.getElementById('salario').value);
	var totalantig = anios * 12 + meses;
	if(salario>0){
		prestaciones= (totalantig*salario)/12;
		document.getElementById("resultado_pres").value = prestaciones ;
	}
	else(
		alert("El salario es invalido")
	)

   }
   
   document.addEventListener('DOMContentLoaded', function() {
	var boton = document.getElementById('miBoton1');
	var audio = new Audio('mp3/audio.mp3');
  
	boton.addEventListener('click', function() {
	  audio.play();
	});
  });
  document.addEventListener('DOMContentLoaded', function() {
	var boton = document.getElementById('miBoton2');
	var audio = new Audio('mp3/audio.mp3');
  
	boton.addEventListener('click', function() {
	  audio.play();
	});
  });

  document.addEventListener('DOMContentLoaded', function() {
	var boton = document.getElementById('miBoton3');
	var audio = new Audio('mp3/audio.mp3');
  
	boton.addEventListener('click', function() {
	  audio.play();
	});
  });
  document.addEventListener('DOMContentLoaded', function() {
	var boton = document.getElementById('miBoton4');
	var audio = new Audio('mp3/audio.mp3');
  
	boton.addEventListener('click', function() {
	  audio.play();
	});
  });





  const informacionComplementaria = [];
    
  // Función para abrir el formulario
  function abrirFormulario() {
	const modal = document.getElementById("myModal");
	modal.style.display = "block";
  }
  
  // Función para cerrar el formulario
  function cerrarFormulario() {
	const modal = document.getElementById("myModal");
	modal.style.display = "none";
	
	// Limpiar los campos del formulario al cerrarlo
	
	document.getElementById("profesion").value = "";
	document.getElementById("experiencia").value = "";
	document.getElementById("nivel").value = "";
  }

  function guardarInformacion() {

	const profesion = document.getElementById("profesion").value;
	const experiencia = document.getElementById("experiencia").value;
	const nivel = document.getElementById("nivel").value;
	
	const informacion = {
	  
	  profesion: profesion,
	  experiencia: experiencia,
	  nivel: nivel
	};
	
	informacionComplementaria.push(informacion);
	
	// Cerrar el formulario después de guardar la información
	cerrarFormulario();
  }
  
  function visualizarInformacion() {
	var nombre= (document.getElementById("nombre").value);
	var apellido= (document.getElementById("apellido").value);
	let mensaje = "Información complementaria:\n\n";
	
	if (informacionComplementaria.length === 0) {
	  mensaje += "No hay información almacenada.";
	} else {
	  informacionComplementaria.forEach((info, index) => {

		mensaje += `Pofesión: ${info.profesion}\n`;
		mensaje += `Experiencia: ${info.experiencia}\n`;
		mensaje += `Nivel de formación académico: ${info.nivel}\n\n`;
	  });
	}
	alert(nombre+" "+apellido+"\n\n"+mensaje);
	
  }

  

  



  


