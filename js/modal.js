var btnClose = document.querySelector(".btn-close");
var modal = document.querySelector(".quiz-modal");
var btnOpen = document.querySelector(".btn-quiz");

function openModal(){
  modal.classList.add("modal-on");
}

function closeModal(){
  modal.classList.remove("modal-on");
  scorePage.classList.add('hidden');
  fbButton.classList.add('hidden');
  textQuiz.classList.remove('hidden');
  btnNext.classList.remove('hidden');
}

btnOpen.addEventListener("click",openModal);
btnClose.addEventListener("click",closeModal);
