var Entry = require('./../js/entry-model.js').entryModule;

$(document).ready(function() {
  $("#entry").submit(function(event){
    event.preventDefault();
    debugger;
    var title = ($("input#title").val());
    var body = ($("input#body").val());
    var entries = [];
    var entry = new Entry(title, body);
    entry.addNew(entries);

    $('ul#output').html("");
    if (entries) {
      entries.forEach(function(entry) {
      $('ul#output').append("<li>" + entry.title + " </li>");
      $('ul#output').append("<li>" + entry.body + " </li>");
      });
    } else {
      alert("Please enter a journal entry");
    }
  });
});
