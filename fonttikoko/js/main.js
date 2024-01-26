// Määritellään muuttuja nykyiselle fontille ja fonttikoolle
var nykyinenFontti = "Courier New";
var fonttikoko = 16;

// Etsitään nappi, lista ja infoboxi HTML-elementeistä
var nappi = document.getElementById("nappi");
var lista = document.getElementById("lista");
var infoboxi = document.getElementById("fonttikoko");

// Lisätään tapahtumakuuntelija napin painallukselle
nappi.addEventListener("click", vaihdaFontti);

// Määritellään funktion vaihdaFontti
function vaihdaFontti() {
  // Tarkistetaan nykyinen fontti ja vaihdetaan siihen perustuen
  if (nykyinenFontti === "Courier New") {
    lista.style.fontFamily = "Roboto";
    nykyinenFontti = "Roboto";
  } else if (nykyinenFontti === "Roboto") {
    lista.style.fontFamily = "Mansalva";
    nykyinenFontti = "Mansalva";
  } else if (nykyinenFontti === "Mansalva") {
    lista.style.fontFamily = "Grenze";
    nykyinenFontti = "Grenze";
  } else if (nykyinenFontti === "Grenze") {
    lista.style.fontFamily = "Turret Road";
    nykyinenFontti = "Turret Road";
  } else {
    lista.style.fontFamily = "Courier New";
    nykyinenFontti = "Courier New";
  }

  // Päivitetään infoboxin sisältö
  infoboxi.textContent =
    "Fontti: " + nykyinenFontti + ", Koko: " + fonttikoko + "px";
}

// Lisätään tapahtumakuuntelija napin painallukselle
nappi.addEventListener("click", kasvataFonttikokoa);

// Määritellään funktion kasvataFonttikokoa
function kasvataFonttikokoa() {
  if (fonttikoko === 16) {
    fonttikoko = 20;
  } else if (fonttikoko === 20) {
    fonttikoko = 24;
  } else if (fonttikoko === 24) {
    fonttikoko = 28;
  } else if (fonttikoko === 28) {
    fonttikoko = 32;
  } else {
    fonttikoko = 16;
  }

  // Päivitetään fonttikoko ja infoboxin sisältö
  lista.style.fontSize = fonttikoko + "px";
  infoboxi.textContent =
    "Fontti: " + nykyinenFontti + ", Koko: " + fonttikoko + "px";
}

// Asetetaan alustavat arvot listaan ja infoboxiin
lista.style.fontSize = fonttikoko + "px";
infoboxi.textContent =
  "Fontti: " + nykyinenFontti + ", Koko: " + fonttikoko + "px";
