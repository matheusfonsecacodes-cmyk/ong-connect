const toast = document.querySelector(".toast");
const btnAjudar = document.querySelector("#btn-ajudar");

const modal = document.querySelector("#modal-projeto");
const fecharModal = document.querySelector(".modal-fechar");

btnAjudar.addEventListener("click", function (event) {
    event.preventDefault();

    toast.classList.add("ativo");
    modal.classList.add("ativo");

    setTimeout(() => {
        toast.classList.remove("ativo");
    }, 3000);
});

fecharModal.addEventListener("click", function () {
    modal.classList.remove("ativo");
});