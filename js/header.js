// FYI - JQuery included on page in header (first embed at top of page)
$( document ).ready(function() {
      
  // --------------------------------------- //
  // JavaScript for Mobile Menu //
  // --------------------------------------- //
  // Show and hide the Mobile Menu
  function toggleMobileMenu()  {
    $(".yp-header").removeClass("search-open");
    $(".yp-header").toggleClass("menu-open");
  }
  // Show and hide the Search Dropdown
  function toggleSearchDropdown() {
    $(".yp-header").removeClass("menu-open");
    $(".yp-header").toggleClass("search-open");
  }
  // Attach click event listeners
  $('.yp-header__menu-button').click(toggleMobileMenu);
  $('.yp-header__search').click(toggleSearchDropdown);
  
  // Set correct page as selected
  // if ($('.yp-about').length === 1) {
  //   $("#nav--about").addClass("selected");
  // } else if ($('.yp-events').length === 1 || $('.yp-event').length === 1) {
  //   $("#nav--attend").addClass("selected");
  // } else if ($('.blog-river__2-Wjj').length === 1 || $('.blog-entry').length === 1) {
  //   $("#nav--learn").addClass("selected");
  // }
  
});