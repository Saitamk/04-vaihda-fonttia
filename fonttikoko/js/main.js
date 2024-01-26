var nykyinenFontti = "Courier New";
var fonttikoko = 16;

var nappi = document.getElementById("nappi");
var lista = document.getElementById("lista");
var infoboxi = document.getElementById("fonttikoko");

nappi.addEventListener("click", vaihdaFonttiJaKasvataKokoa);

function vaihdaFonttiJaKasvataKokoa() {
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
  infoboxi.textContent =
    "Fontti: " + nykyinenFontti + ", Koko: " + fonttikoko + "px";
}
