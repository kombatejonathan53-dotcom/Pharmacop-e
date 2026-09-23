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