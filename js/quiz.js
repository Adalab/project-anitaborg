"use strict";
var number = document.querySelector('.number-question');
var question = document.querySelector('.question-text');
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
var btnStart = document.querySelector('.btn-quiz');
var btnNext = document.querySelector(".btn-next");
var textQuiz = document.querySelector('.text-quiz');
var scorePage = document.querySelector('.score-page');
var fbRoot = document.querySelector('#fb-root');
var fbButton = document.querySelector('.fb-button');
var shareOnFacebook = document.querySelector('share-button');
var saveQuiz = document.querySelector('.question-quiz');
var index=0;
var info;
var random;
var result = 0;
var request = new XMLHttpRequest();

function printTestQuestion() {

  if (index < 10) {
    if (index > 0 && random === parseInt(document.querySelector('.radio-format:checked').value)) {
      result = result + 1;
    }
    else{
      result = result + 0;
    }
    random = Math.floor(Math.random() * (4 - 0)) + 0;
    console.log(random);
    var positionAnswer = [];
    for (var i = 0; i < 3; i++) {
      positionAnswer.push(info.incorrectList[index][i]);
    }
    positionAnswer.splice(random, 0, info.correctList[index]);
    number.innerHTML='Pregunta '+(index +1)+'/10';
    question.innerHTML=info.questionList[index];
    answerOne.innerHTML=positionAnswer[0];
    answerTwo.innerHTML=positionAnswer[1];
    answerThree.innerHTML=positionAnswer[2];
    answerFour.innerHTML=positionAnswer[3];
    index=index+1;
  }else{
    if (index > 0 && random === parseInt(document.querySelector('.radio-format:checked').value)) {
      result = result + 1;
    }
    else{
      result = result + 0;
    }
    console.log(btnNext);
    scorePage.classList.remove('hidden');
    fbRoot.classList.remove('hidden');
    textQuiz.classList.add('hidden');
    btnNext.classList.add('hidden');
    console.log("Tu resultado es " + result);
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

//botón facebook-  jssdk
window.fbAsyncInit = function() {
  var FB;
  FB.init({
    appId: '283603242103495',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function initTest(){
  getTestInfo();
  result = 0;
  index = 0;
}

btnStart.addEventListener('click', initTest);
fbRoot.addEventListener('click', shareOnFacebook);
