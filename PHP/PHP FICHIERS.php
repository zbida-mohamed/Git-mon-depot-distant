<?php

// FICHIER Source telecharger==> Liens


$fp = fopen("ListeLiens.txt", "r"); 

while (!feof($fp)) 


{ 
$ligne = fgets($fp, 4096); 
echo $ligne."<br>";        
}

fclose($fp);


?>