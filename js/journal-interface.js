var Journal = require('./../js/journal-model.js').jounralModule;

$(document).ready(function() {
  $("#title").submit(function(event){
    event.preventDefault();

    var title = parseString($("input#title").val());
    var body = parseString($("input#body").val());

    $('ul#output').html("");
    if (entries) {
      entries.forEach(function(entry) {
      $('ul#output').append("<li>" + entries.title + " </li>");
      $('ul#output').append("<li>" + entries.body + " </li>");
      });
    } else {
      alert("Please enter a journal entry")
    }
  });
});
