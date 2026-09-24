// ================================
// AFFICHER / CACHER LES BIENFAITS
// ================================

const bienfaitsBtn = document.getElementById("bienfaitsBtn");
const bienfaitsInfo = document.getElementById("bienfaitsInfo");

bienfaitsBtn.addEventListener("click", function () {

    if (bienfaitsInfo.style.display === "none") {
        bienfaitsInfo.style.display = "block";
        bienfaitsBtn.textContent = "Cacher les bienfaits";
    } else {
        bienfaitsInfo.style.display = "none";
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
