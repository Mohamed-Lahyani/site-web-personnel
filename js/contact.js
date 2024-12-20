// Ajouter un écouteur d'événements pour le bouton "Envoyer"
document.getElementById('sendButton').addEventListener('click', function(event) {
  envoyerEmail();
});

function envoyerEmail() {
  // Afficher l'alerte
  alert("Votre message a été envoyé avec succès !");
}
