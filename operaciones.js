
//ocultar con selector parrafo
$(document).ready(function(){
$("#botonOcultar").click(function(){
$("p").hide();
 });
});

//ocultar con id parrafo
$(document).ready(function(){
$("#botonOcultar").click(function(){
$("#parrafo").hide();
 });
});

//doble click
$(document).ready(function(){
$("#parrafo").dblclick(function(){
$(this).hide();
 });
});

//validar campo nombre
function validaNombre(){
	// Campos de texto
	if($("#nombre").val() == ""){
	    alert("El campo Nombre no puede estar vacío.");
	    $("#nombre").focus();     
	    return false;
	}
	return true;
}

/*
verifica inicial solo fadeIn
$(document).ready( function() {   
$("#botonIngresar").click( function() { 
   if(validaNombre()){
   	 $("#fracaso").hide();
   	 $("#exito").delay(500).fadeIn("slow");  
    } else {
     $("#exito").hide();
     $("#fracaso").delay(500).fadeIn("slow");
     }    
   });
  });
*/
//fadeIn fadeOut
$(document).ready( function() {   
$("#botonIngresar").click( function() { 
  if(validaNombre()){
   	if($("#fracaso").is(":visible")){
   	 $("#fracaso").fadeOut();
   	 }
   	 $("#exito").delay(500).fadeIn("slow");  
  } else {
     if($("#exito").is(":visible")){	
     $("#exito").fadeOut("fast");
     }
     $("#fracaso").delay(500).fadeIn("slow");
     }    
   });
  });

function validaForm(){
	// Campos de texto
	if($("#nombre").val() == ""){
	    alert("El campo Nombre no puede estar vacío.");
	    $("#nombre").focus();     
	    return false;
	}
	return true; // Si todo está correcto
}

$(document).ready( function() {   
$("#botonenviar").click( function() { 
   if(validaForm()){
   	 $("#fracaso").hide();
   	 $("#exito").delay(500).fadeIn("slow");  
    } else {
     $("#exito").hide();
     $("#fracaso").delay(500).fadeIn("slow");
     }    
   });
  });
