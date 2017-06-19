"use strict";
var number = document.querySelector('.number-question');
var question = document.querySelector('.question-text');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
var btnStart = document.querySelector('.btn-quiz');
var btnNext = document.querySelector(".btn-next");
var index=0;
var info;
var request = new XMLHttpRequest();

function printTestQuestion() {

  if (index < 10) {
    number.innerHTML='Pregunta '+(index +1)+'/10';
    question.innerHTML=info.questionList[index];
    answerOne.innerHTML=info.correctList[index];
    answerTwo.innerHTML=info.incorrectList[index][0];
    answerThree.innerHTML=info.incorrectList[index][1];
    answerFour.innerHTML=info.incorrectList[index][2];
    index=index+1;
    console.log(index);
  }else{
    console.log("ultima pregunta");
  }
}

function getTestInfo() {
  request.open('GET', 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      info = {
        questionList: [],
        correctList: [],
        incorrectList: []
      };
      for (var i = 0; i < 10; i++) {
        info.questionList.push(data.results[i].question);
        info.correctList.push(data.results[i].correct_answer);
        info.incorrectList.push(data.results[i].incorrect_answers);
      }
      printTestQuestion(info,index);
      btnNext.addEventListener("click", printTestQuestion);
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };
  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}

// function initTest(){
  // getTestInfo();
// }

btnStart.addEventListener('click', getTestInfo);
