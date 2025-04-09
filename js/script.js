// **Consegna
// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// **BONUS
// Facciamo accendi e spegni:
// Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
// Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
// E così via...
// Per fare questo bonus potremmo aver bisogno di del metodo string.includes()

const lampEl = document.querySelector(".lamp-white");
const buttonEl = document.getElementById("button-on");

console.log(lampEl);
console.log(buttonEl);

//   if (trafficLightEl.classList.contains("text-danger")) {
//     trafficLightEl.classList.remove("text-danger");
//   } else {
//     trafficLightEl.classList.add("text-danger");
//   }

buttonEl.addEventListener("click", function () {
  if (buttonEl.textContent === `Accendi`) {
    lampEl.src = `./img/yellow_lamp.png`;
    buttonEl.textContent = `Spegni`;
  } else {
    lampEl.src = `./img/white_lamp.png`;
    buttonEl.textContent = `Accendi`;
  }
});
