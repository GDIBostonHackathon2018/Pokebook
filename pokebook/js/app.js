$(document).foundation();

(function() {
  function slideUp(el) {
    $(el).addClass("is--visible");
    load(slideUp);
  }

  slideUp(".pokedex-type--card");
})();
