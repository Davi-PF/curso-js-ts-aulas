const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

// Jeito do Teacher
for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color= '#FFF';
}

// Meu jeito
// for (let p of ps) {
//   p.setAttribute("style", `background-color: ${backgroundColorBody}; color: #FFF`);
// }
