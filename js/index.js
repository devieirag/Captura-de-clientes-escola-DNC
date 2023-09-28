const leo = window.document.getElementById("leo");
const sama = window.document.getElementById("sama");
const brun = window.document.getElementById("brun");
let actualPosition = 0; // 1 // 2
let users = [leo, sama, brun];

function roldir() {
  // Atualiza posição atual
  users[actualPosition].style = "display:none";
  // Atualiza numero do indice para controlar os usuários
  if (actualPosition == users.length - 1) {
    actualPosition = 0;
  } else {
    actualPosition++;
  }
  // Atualiza próximo usuário
  users[actualPosition].style = "display:flex";
}

function rolesq() {
  // Atualiza posição atual
  users[actualPosition].style = "display:none";
  // Atualiza numero do indice para controlar os usuários
  if (actualPosition == 0) {
    actualPosition = users.length - 1;
  } else {
    actualPosition--;
  }
  // Atualiza próximo usuário
  users[actualPosition].style = "display:flex";
}
