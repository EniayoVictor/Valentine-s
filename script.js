window.onload= function(){
    var audio = new Audio('andy.mp3');
    (function() {
      var openComment, styles, time, writeStyleChar, writeStyles;
    
      styles = `/* \n * \"Valentines 2023\"\n * Code Titled The Bambi\n /\n\nbody \n \n Been a while I wrote \n But here goes nothing \n Hope you like it \n \n My love for you grows stronger each day, \n A feeling so pure, it cannot be swayed.\n With a heart overflowing with affection,\n I express my love with this poem's expression. \n
      You light up my world with your warm embrace, \n Your smile brightens up my day's dull space.\n With you, everything just feels so right,\n You make my world a more beautiful sight.\n
      I am grateful for every moment we share, \n For your love, and the way you always care. \n You have filled my life with so much joy,\n I cherish you, my one and only boy.\n
      So on this special day, I want to say, \n That I love you more than words can convey. \n You are the love of my life, my one and only,\n You'll always be my valentine, baby. 
      \n \n So I decided to just flex my muscles \n Since you can't literally touch my heart \n Why not I create one, LOL! 
      \n I hope the long code doesn't bore you \n Its just humble flex!!! \n Sit back and enjoy!!! \n\n\n\n\n {\n  background-color: #1a1c24; color: #fff;\n  font-size: 11px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/ ...\n \n * hey, you! Why are you staring at me!\n *\n * Okayyyy! Fine! But just because you're here.\n * I will keep going.\n *\n * Your presence as made life more Beautiful\n  you're phenomenal, that much can be seen <style> element\n  and i've played too much chess not to recognise <pre> THE QUEEN\n */\n\n pre { \n  position: fixed; width: 60%;\n  top: 30px; bottom: 30px; left: 30%;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px\n  rgba(0,0,0,0.1);\n}\n\n\n/ \n * Syntax highlighting \n * Colors based on Base16 Ocean Dark\n /\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/ \n \n/ How can I express myself being that i'm a poet and a coder/\n\n pre { left: 40%; }\n\n\n/\n * Putting Little Pieces together\n */\n\n\n/ I can't just fit them all in.\n /\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 10 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/ YOU ARE SPECIAL!!!  /\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/ The portrait of the sunset got nothing on you! /\n\n#heart i::before {\n  content: 'This heart beats for YOU!';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px\n  rgba(0,0,0,0.2);\n}\n\n\n/ \n * Reflection of Beauty. \n /\n\n@-webkit-keyframes {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.2;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/ \n * \n /\n\n/ \n * Season of Love \n /\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/ \n * Ready...?\n /\n\n#heart, #echo {\n\n/ \n * ...set...!\n /\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n\n/\n * ...beat!\n /\n  \n}\n\n/ \n *\n * Alright!\n *\n * I don't Know!\n \n * If its the fire in your eyes\n The stride in your step!\n *\n * Putting this piece together just to hope that you recognise how special you are!\n *\n *\n * Happy Valentines to YOU! <3\n * My Love\n   TM-AD */`;
    
      openComment = false;
    
      writeStyleChar = function(which) {
        if (which === '/' && openComment === false) {
          openComment = true;
          styles = $('#style-text').html() + which;
        } else if (which === '/' && openComment === true) {
          openComment = false;
          styles = $('#style-text').html().replace(`/(\/[^\/]\)$/, '<em class="comment">$1/</em>'`);
        } else if (which === ':') {
          styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
        } else if (which === ';') {
          styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
        } else if (which === '{') {
          styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
        } else {
          styles = $('#style-text').html() + which;
        }
        $('#style-text').html(styles);
        return $('#style-tag').append(which);
      };
    
      writeStyles = function(message, index, interval) {
        var pre;
        if (index < message.length) {
          pre = document.getElementById('style-text');
          pre.scrollTop = pre.scrollHeight;
          writeStyleChar(message[index++]);
          return setTimeout((function() {
            return writeStyles(message, index, interval);
          }), interval);
        }
      };
    
      $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");
    
      time = window.innerWidth <= 45 ? 45 : 45;
    
      writeStyles(styles, 0, time);
    
    }).call(this);
    };