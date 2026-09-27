// ===============================
// BOUTON : VOIR LES BIENFAITS
// ===============================

const bienfaitsBtn = document.getElementById("bienfaitsBtn");
const bienfaitsInfo = document.getElementById("bienfaitsInfo");

if (bienfaitsBtn && bienfaitsInfo) {

    bienfaitsBtn.addEventListener("click", function () {

        if (bienfaitsInfo.classList.contains("visible")) {

            bienfaitsInfo.classList.remove("visible");
            bienfaitsBtn.textContent = "Voir les bienfaits";

        } else {

            bienfaitsInfo.classList.add("visible");
            bienfaitsBtn.textContent = "Cacher les bienfaits";

        }

    });

}


// ===============================
// BOUTONS : COMMANDER SUR WHATSAPP
// ===============================

const boutonsCommande = document.querySelectorAll(".commanderBtn");

boutonsCommande.forEach(function (bouton) {

    bouton.addEventListener("click", function () {

        const produit = bouton.getAttribute("data-produit");

        const numero = "22893956915";

        const message =
            "Salut, je souhaite commander : " + produit + ".";

        const lien =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(message);

        window.open(lien, "_blank");

    });

});
const continuerPaiementBtn = document.getElementById("continuerPaiementBtn");
const paiementMessage = document.getElementById("paiementMessage");

continuerPaiementBtn.addEventListener("click", function () {

    const paiementChoisi = document.querySelector(
        'input[name="paiement"]:checked'
    );

    if (!paiementChoisi) {
        paiementMessage.textContent =
            "Veuillez choisir un moyen de paiement.";
        paiementMessage.style.color = "red";
        return;
    }

    paiementMessage.textContent =
        "Moyen de paiement choisi : " + paiementChoisi.value;

    paiementMessage.style.color = "#16833a";
});
