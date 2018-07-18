$(document).ready(function() {
    
    $(window).scroll( function(){
    
        $('.hideme').each( function(i){
            
            var bottomOfObject = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            if( bottomOfWindow > bottomOfObject ){
                
                $(this).animate({'opacity':'1'}, 500);
                    
            }
            
        }); 

        $('.menu-item').each( function(i){
            
            var bottomOfObject = $(this).offset().top + $(this).outerHeight();
            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            if( bottomOfWindow > bottomOfObject ){
                
                $(this).animate({'opacity':'1'}, 500);
                    
            }
            
        }); 
    
    });

    $('#next').on('click', function(){
        
        var currentImg = $('.active');
        var nextImg = currentImg.next();
    
        if(nextImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          nextImg.addClass('active').css('z-index', 10);
        }
      });
    
      $('#prev').on('click', function(){
       
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
    
        if(prevImg.length){
          currentImg.removeClass('active').css('z-index', -10);
          prevImg.addClass('active').css('z-index', 10);
        }

      });
    
});

function initMap() {

    let options = {
        zoom: 12,
        center: {lat: 40.751386, lng:-74.001877}
    }

    let map = new google.maps.Map(document.getElementById('map'), options);

    let marker = new google.maps.Marker({
        position: options.center,
        map: map,
        icon: 'img/restaurant-icon.png'
    });

    let info = new google.maps.InfoWindow({
        content: `<img src="img/logo.png" style="width: 80px; height: 80px; margin: 0 auto">   
        <h3>ANAVENTERO RESTAURANT</h3>
        <h5>323 10th Avenue</h5>
        <h5>New York, NY 10001</h5>
        <h5>EST.2010</h5>
        <h5>(212) 827 - 2325</h5>`
    });

    marker.addListener('click', function(){
        info.open(map, marker);
    });
    
}


const btnNavSmall = document.querySelector("#btn-nav-small");
const navUl = document.querySelector("#navbar ul");
const btnScrollTop = document.getElementById("scroll-top");

btnNavSmall.addEventListener("click", function(e){
    navUl.classList.add("nav-links-small");
});

navUl.addEventListener("click", function(e) {

    switch(e.target.localName) {
        case "a":
        navUl.classList.remove("nav-links-small");
        break;
        case "li":
        navUl.classList.remove("nav-links-small");
        break;
        case "ul":
        navUl.classList.remove("nav-links-small");
        break;
    }
  
  });

window.onscroll = function() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnScrollTop.classList.remove("scroll-top-rem");
        btnScrollTop.classList.add("scroll-top");
    } else {
        btnScrollTop.classList.remove("scroll-top");
        btnScrollTop.classList.add("scroll-top-rem");
    }
  
};

btnScrollTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
      
