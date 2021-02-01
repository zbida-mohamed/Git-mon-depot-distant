

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>exercise 1</title>
    </head>


<?php

$nombre = 0;

?>

<!-- EXERCICE PHP BASE 1 -->



<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>


<div class="uk-container">


<?php
for ($nombre = 0; $nombre < 150; $nombre++) {
if ($nombre % 2 !== 0) {
?>

<p>
<?= $nombre ?>
</p>

<?php
}
}
?>
</div>

</body>
</html>





<!-- Exercice 2 : 500x -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>exercise 2</title>
    </head>


<?php

$a = 1;
do {
    echo "$a - Je dois faire des sauvegardes régulières de mes fichiers.<br>";
    $a++;
}


while ($x <= 500);

?>

</body>
</html>









<!-- Exercice 3: MULTIPLICATION -->
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>exercise3</title>
    </head>



<table class="highlight centered responsive-table">


<thead>
<tr>
<th></th>


<?php
$a = 0;
 while ($a <= 12) {
?>
<th><?= $a ?></th>
<?php
$a++;
}
?>

</tr>
</thead>


<tbody>

<?php
$b = 0;
while ($b <= 12) {
?>


<tr>

<td>
<?= $b ?>
</td>


<?php
$a = 0;
while ($a <= 12) {
?>


<td>

<?= $a * $b ?>
<?php $a++; ?>

</td>



<?php
} 
?>
</tr>


<?php
$b++;
}

?>
</tbody>
</table>


</html>




</body>
</html>