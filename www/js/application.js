'use strict';

angular.module('quotationsApp', ['LocalStorageModule', 'angular-underscore', 'ngGrid']);


//Этика - Социополитика - Философия Истории

// ------------------------------------------------------Max length 130 characters ----------------------------------------------



function getRandomQuote(){
  var randomAuthor = Math.floor(Math.random()*quotations.length);
  var randomQuote = Math.floor(Math.random()*quotations[randomAuthor].length);
  if (randomQuote == 0){randomQuote++;}
  console.log('randomQuote: ', randomQuote );
  return {author: quotations[randomAuthor][0], text: quotations[randomAuthor][randomQuote]};
}

var frequency = 2000; //60000; //1 hour
var timeShowing = frequency; //60000; //1 hour

function showNotification(){
  if(window.Notification && Notification.permission !== "denied") {
    Notification.requestPermission(function(status) {
      var quote = getRandomQuote();
      var notify = new Notification('', {
        body: quote.text + '(' + quote.author + ')',
        icon: 'http://newacropolis.org.ua/sites/default/files/styles/thumbnail/public/field/image/imgMb0tEciZK8.jpg',
        tag: 'soManyNotification'
      });
      notify.onclick = function () {
        window.location.href = 'http://newacropolis.org.ua/';
      };
      notify.onshow = function () {
        setTimeout(notify.close.bind(notify), timeShowing);
      };
    });
  }
}
localStorage.is_quote_showed = false;
function showPlannedNotification(){
  var showFrom = 1; //Ex.: 13.01
  var showTo = 58; //Ex.: 13.58
  var currentMinute = (new Date()).getMinutes();
  if (currentMinute >= showFrom && currentMinute <= showTo){ //&&typeof(Storage) !== "undefined"
    if (!localStorage.is_quote_showed || localStorage.is_quote_showed == 'false' ){
      localStorage.is_quote_showed = true;
      showNotification();
    }
  } else {
    localStorage.is_quote_showed = false;
  }
}

showPlannedNotification();

setInterval(function(){
  showPlannedNotification();
}, frequency);

//http://greatwords.org/

//https://developer.mozilla.org/en-US/docs/Web/API/notification

//http://davidwalsh.name/notifications-api