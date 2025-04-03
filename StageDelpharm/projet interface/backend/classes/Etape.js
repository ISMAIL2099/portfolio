class Etape {
    constructor() {
        this.etapeActuelle = 1;
    }
    personne=Personne
    // Méthode pour aller à l'étape suivante
    prochaineEtape() {
    this.etapeActuelle += 1;
    this.afficherEtape();
    }
    // Méthode pour afficher l'étape actuelle
    afficherEtape() {
    const etapeElement = document.getElementById('etape');
    etapeElement.innerText = `Étape ${this.etapeActuelle}`;
    }

    // Méthode pour vérifier si l'étape est complète
    validerEtape() {
    const formulaire = document.getElementById(`formulaireEtape${this.etapeActuelle}`);
    if (formulaire.checkValidity()) {
        this.prochaineEtape();
    } else {
        alert('Veuillez remplir tous les champs avant de passer à l\'étape suivante.');
    }
    }
    peutModifier(){
        if (this.personne.permision = true){
            modifier = true
        }else{
            modifier = false
        }
    }
}   

