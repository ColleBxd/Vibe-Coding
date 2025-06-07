
function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");
  const texto = input.value.trim();

  if (texto === "") return;

  const li = document.createElement("li");
  li.textContent = texto;

  li.addEventListener("click", () => {
    li.classList.toggle("concluida");
  });

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "Remover";
  btnRemover.style.marginLeft = "10px";
  btnRemover.onclick = () => li.remove();

  li.appendChild(btnRemover);
  document.getElementById("listaTarefas").appendChild(li);
  input.value = "";
}
