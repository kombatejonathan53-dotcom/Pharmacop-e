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

        const numero = "228TONNUMERO";

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
