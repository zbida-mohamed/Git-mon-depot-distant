<?php

session_start();

$_SESSION['login'] = 'MOHAMED';
$_SESSION['password'] = '12345698';

?>


<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title> Page protégée par mot de passe </title>
</head>

<body>
<p> Veuillez entrer le mot de passe pour obtenir les codes d'accès au serveur central: </p>

<form  action="secret.php"  method="post">
<p> Login : <input type="text"  name="login"/>  </p>
<p> Password : <input type="password"  name="password"/>  </p>
<input type="submit"  value="Valider"/>
</form>

</body>
</html>