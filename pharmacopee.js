const bienfaitsBtn = document.getElementById("bienfaitsBtn");
const bienfaitsInfo = document.getElementById("bienfaitsInfo");

bienfaitsBtn.addEventListener("click", function () {

    bienfaitsInfo.classList.toggle("visible");

    if (bienfaitsInfo.classList.contains("visible")) {
        bienfaitsBtn.textContent = "✕ Masquer les bienfaits ▲";
    } else {
        bienfaitsBtn.textContent = "🌿 Voir les bienfaits ▼";
    }

});
const commanderBtn = document.getElementById("commanderBtn");

commanderBtn.addEventListener("click", function() {
    const numero = "22893956915";
    const message = "Bonjour, je souhaite commander le Thé Biogenic Chinois.";

    const lien = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

    window.open(lien, "_blank");
});
