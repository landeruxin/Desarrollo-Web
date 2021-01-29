function empezar(){
    
    let respuesta1 = window.confirm("¿Eres mayor de edad?");
    let respuesta2 = window.confirm("¿Tienes clave de usuario?");
    
    if(respuesta1 == true && respuesta2 == true){
        alert("Estás autorizado para visitar este sitio.");
    }else{
        alert("Lo siento no puedes pasar.");
    }
}