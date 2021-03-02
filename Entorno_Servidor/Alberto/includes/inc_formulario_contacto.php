<form action="respuesta.php" method="POST">
    <p>Nombre: <input type="text" name="nombre" placeholder="nombre" id="nombre" size="40"></p>
    <p>Año de nacimiento: <input type="number" name="nacido" min="1900"></p>
    <p>Sexo:
      <input type="radio" name="hm" value="h"> Hombre
      <input type="radio" name="hm" value="m" checked> Mujer
    </p>
  <p> Conocimientos :
  <input type="checkbox" name="html" value="HTML"> HTML
  <input type="checkbox" name="css" value="css3"> css
  <input type="checkbox" name="js" value="JAVASCRIPT"> Javascript
  <input type="checkbox" name="php" value="PHP8"> php
  <input type="checkbox" name="java" value="JAVA"> Java  
</p>
  <p>Observaciones
  <textarea name="observacion" rows="5" ></textarea>
  </p>
  <p>
  <?php
    $anio = date("Y-m-d H:i:s");
    echo "<p>Año = $anio </p>";
  ?>
  <select name="edad">
    <?php 
   
      for ($i=18;$i<=110;$i++){
        echo "<option value='$i'>$i</option>";
      }
    ?>
  </select>
  </p>


    <p>
      <input type="submit" value="Bidali">
      <input type="reset" value="Borrar">
    </p>
</form>