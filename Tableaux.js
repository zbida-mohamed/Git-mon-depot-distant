// Exercice 1



// longeur du TABLEAU
var arrayLength = window.parseInt(prompt("Entrez un nombre d'élément : "));
// crea du tableau
var myTableau = new Array(arrayLength);
// contenu du tableau saisi
var contenu = "";

// splice ajout element au tableau (ou remplace)
myTableau.splice(0, arrayLength);
for (i=0; i<arrayLength; i++)
{
    contenu = window.prompt("Entrer vos éléments :"); 
    // ajout contenu a la longueur du tableau
    myTableau.push (contenu);
}
window.alert ( "Tableau : " +myTableau );





//  Exercice 2

//  (\n) Sauter une ligne dans la fenetre)-(\t) Tabulation- 


// saisi entier
function GetIntegrer()
{
integrer = parseInt(window.prompt( "Entrez le nombre d'élément : "));
}


// creation tableau


function InitTab()
{
    array = new Array(integrer);
    array.splice(0, integrer);
}


function SaisieTab(integrer, array);
{
var contenu = "";
var n = 0;
for (n=0; n<integrer; n++)
{
contenu = window.prompt ("Saisir les differents postes du tableau :");
}
}


function AfficheTab(array)
{
window.prompt(array);
}


function RechercheTab(array)
{
    var index = parseInt(window.prompt("Saisissez un index : "));
    var recherche = array[index] ;
    window.prompt(recherche);
}


function InfoTab (array)
{
// (math max) renvoi le plus grand nombre du tableau
var maximum = Math.max(...array);
var n = 0;
    
    for (i=0; i<array.length; i++) 
    {
    n += parseInt(array[i]);
    }

var moyenne = 0;
moyenne = pareseInt(n/array.length);
window.alert(maximum);
window.alert (moyenne);
}


                 
GetInteger();
InitTab(integer);
SaisieTab(integer, array);


while(choice == 1 || choice == 2 || choice == 3) 

{


    switch(choice) 
{
case 1:
afficheTab();
break;
case 2:
rechercheTab();
break;
case 1:
infoTab();
break;
default:
alert("erreur");
menu = parseInt(window.prompt ( "Veuillez faire votre choix :  \n 1-Afficher le contenu de tous les postes \n 2-Afficher l'index choisi  n\ 3-Afficher le maximum et la moyenne des postes du tableau"));
}
}


























































