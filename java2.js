var n = prompt("Entrez un nombre:");


n/2;

n%2;


if (n%2==0)
{
    window.alert("Nombre pair.");
}
else 
{
    window.alert("Nombre impair.");
}

// 


var année = prompt("Entrez votre année de naissance:");

a= (2020 - année);

if (a >= 18)
{
window.alert("Vous êtes majeur");
} 
else
{
    window.alert("Vous êtes mineur.");
}


// 


var nombre1 =parseInt(prompt('Entrez un nombre entier :'));
var nombre2 =parseInt(prompt('Entrez un deuxieme nombre entier :'));
var op =prompt("Entrez un opérateur (+, -, *, /)");



switch (op)
{
    case 1 :
        case '+': 
        window.alert (resultat=nombre1+nombre2);
        break;


    case 2 :
        case '-': 
        window.alert (resultat=nombre1-nombre2);
        break;


    case 3 :
        case '*':
        window.alert (resultat=nombre1*nombre2);
        break;


    case 4 :
        case '/':
        window.alert (resultat=nombre1/nombre2);
        break;

}





10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
