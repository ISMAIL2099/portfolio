<?php
// Connexion à la base de données Access via ODBC
$dsn = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\Users\iaziz\Desktop\ismaelStage\projet interface\backend\database>\Database1.accdb';
$user = ''; // L'utilisateur (vide si aucun)
$password = ''; // Le mot de passe (vide si aucun)

try {
    $conn = new PDO("odbc:$dsn", $user, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Requête SQL pour récupérer les utilisateurs
    $sql = "SELECT nom, prenom, age FROM utilisateurs";
    $stmt = $conn->query($sql);
    $utilisateurs = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
    exit;
}

// Inclure le fichier HTML qui affichera les données
include 'template.php';
?>
