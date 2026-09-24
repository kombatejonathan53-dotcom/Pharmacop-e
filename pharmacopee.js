// ================================
// AFFICHER / CACHER LES BIENFAITS
// ================================

const bienfaitsBtn = document.getElementById("bienfaitsBtn");
const bienfaitsInfo = document.getElementById("bienfaitsInfo");

bienfaitsBtn.addEventListener("click", function () {

const bienfaitsBtn = document.getElementById("bienfaitsBtn");
const bienfaitsInfo = document.getElementById("bienfaitsInfo");

bienfaitsBtn.addEventListener("click", function () {

    bienfaitsInfo.classList.toggle("visible");

    if (bienfaitsInfo.classList.contains("visible")) {
        bienfaitsBtn.textContent = "Cacher les bienfaits";
    } else {
        bienfaitsBtn.textContent = "Voir les bienfaits";
    }

});


// ================================
// COMMANDES WHATSAPP
// ================================

const boutonsCommande = document.querySelectorAll(".commanderBtn");

boutonsCommande.forEach(function (bouton) {

    bouton.addEventListener("click", function () {

        const produit = bouton.getAttribute("data-produit");

        const numero = "22893956915";

        const message =
            "Bonjour, je souhaite commander : " + produit + ".";

        const lien =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(message);

        window.open(lien, "_blank");

    });

});
