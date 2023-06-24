function mostrarImagen(event) {
	var imagen = document.getElementById('imagen');
	imagen.src = URL.createObjectURL(event.target.files[0]);
  }

  function Persona(fechaNacimiento) {
	this.fechaNacimiento = new Date(fechaNacimiento);
  }
  
  Persona.prototype.validarFechaNacimiento = function() {
	var fechaActual = new Date();
	var fechaIngresada = this.fechaNacimiento;
	
	// Verificar si la fecha de nacimiento es posterior a la fecha actual
	if (fechaIngresada >= fechaActual) {
	  return false;
	}
	
	return true;
  };
  
  Persona.prototype.calcularEdad = function() {
	var fechaActual = new Date();
	var anios = fechaActual.getFullYear() - this.fechaNacimiento.getFullYear();
	var meses = fechaActual.getMonth() - this.fechaNacimiento.getMonth();
	var dias = fechaActual.getDate() - this.fechaNacimiento.getDate();
  
	// Restar un año si todavía no ha pasado el cumpleaños
	if (meses < 0 || (meses === 0 && dias < 0)) {
	  anios--;
	  meses = 12 + meses; // Ajustar los meses para que sean positivos
	}
  
	return { anios: anios, meses: meses };
  };
  
  function calcularEdad() {
	var fechaNacimiento = document.getElementById("fechaNacimiento").value;
	var persona = new Persona(fechaNacimiento);
	
	// Validar la fecha de nacimiento antes de calcular la edad
	if (!persona.validarFechaNacimiento()) {
	  alert("La fecha de nacimiento ingresada no es válida.");
	  return;
	}
	
	var edad = persona.calcularEdad();
	if(edad.anios!=0 && edad.meses!=0){
		var resultado = edad.anios + " años y " + edad.meses + " meses";
	document.getElementById("resultado").value = resultado;
	}else(
		alert("La fecha de nacimiento ingresada no es válida.")
	)
	
  }
  
  
	
	function Empleado(fechaIngreso) {
		this.fechaIngreso = new Date(fechaIngreso);
	  }
	  
	  Empleado.prototype.calcularAntiguedad = function() {
		var fechaActual = new Date();
		
		var aniosAntiguedad = fechaActual.getFullYear() - this.fechaIngreso.getFullYear();
		var mesesAntiguedad = fechaActual.getMonth() - this.fechaIngreso.getMonth();
		var diasAntiguedad = fechaActual.getDate() - this.fechaIngreso.getDate();
		
		if (mesesAntiguedad < 0 || (mesesAntiguedad === 0 && diasAntiguedad < 0)) {
		  aniosAntiguedad--;
		  mesesAntiguedad = 12 + mesesAntiguedad;
		}
		
		return { anios: aniosAntiguedad, meses: mesesAntiguedad };
	  }
	  
	  function calcularAntiguedad() {
		var fechaIngreso = new Date(document.getElementById("fechaIngreso").value);
		var empleado = new Empleado(fechaIngreso);
		var antiguedad = empleado.calcularAntiguedad();
		
		var resultado = "";
		var fechaActual = new Date();
		
		if (fechaIngreso < fechaActual) {
		  if (antiguedad.anios > 0) {
			resultado += antiguedad.anios + " año";
			if (antiguedad.anios > 1) {
			  resultado += "s";
			}
			
			if (antiguedad.meses > 0) {
			  resultado += " y ";
			}
		  }
		  
		  if (antiguedad.meses > 0) {
			resultado += antiguedad.meses + " mes";
			if (antiguedad.meses > 1) {
			  resultado += "es";
			}
		  }
		  
		  document.getElementById("resultado_ant").value = resultado;
		} else (
		  alert("La fecha de ingreso es incorrecta")
		)
	  }
	  
	  
	  
	  
	  function calcularPrestaciones() {
		var fechaIngreso = document.getElementById("fechaIngreso").value;
		var empleado = new Empleado(fechaIngreso);
		var antiguedad = empleado.calcularAntiguedad();
	  
		var anios = antiguedad.anios;
		var meses = antiguedad.meses;
	  
		var salario = parseInt(document.getElementById("salario").value);
		if (!isNaN(salario) && salario > 0) {
		  var totalantig = anios * 12 + meses;
		  var prestaciones = (totalantig * salario) / 12;
		  document.getElementById("resultado_pres").value = prestaciones;
		} else {
		  alert("El salario es inválido");
		}
	  }
	  


	function limpiarDatos() {
		document.getElementById("salario").value = "";
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
	let mensaje = "Información complementaria:\n";
	
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

  function calcular(){
    let num1, num2;
    num1= parseInt (document.getElementById('meses').value);
    num2= parseInt (document.getElementById('salario').value);

    resultado = num1 *num2;
    
    document.getElementById("total").value = resultado ;

}

  

  



  


