// fonction pour créé mes liens produits
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (FicheOurson of value) {
    linkCarte();
  }
}

// indique que le panier est vide
if (panier.length < 1) {
  formulaire.classList.add("d-none");
  // si présence de produit, affiche le tableau avec les produits
} else {
  formulaire.classList.add("d-none");
  panierVide.classList.add("d-none");
  const fullpanier = document.getElementById("panier");
  fullpanier.classList.toggle("d-none");
  for (product of panier) {
    listeCommande(product);
  }

  // ajouter produit
  function addProduct(event) {
    const index = event.target.getAttribute("data-index");
    panier[index].quantity++;
    localStorage.setItem("oursonCommande", JSON.stringify(panier));
    location.reload();
  }
  const buttonAdd = document.getElementsByClassName("plus");
  for (add of buttonAdd) {
    add.addEventListener("click", addProduct);
  }

  //supprimer un produit
  function minusProduct(event) {
    const index = event.target.getAttribute("data-index");
    if (panier[index].quantity > 1) {
      panier[index].quantity--;
    } else {
      panier.splice(index, 1);
    }
    localStorage.setItem("oursonCommande", JSON.stringify(panier));
    location.reload();
  }
  const buttonMinus = document.getElementsByClassName("minus");
  for (minus of buttonMinus) {
    minus.addEventListener("click", minusProduct);
  }

  //affiche le prix total
  prixTotal();

  //affiche le formulaire et cache les boutons valider/supprimer panier
  affichageBouton();

  //vide le panier
  boutonEffacePanier();

  //validation du formulaire et envoie en POST
  validationFormulairePOST();
}

function affichageBouton() {
  //affiche le formulaire et cache les boutons valider/supprimer panier
  const validationpanier = document.getElementById("validationpanier");
  const validationButton = document.getElementById("validationButton");
  validationpanier.addEventListener("click", () => {
    formulaire.classList.toggle("d-none");
    validationButton.classList.add("d-none");
  });
}

function boutonEffacePanier() {
  const buttonclearPanier = document.getElementById("effacerPanier");
  buttonclearPanier.addEventListener("click", () => {
    effacerPanier();
    location.reload();
  });
}

function validationFormulairePOST() {
  const commande = document.getElementById("commande");
  const regexName = /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+))$/;
  const regexCity =
    /^(([a-zA-ZÀ-ÿ]+[\s\-]{1}[a-zA-ZÀ-ÿ]+)|([a-zA-ZÀ-ÿ]+)){1,10}$/;
  const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
  const regexAddress = /^(([a-zA-ZÀ-ÿ0-9]+[\s\-]{1}[a-zA-ZÀ-ÿ0-9]+)){1,10}$/;

  commande.addEventListener("click", (event) => {
    // Récupération des infos pour l'envoie en POST
    let contact = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    };
    // Validation que le formulaire est correctement rempli
    if (
      (regexName.test(contact.firstName) == true) &
      (regexName.test(contact.lastName) == true) &
      (regexAddress.test(contact.address) == true) &
      (regexCity.test(contact.city) == true) &
      (regexMail.test(contact.email) == true)
    ) {
      event.preventDefault();

      // on stocke l'heure et la date de la commande
      const todayDate = new Date();
      let nowadays = todayDate.getDate();
      let month = todayDate.getMonth() + 1;
      let todayHours = todayDate.getHours();
      let todayMinutes = todayDate.getMinutes();
      if (nowadays < 10) {
        nowadays = "0" + nowadays;
      }
      if (month < 10) {
        month = "0" + month;
      }
      if (todayHours < 10) {
        todayHours = "0" + todayHours;
      }
      if (todayMinutes < 10) {
        todayMinutes = "0" + todayMinutes;
      }
      const date = nowadays + "-" + month + "-" + todayDate.getFullYear();
      const hours = todayHours + ":" + todayMinutes;
      const fullDate = { date, hours };
      const infoCommande = JSON.parse(localStorage.getItem("date")) || [];
      infoCommande.push(fullDate);
      localStorage.setItem("date", JSON.stringify(infoCommande));

      let products = [];
      for (produitId of panier) {
        products.push(produitId._id);
      }
      // console.table(products);

      // Transformation en JSON des infos reçu de contact et products
      let infoFinalCommande = JSON.stringify({ contact, products });

      // Paramétres pour la requéte fetch
      const recapitulatif = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: infoFinalCommande,
      };
      // console.table(recapitulatif);

      // Mise à jour du order pour la page de commande.html
      fetch("http://localhost:3000/api/teddies/order", recapitulatif)
        .then((response) => response.json())
        .then((ourson) => {
          localStorage.setItem("order", JSON.stringify(ourson));
          // console.table(ourson);
          document.location.href =
            "http://127.0.0.1:5500/Front-End/Pages/commande.html";
        })
        .catch((erreur) => console.log("erreur : " + erreur));
    } else {
      alert("le formulaire n'est pas correctement rempli.");
    }
  });
}
