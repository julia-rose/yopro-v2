$( document ).ready(function() { 
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
});