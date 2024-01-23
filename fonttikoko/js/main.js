// Tarkastetaan nykyinen fonttikoko ja päivitetään se uuteen arvoon
var lista = document.getElementById("lista");
var fonttikoko = 16;

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

  lista.style.fontSize = fonttikoko + "px";
  document.getElementById("fonttikoko").textContent = fonttikoko;
}

// Etsitään nappi ja lista HTML-elementeistä
var nappi = document.getElementById("nappi");
var lista = document.getElementById("lista");

// Määritellään muuttuja nykyiselle fontille
var nykyinenFontti = "Courier New";

// Lisätään tapahtumakuuntelija napin painallukselle
nappi.addEventListener("click", vaihdaFontti);

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
}
var fonttikoonLuku = document.getElementById("fonttikoko");
fonttikoonLuku.innerHTML = fonttikoko;
