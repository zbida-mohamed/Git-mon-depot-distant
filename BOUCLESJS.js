
// PROBLEME FINITION EXERCICE 1 BOUCLE



for (i=1; i<10; i++)

{
    resultat = n;
    n=prompt("Saisissez le prenom N°"+i+ " ou Clic sur Annuler pour arrêter la saisie.");
    console.log("n+"+i+"="+resultat);


}


console.log("fin de la boucle");






// probleme a finir ! pas compris EXERCICE 2 BOUCLES

var n =parseInt(prompt('Entrez un nombre entier :'));

console.log ("n")


while (i<n)
{
    window.alert ("Les nombres inférieur sont : ")


}



for (n=0; n<20;)

if (n<20)
{
window.alert( N+"est un nombre inferieur à 20");
}
else


console.log("fin de la boucle");

// 

// exercicce 3 

var x = 0;
var y = 0;
var z = x*y;
// 










// voyelle a, e, i, o, u, y
var mot = window.prompt("Entrer un mot");
var Nbr = 0;
var   voytr="";
var voyelle = ['a', 'e', 'i', 'o', 'u', 'y']
var consonnes


for (var i =0; i<mot.length; i++){
    var lettre = mot.substr(i,1);
//   Nombre de lettre qui correspond a voyelle
    if(voyelle.indexOf(lettre)>=0){
//on ajoute les lettres étant une voyelle à la suite 
     voytr += mot[i] +','
        Nbr++
    }
   
consonnes = mot.length - Nbr;
}
window.alert("Dans "+ mot + " j'ai trouvé " +Nbr+ " voyelle qui sont "+voytr+"  et " +consonnes+ " consonnes")
