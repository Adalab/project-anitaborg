"use strict";

var question = document.querySelector('.question-text');
 var answerOne = document.getElementById('answer1');
 var answerTwo = document.getElementById('answer2');
 var answerThree = document.getElementById('answer3');
 var answerFour = document.getElementById('answer4');
 var btnStart = document.querySelector('.btn-quiz');
 var request = new XMLHttpRequest();

function startTest(){
  console.log("holi");
   request.open('GET', 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple', true);
   request.onload = function() {
     if (request.status >= 200 && request.status < 400) {
       var data = JSON.parse(request.responseText);
       question.innerHTML = data.results[0].question;
       console.log(data.results[0].question);
       answerOne.innerHTML= data.results[0].correct_answer;
       answerTwo.innerHTML = data.results[0].incorrect_answers[0];
       answerThree.innerHTML = data.results[0].incorrect_answers[1];
       answerFour.innerHTML = data.results[0].incorrect_answers[2];
     } else {
       console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
     }
   };
  request.onerror = function() {
     console.log('Error al tratar de conectarse con el servidor');
   };

  request.send();
 }

btnStart.addEventListener('click', startTest);
