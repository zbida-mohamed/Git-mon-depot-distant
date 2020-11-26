











// Exercice 1 Calcul du nombre de jeunes, de moyens et de vieux



var jeunes=0;
var adultes=0;
var vieux=0;
var age;


do 
{
age = window.prompt("Entrez votre age");
// 
if ( age <20) 
{
jeunes++;
console.log(jeunes);
}
// 
else if ((age >=40 ) && (age <=100)) {
vieux++;
console.log(vieux);
}

else if ((age >=20 && age <= 40 )) {
adultes++;
console.log(adultes);
}
}
// 
while (age < 100);
 
window.alert("Il y a " + "" + jeunes + "" + " jeune(s)\n "  + adultes + "" + " adulte(s)\n " + " dont " + "" + vieux + "" +" vieux\n " + " et "+ " 1 " + "" + " centenaire ");



// Exercice 2 : Table de multiplication



function tableMultiplication(nombre)

{
var i;
for (i=0; i<=10; i++) 
{
resultat=nombre*i;
document.write(nombre+" x "+i+"="+nombre*i+"<br>");
}
}
nombre=window.prompt("Entrez le numéro de la table à afficher:");
tableMultiplication(nombre);
      


// Exercice 3 : Recherche d'un prénom


var prenoms = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent","Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
var saisie = window.prompt("Saisissez un prenom");
var index = prenoms.indexOf(saisie);

if (index > -1) 
prenoms.splice(index, 1);

console.log(+ prenoms.join());





// Exercice 4 : Total d'une commande

var pu = window.parseInt(prompt("Saisir le prix Unitaire :"));                  
var qtecom = window.parseInt(prompt("Saisir la quantité commandée :"));          
var tot = (pu*qtecom);
var rem =0;
var totrem = 0;
var totalport = 0;
var port = 0;

// 
function total (tot)
{
var tot =( pu*qtecom);
return tot
}
// 
function remise (rem)
{
    if (tot >=100 && tot <=200)
    {
    rem = ((tot * 5) / 100);
    totrem = (tot-rem);
    }
    else if (tot >200)
    {
        rem = ((tot* 10)/ 100); 
        totrem = (tot-rem);
    }
return rem
}
// 
function FraisPort (port)
{
if ( totrem <500)
{
port = ((totrem*2)/100);
totalport = (totrem+port);
}
else if (totrem>500)
{
    port = 0
    totalport = (totrem+port);
}

return port
}

total (tot);
remise (totrem);
FraisPort (port);
document.write("le total est de :"+tot+ "et le total remise de :"+totrem+ " soit un total avec port de :"+totalport);






// Exercice 5 : Vérification d'un formulaire 














