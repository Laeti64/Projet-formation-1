const message =
  "Nous avons bien reçu votre message. Nous allons y répondre dans les plus brefs délais";

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  alert(message);
});
