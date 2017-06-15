"use strict";

var question = document.querySelector('.question-text');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
var btnStart = document.querySelector('.btn-quiz');
var btnNext = document.querySelector(".btn-next");
var request = new XMLHttpRequest();

function startTest() {
  request.open('GET', 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      var questionList = [];
      var correctList = [];
      var incorrectList = [];
      for (var i = 0; i < 10; i++) {
        questionList.push(data.results[i].question);
        correctList.push(data.results[i].correct_answer);
        incorrectList.push(data.results[i].incorrect_answers);
      }
      var info = {
        questionList: questionList,
        correctList: correctList,
        incorrectList: incorrectList
      };
      console.log(info);
      return info;
    } else {
      console.log('Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor');
    }
  };
  request.onerror = function() {
    console.log('Error al tratar de conectarse con el servidor');
  };

  request.send();
}
var questionNumber=0;

function placeInfo(){
  var infoTest=startTest();
  console.log(infoTest);
  question.innerHTML = infoTest.questionList[questionNumber];
  answerOne.innerHTML = infoTest.correctList[questionNumber];
  answerTwo.innerHTML = infoTest.incorrectList[questionNumber][0];
  answerThree.innerHTML = infoTest.incorrectList[questionNumber][1];
  answerFour.innerHTML = infoTest.incorrectList[questionNumber][2];
  questionNumber=questionNumber+1;
}

btnStart.addEventListener('click', placeInfo);
btnNext.addEventListener("click", placeInfo);
