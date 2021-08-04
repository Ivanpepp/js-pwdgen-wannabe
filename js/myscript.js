const nome = prompt("inserisci il tuo nome");
const surname = prompt("inserisci il tuo cognome");
const fvcolor = prompt("inserisci il tuo colore preferito");
const date = parseInt(prompt("inserisci il tuo anno di anscita"));

var password = nome + surname + fvcolor + date;

document.getElementById("password").innerHTML = password;