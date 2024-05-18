/* === Index.html === */

/* => Section: Header */

$(document).ready(function() {

    // **Dropdown Functionality** 
    $(".li-dropdown").click(function() {
      var targetDiv = $(this).find(".dropdown-content");
      targetDiv.fadeToggle();
    });
  
    // **Navbar Functionality**
    $(".btn-show-nav").click(function() {
      $(".main-nav, .col-3").fadeToggle().css("display", "flex");
    });

}); 