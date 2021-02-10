/*1.	Realiza una web que tenga un enlace que sea una imagen y al pulsarlo se 
abra una ventana nueva con la web www.google.com.
La nueva ventana ha de tener un tamaño de 500px x 500px y aparecer en la 
posición 20 20 de la pantalla*/


function abrirVentanaGoogle(){
    window.open("https://www.google.es", '_blank', 'location=yes,height=500,width=500,scrollbars=yes,status=yes,left=20,top=20')
}




/*2.	Crea otro enlace que abra una ventana nueva con título “Mi ventana” y 
de tamaño 300px x 250px que contenga un párrafo “Soy una ventana de 300 x 200”
 */

 
function abrirMiVentana(){

    var ventana = window.open('','','width=300,height=200,left=20,top=20');
    var doc = ventana.document;
    doc.open();
    doc.write("Soy una ventana de 300 x 200.");
    
    doc.close()}

