// fonction pour créé mes liens produits
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (FicheOurson of value) {
    linkCarte();
  }
}

//Mise à jour de l'apercu du panier
apercuPanier();

fetch(newUrl)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then((ourson) => {
    carteId(ourson);
    function carteId(ficheOurson) {
      //recupère l'élément Ourson dans le HTML pour les cartes
      const carteProduit = document.getElementById("oursonProduit");
      carteProduit.innerHTML = `
          <div class="col-sm-6 p-3 m-5 mb-5 card text-center">
              <img src="${
                ficheOurson.imageUrl
              }" class="img-fluid img-thumbnail p-1 mx-auto" alt="image représentant ${
        ficheOurson.name
      }"></img>
              <div class="row card-body justify-content-between text-center">
                  <h2 class="col-6 card-title">${ficheOurson.name}</h3>
                  <h3 class="col-6">${prixConverti(ficheOurson.price)}</h3>
              </div>
              <div  class="row">
                <div class="col-6">
                  <div class="card-body">Choisissez votre couleur :</div>
                  <select id="checkBoxColor" class="form-select" aria-label="Choix couleur"></select>
                </div>
                <div class="col-6">
                  <div class="col card-body">
                    <div class="my-auto">
                        <p>Quantité :</p>
                    </div>
                    <div>
                        <select id="quantity" class="form-select mb-3" aria-label="Quantité">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                  <p class="card-text">${ficheOurson.description}</p>
              </div>
                <a id="ajoutPanier" href="" class="btn btn-outline-success">Ajouter au panier</a>
          </div>`;
      choixColor(ficheOurson);
      ajouterPanier(ficheOurson);
    }

    function choixColor(ficheOurson) {
      // checkBox des couleurs
      const checkProduit = document.getElementById("checkBoxColor");
      for (colors of ficheOurson.colors) {
        checkProduit.innerHTML += `
              <option value="${colors}">${colors}</option>`;
      }
    }

    function ajouterPanier(ficheOurson) {
      //ajout des produits au panier
      const ajoutPanier = document.getElementById("ajoutPanier");
      ajoutPanier.addEventListener("click", (e) => {
        e.preventDefault();
        const list = document.getElementById("checkBoxColor");
        const quantity = document.getElementById("quantity");
        // créer un nouveau produit
        let produitOurson = new Produit(
          newUrl,
          ficheOurson._id,
          ficheOurson.name,
          ficheOurson.price,
          ficheOurson.description,
          ficheOurson.imageUrl,
          list.value,
          quantity.value
        );

        // vérifie si le produit est déja présent dans le localstorage et si oui le sauvegarde dans le localstorage
        let presenceLocalStorage = false;
        let indexModification;
        for (products of panier) {
          switch (products.checkBoxColor) {
            case produitOurson.checkBoxColor:
              presenceLocalStorage = true;
              indexModification = panier.indexOf(products);
          }
        }

        // si déja Present incrémente seulement la quantité
        if (presenceLocalStorage) {
          panier[indexModification].quantity =
            +panier[indexModification].quantity + +produitOurson.quantity;
          localStorage.setItem("oursonCommande", JSON.stringify(panier));
          // si absent, ajoute le produit au localStorage
        } else {
          panier.push(produitOurson);
          localStorage.setItem("oursonCommande", JSON.stringify(panier));
        }
        location.reload();
      });
    }
  })
  .catch(function (err) {
    console.log(err);
    // Une erreur est survenue
  });
