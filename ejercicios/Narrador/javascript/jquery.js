
// Seleccionar estos idiomas por defecto, en caso de que existan para que las seleccione
const IDIOMAS_PREFERIDOS = ["es-US", "es-ES", "es_US", "es_ES"]; //Elijo las opciones en castellano

// Esperar a que el que DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    
    const $voces = document.querySelector("#opciones"),
    $boton = document.querySelector("#boton"),
    $mensaje = document.querySelector("#texto");
  let posibleIndice = 0, vocesDisponibles = [];

  // Función que pone las voces dentro del select
  const cargarVoces = () => {
    if (vocesDisponibles.length > 0) {
      console.log("No se cargan las voces porque ya existen: ", vocesDisponibles);
      return;
    }
    //Aquí cargamos las voces
    vocesDisponibles = speechSynthesis.getVoices();
    console.log({ vocesDisponibles })
    //Damos prioridad a las voces preferidas
    posibleIndice = vocesDisponibles.findIndex(voz => IDIOMAS_PREFERIDOS.includes(voz.lang));
    if (posibleIndice === -1) posibleIndice = 0;
    vocesDisponibles.forEach((voz, indice) => {
        //Insertamos las voces cargadas en el select del html
      const opcion = document.createElement("option");
      opcion.value = indice;
      opcion.innerHTML = voz.name;
      opcion.selected = indice === posibleIndice;
      $voces.appendChild(opcion);
    });
  };

  // Si no existe la API, lo indicamos y avisamos
  if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");

  
  cargarVoces();
  // Si hay evento, entonces lo esperamos
  if ('onvoiceschanged' in speechSynthesis) {
    speechSynthesis.onvoiceschanged = function () {
      cargarVoces();
    };
  }
  // El click del botón. 
  $boton.addEventListener("click", () => {
    let textoAEscuchar = $mensaje.value;
    //Miramos que haya introducido el texto
    if (!textoAEscuchar) return alert("Debes de escribir algo.");
    //Creamos el objeto
    let mensaje = new SpeechSynthesisUtterance();
    //Elegimos la voz que ha escogido
    mensaje.voice = vocesDisponibles[$voces.value];
    //Le damos un volumen
    mensaje.volume = 1;
    //Velocidad a la que leerá el texto, valor 1
    mensaje.rate = 1;
    //Le decimos que texto tiene que leer
    mensaje.text = textoAEscuchar;
    //pitch es el tono, le damos valor 1
    mensaje.pitch = 1;
    // A hablar!!
    speechSynthesis.speak(mensaje);
  });
     
    

});
