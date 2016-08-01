var Entry = require('./../js/entry-model.js').entryModule;
var entries = [];

$(document).ready(function() {
  $("#entry").submit(function(event){
    event.preventDefault();
    var title = ($("input#title").val());
    var body = ($("textarea#body").val());
    var entry = new Entry(title, body);
    entry.addNew(entries);

    $('ul#output').html("");
    if (entries) {
      entries.forEach(function(entry) {
      $('ul#output').append("<li>" + entry.title + " </li>");
      $('ul#output').append("<li>" + entry.body + " </li>");
      $('ul#output').append("<li>" + entry.wordCount() + " </li>");
      $('ul#output').append("<li>" + entry.vowels() + " </li>");
      $('ul#output').append("<li>" + entry.consonants() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      debugger;
      });
    } else {
      alert("Please enter a journal entry");
    }
  });
});
