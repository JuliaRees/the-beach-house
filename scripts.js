// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
      });

// Animate on Scroll - activate
AOS.init({
    duration: 500
});

});

lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
    
});

// Slider Gallery //

$('.slider-container').slick({
	autoplay: true,       // Do we want it to autoplay? true or false
	autoplaySpeed: 2000,  // How long between each slide when auto-playing
	speed: 500,           // How fast is the transition in milliseconds
	arrows: true,         // Do you want to show arrows to trigger each slide
	accessibility: true,  // Enables keyboard tabbing and arrow key navigation
	dots: true,           // Enables the dots below to show how many slides
	fade: false,          // Changes the animate from slide to fade if true
	infinite: true,      // When true, means that it will scroll in a circle
	pauseOnHover: true,  // When true means the autoplay pauses when hovering
	pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
  slidesToShow: 3,
  slidesToScroll: 1,
responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
