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

    const nom = document.getElementById("nomClient").value.trim();
    const telephone = document.getElementById("telephoneClient").value.trim();
    const produit = document.getElementById("produitCommande").value;

    const paiementChoisi = document.querySelector(
        'input[name="paiement"]:checked'
    );

    if (nom === "") {
        paiementMessage.textContent = "Veuillez entrer votre nom.";
        paiementMessage.style.color = "red";
        return;
    }

    if (telephone === "") {
        paiementMessage.textContent = "Veuillez entrer votre numéro de téléphone.";
        paiementMessage.style.color = "red";
        return;
    }

    if (produit === "") {
        paiementMessage.textContent = "Veuillez choisir un produit.";
        paiementMessage.style.color = "red";
        return;
    }

    if (!paiementChoisi) {
        paiementMessage.textContent = "Veuillez choisir un moyen de paiement.";
        paiementMessage.style.color = "red";
        return;
    }

    const message =
        "Bonjour, je souhaite passer une commande.%0A%0A" +
        "Nom : " + encodeURIComponent(nom) + "%0A" +
        "Téléphone : " + encodeURIComponent(telephone) + "%0A" +
        "Produit : " + encodeURIComponent(produit) + "%0A" +
        "Moyen de paiement : " + encodeURIComponent(paiementChoisi.value);

    const numeroWhatsApp = "22893956915";

    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + message;

    window.open(url, "_blank");
});
