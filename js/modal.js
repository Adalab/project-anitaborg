var btnClose = document.querySelector(".btn-close");
var modal = document.querySelector(".quiz-modal");
var btnOpen = document.querySelector(".btn-quiz");

function openModal(){
  modal.classList.add("modalon");
}

function closeModal(){
  modal.classList.remove("modalon");
}

btnOpen.addEventListener("click",openModal);
btnClose.addEventListener("click",closeModal);
