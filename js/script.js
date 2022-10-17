// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// 1. Genero il contenuto della griglia dinamicamente

const gridItems = document.querySelector("square");

for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    square.innerHTML = "square";
    gridItems.append(square);
}

// 2. Al click su button, mostra grid

document.getElementById("btn-play").addEventListener("click", function() {
    this.classList.add("show");
});