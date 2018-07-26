/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


window.sr = ScrollReveal({ reset: true });
sr.reveal('.image', { duration: 800 });
sr.reveal('.about-item', { duration: 800 });
sr.reveal('.about-item skills', { duration: 800 });
sr.reveal('.project-item', { duration: 800 });


(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)