let hero__container = document.querySelector('.hero-container');
for (var i = 0; i<=1200; i++){

    let block = document.createElement('div');
    block.classList.add('block');
    hero__container.appendChild(block)
}

let block = document.querySelectorAll('.block');
let animation = anime.timeline({
    targets: block,
    easing: 'easeInOutElastic' ,
    loop: 1,
   
    delay:anime.stagger(2,{start:50})
    
})

animation
.add({
    
    scale:0,
    translateX:function(){return anime.random
    (-360,2100);},
    translateY:function(){return anime.random
    (-360,2100);},
    rotate:function(){return anime.random
    (-360,360);},
    duration:function(){return anime.random
    (500,2000);},
  



})

.add({
   
    scale:1,
    translateX:0,
    translateY:0,
    rotate:0,
    duration:function(){return anime.random
        (500,2000);},

})

anime({
    duration: 4000,
    loop: true,
    direction: 'alternate',
    update: function(anim){
      hero__container.style.filter = 'blur(' + 10 * anim.progress / 400 + 'px)'
    }
  })





