//on garde la clé pour accèder au local storage et avoir notre liste dans les deux pages

const KEY_SAVEURS = "listeSaveurs";

 

// Charger depuis le local storage, sinon on met les valeures de bases de l'énonce

let listeSaveurs = JSON.parse(localStorage.getItem(KEY_SAVEURS));

if (!listeSaveurs) {

  listeSaveurs = [

    { nom: "Fraise", prix: 3 },

    { nom: "Chocolat", prix: 4 },

    { nom: "Double chocolat", prix: 4 }

  ];

  localStorage.setItem(KEY_SAVEURS, JSON.stringify(listeSaveurs));

}

 

//La fonction pour ajouter une saveur dans la liste des saveurs de bases et log le JSON

//Aussi, on met la liste de saveurs dans le local storage pour accèder dans l'autre page

function AjouterSaveurJSON() {

 

    const nvSaveur = {

        nom: document.getElementById("nom").value.trim(),

        prix: Number(document.getElementById("prix").value)

    };

 

    listeSaveurs.push(nvSaveur);

 

    localStorage.setItem(KEY_SAVEURS, JSON.stringify(listeSaveurs));

 

    console.log("JSON MIS À JOUR :", listeSaveurs);

 

 

}

 

//La liste des commandes de bases de l'énoncé

const listeCommandes = [

    { date: "2025-01-01 18:00:00", saveur: "Fraise" },

    { date: "2025-01-01 17:50:00", saveur: "Chocolat" }

];

 

//Pour ajoute une commande

function AjouterCommandeJSON(){

 

    const select = document.getElementById("selectSaveur");

    const saveurChoisie = select.value;

    const now = ((new Date().toISOString()).replace("T", " ")).slice(0,-5);

   

    const nvCommande = {

        date: now,

        saveur: saveurChoisie

    };

 

    listeCommandes.push(nvCommande);

 

    console.log("JSON à jour :", listeCommandes);

}




function RefreshOptions(){

 

    const select = document.getElementById("selectSaveur");

 

    //Pour empecher que le code crash vu qu'on appele la méthode dans la page saveurs aussi mais il ya pas de select

    if (!select) return;

 

    //On met les options dans le select à null

    select.innerHTML = "";

 

    //Pour chaque saveur, on crée une option dans le select

    listeSaveurs.forEach(saveur => {

        const option = document.createElement('option');

        option.value = saveur.nom;

        option.textContent = saveur.nom;

        select.appendChild(option);

    });

 

    console.log("JSON MIS À JOUR :", listeSaveurs);

}


let saveurs = [
  {
    id: 1, nom: "Fraise", prix: "3$"},
  {
    id: 2, nom: "Chocolat", prix: "4$"},
{
    id: 3, nom: "Double chocolat", prix: "4$"}
];

function afficherTabSaveurs(){
    const tab = document.querySelector("tbody");
    tab.innerHTML = "";

    saveurs.forEach(function(saveur){
        const ligne = document.createElement("tr");
        ligne.innerHTML = `
            <td>${saveur.id}</td>
            <td>${saveur.nom}</td>
            <td>${saveur.prix}</td>
            <td><button data-id="${saveur.id}">Supprimer</button></td>
        `;
        tab.appendChild(ligne);
    }
    );
    supprimer();
}

function supprimer(){
    const boutons = document.querySelectorAll("button[data-id] ");

    boutons.forEach(function(bouton){
        bouton.addEventListener("click", function(){
            const id = Number(this.dataset.id);
            saveurs = saveurs.filter(function(saveur){
                return saveur.id !== id;
            });
            afficherTabSaveurs();
        });
    });
}

document.addEventListener("DOMContentLoaded", function(){
    afficherTabSaveurs();
});