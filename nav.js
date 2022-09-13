$(document).ready(function(){


    $('.navlink').click(function(){
  
      $('.a').addClass('active');
    
    })
    
    

    $(window).scroll(function() {

      // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
      var scroll = $(window).scrollTop();
  
      var objectSelect = $('#skill-sec');
  
      // .offset() retrieves current position of element relative to document
      var objectPosition = objectSelect.offset().top ;
      var y = objectPosition - 55;
      if (scroll > y ) {
        $('nav').addClass('displayNav');
      } else {
        $('nav').removeClass('displayNav');
      }
    });




    
    
    
    });

    console.log("sds")