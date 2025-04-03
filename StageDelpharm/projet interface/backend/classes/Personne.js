//creation d'une classe personne pour identifier la personne à chaque etape
class Personne {
    constructor(username, password) {
        this.username = username;
      //le numero de service permettra de donne les droit ou non de modifie le document

        this.password = password;
    }

    verifierConnexion(inputUsername, inputPassword) {
        if (inputUsername === this.username && inputPassword === this.password) {
            return true;
        } else {
            return false;
        }
    }

    login(inputUsername, inputPassword) {
        if (inputUsername === this.username && inputPassword === this.password) {
            window.location.href = "accueilConnecter.html"; // Redirection vers une autre page
        } else {
            alert("Identifiant ou mot de passe incorrect.");
        }
    }


}
const user = new Personne("iaziz" , "azerty")
const user2 = new Personne("sio" , "sio")