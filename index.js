
  



// hero text


  // array with texts to type in typewriter
  var dataText = ["SmartPhone Tech.","Computer Technician.","Web Designer."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".h").innerHTML = text.substring(0, i + 1) +'<span class="typing" aria-hidden="true"></span>';

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
        },5000);
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




  // nav active


  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav .nav-container ul li");
  const navcon = document.querySelectorAll("navcon");
  window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 50) {
        current = section.getAttribute("id"); }
        
    });
  
    navLi.forEach((li) => {
      li.classList.remove("act");
      if (li.classList.contains(current)) {
        li.classList.add("act");
        
        

        
      }
    });
  };





// hamburger nav


function myF(press){
 
 
  var x = document.getElementById("container");
  
    if (x.className === "nav-container") {
      x.className += " responsive";
    } else {
      x.className = "nav-container";
    }
    
    press.classList.toggle("fa-times-circle")
  
  }


  // slider
 /*
  @method Cards
  @description this is for label based radio navigation to change the labels style to 'active'
 */
const Cards = ((() => {
  /*
   * @description dom loaded event listener
   */
  window.addEventListener('DOMContentLoaded', () => {setTimeout(init,1)}, true);

  /*
   * @method init
   * @parameter e {event}
   * @description initiates event listeners on all cards
   */
  function init(e)
  {
    if(document.querySelector(".cards"))
    {
      let cards = document.querySelector(".cards");
      cards.addEventListener('click', clicked, false);
      document.querySelectorAll(".cards .card")[0].click();
    }
  }

  /*
   * @method clicked
   * @parameter e {event}
   * @description this is the callback from the assigned event listener binding
   */
  function clicked(e)
  {
    let card = e.target;
    if(card.getAttribute("data-card")){rearrange(card.getAttribute("data-card"));}
  }

  /*
   * @method rearrange
   * @parameter card {object}
   * @description this is the callback from the assigned event listener binding
   */
  function rearrange(card)
  {
    let cards = document.querySelectorAll(".cards .card");
    for(let n = 0; n < cards.length; n++)
    {
      cards[n].classList.remove("card--left");
      cards[n].classList.remove("card--center");
      cards[n].classList.remove("card--right");
   
     
    }
    cards[card].classList.add("card--center");
    if(card == 0)
    {
      cards[2].classList.add("card--left");

      cards[1].classList.add("card--right");
     
      
    }
    if(card == 1)
    {
      cards[0].classList.add("card--left");
      cards[2].classList.add("card--right");

    }
    if(card == 2)
    {
    
      cards[1].classList.add("card--left");
  
      cards[0].classList.add("card--right");
    
    }


  }

  return {
    init
  }
})());