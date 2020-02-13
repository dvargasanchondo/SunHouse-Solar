<?php

$name = $_POST['nombre'];
$mailFrom = $_POST['correo'];
$message = $_POST['mensaje'];

$to = "asahel950@gmail.com";
$headers = "From: .$correo_from \r\n";
$txt = "You have received an e-mail from ".$nombre.".\n\n".$mensaje;

mail($to, $txt, $headers);
?>
