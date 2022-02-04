
  



let hero__container = document.querySelector(".hero-container");
for (var i = 0; i <= 2500; i++) {
  let block = document.createElement("div");
  block.classList.add("block");
  hero__container.appendChild(block);
}

let block = document.querySelectorAll(".block");

setTimeout(function(){ 
let animation = anime.timeline({

  targets: block,
  easing: "easeInOutElastic",
  loop: 1,
 
  delay: anime.stagger(2, { start: 50 }),

});

animation
  .add({
   
    scale: 0,
    translateX: function () {
      return anime.random(-360, 2100);
    },
    translateY: function () {
      return anime.random(-360, 2100);
    },
    rotate: function () {
      return anime.random(-360, 360);
    },
    duration: function () {
      return anime.random(500, 2000);
    },
  })

  .add({
    scale: 1,
    translateX: 0,
    translateY: 0,
    rotate: 0,

    duration: function () {
      return anime.random(500, 2000);
    },
  });
}, 3000);


anime({
  duration: 2000,
  loop: 2,
  direction: "alternate",
  update: function (anim) {
    hero__container.style.filter = "blur(" + (10 * anim.progress) / 400 + "px)";
  },
});

// hero text


  // array with texts to type in typewriter
  var dataText = [ "Web Designer.", "Computer Technician.", "SmartPhone Tech."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".h").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 8000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);


