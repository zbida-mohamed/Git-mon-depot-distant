

// EXERCICE 1



var x =0;
do

{
    resultat = n;
    n=prompt("Saisissez le prenom N°"+x+ " ou Clic sur Annuler pour arrêter la saisie.");
    console.log("n+"+x+"="+resultat);
x++;
}
while (n != "")

console.log("fin de la boucle");









// EXERCICE 2

var text =""
var i;
var n = parseInt(prompt("Entrez un nombre :"));

for (i=0; i<n; i++)

{

   document.write(i+"<br>");
}

console.log("fin de la boucle");

// 





// exercice 3 
var entier =0;
var entrer = true;
var result = 0;
var n = 0;

while(entrer)
{
entier = window.prompt("Entrer un entier");

if (entier>0 && entier != null)
{
    result = parseInt(entier)+parseInt(result)
    n ++
 }
else

 {
break
 }

}

console.log(result,n);
var moyenne = result / n;
window.alert("le total est de "+result+ " et la moyenne est égal à "+moyenne);









// EXERCICE 4 MULTIPLES
var n = 0;

var i = parseInt(prompt("Entrez un nombre :"));
var x = parseInt(prompt("Entrez un multiplicateur :"));
var resultat = i*x;

for (i=1; i<=x; i++)


{
document.write(i+"*"+x+"="+(i*x)+"<br>");
}



console.log("fin de la boucle");






// EXERCICE 5



var mot = window.prompt ("Entrer un mot :");
var voyelle = "aeiouy";
var nbrevoyelle = 0;
var consonnes = 0;

for (i=0; i<mot.length; i++)
{

var lettre = mot.substr(i,1);
//  remplace : lettre == a, lettre = b ....
if(voyelle.indexOf(lettre)>=0)

// 
{nbrevoyelle++;}

else if ((lettre>= 'a' && lettre<='z'))

{consonnes++;}
}

window.alert("le nombre de voyelle est de :"+nbrevoyelle);
window.alert("le nombre de consonnes est :"+consonnes);







