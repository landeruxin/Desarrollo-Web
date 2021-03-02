Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit eos ad. Optio aspernatur recusandae numquam, aliquid vitae accusantium perferendis quis iusto ea libero, ipsa officia soluta, voluptatum pariatur veritatis?
<?php
$lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit eos ad. Optio aspernatur recusandae numquam, aliquid vitae accusantium perferendis quis iusto ea libero, ipsa officia soluta, voluptatum pariatur veritatis?';
$cadena = 'La eñe es es un símbolo de la lengua castellana. Hay simbolos especiales como < > \'" ';
echo "<p><strong>Cadena</strong> : $cadena </p>";
echo '<p>htmlentities($cadena)  : ' . htmlentities($cadena) . '</p>';
echo '<p>htmlspecialchars($cadena)  : ' . htmlspecialchars($cadena) . '</p>';
echo '<p>addslashes($cadena)  : ' . addslashes($cadena) . '</p>';



?>