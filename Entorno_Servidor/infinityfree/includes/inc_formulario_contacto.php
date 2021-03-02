<form action="respuesta.php" method="get">
  <p>Nombre: <input type="text" name="nombre" size="40"></p>
  <p>Año de nacimiento: <input type="number" name="nacido" min="1900"></p>
  <p>Sexo:
    <input type="radio" name="hm" value="h"> Hombre
    <input type="radio" name="hm" value="m"> Mujer
  </p>
<p> Conocimientos :
<input type="checkbox" name="html" value="html"> HTML
<input type="checkbox" name="css" value="css"> css
<input type="checkbox" name="js" value="js"> Javascript
<input type="checkbox" name="php" value="php"> php
</p>
<p>Observaciones
<textarea name="observacion"></textarea>
</p>


  <p>
    <input type="submit" value="Enviar">
    <input type="reset" value="Borrar">
  </p>
</form>