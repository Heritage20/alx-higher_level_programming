$.get("https://swapi.co/api/films/?format=json", function (data) {
  $(data.results).each(function (index, value) {
    $("UL#list_movies").append("<li>" + value.title + "</li>");
  });
});
