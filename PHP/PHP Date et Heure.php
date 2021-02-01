

<!-- Exercice 1>

<?php


date_default_timezone_set("Europe/Paris");


// format : "jour X mois XXXX" Affichez la date du jour au format mardi 2 juillet 2019.

$Date = new DateTime();

echo "Nous somme le : ".$Date->format('l d F Y');

?>



<! exerxice 2 >

<?php

date_default_timezone_set("Europe/Paris");


// Affichage le numéro de semaine de la date 14/07/2019

$Date = new DateTime("14-07-2019");

echo "Le numéro de semaine de la date \"14/07/2019\" est : ".$Date->format('W');


?>



<EXERCICE 3>

<?php

// Paramètrage du timezone
date_default_timezone_set("Europe/Paris");


// Calculer la différence entre 2 dates en utilisant l'objet DateTime et la fonction date_diff():

$now = new DateTime();

$end_of_formation = new DateTime('02-04-2021 17:00:00');

$difference = date_diff($now, $end_of_formation);

echo "Aujourd'hui : ".$now->format("d/m/Y H:i:s")."<br><br>";

echo "Fin de ma formation : ".$end_of_formation->format("d/m/Y H:i:s")."<br><br>"; 

echo "Le nombre de jours restants avant la fin de ma formation : ".$difference->format('%R%a days');


?>


<EXERCICE 4>

<?php


date_default_timezone_set("Europe/Paris");



// Reprenez l'exercice 3, mais traitez le problème avec les fonctions de gestion du timestamp, time() et mktime().

$now = time();

$end_of_formation = mktime(0,0,0,04,02,2021);

$difference = $end_of_formation - $now;

$nombre_de_jours = ceil($difference / 86400);

echo "Le nombre de jours restants avant la fin de ma formation : $nombre_de_jours jours"


?>


<EXERCICE 5 >


<?php


function bissextile($annee) 
{
if( (is_int($annee/4) && !is_int($annee/100)) || is_int($annee/400)) 
    
{
    
echo "$annee est bissextile";
} 
else 
{
echo "$annee n'est pas bissextile";
}
}

bissextile(2024);

?>


<EXERCICE 6 >

<?php

$date = "17/17/2019";

//  A REVOIR !!!!!!!!!!!!!!
    

list($dd, $mm, $yyyy) = explode('/', $date);



?>


<exercice 7>


<?php

date_default_timezone_set("Europe/Paris");



$Date = new DateTime();

echo "Il est : ".$Date->format('H\hi');



?>


<exercice 8 >


<?php


date_default_timezone_set("Europe/Paris");


// Ajoutez 1 mois à la date courante.

echo "Nous somme le : ".date('d-m-Y', strtotime('+1 month'));


?>


