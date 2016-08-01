(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.addNew = function(array) {
  array.push(this);
};

Entry.prototype.wordCount = function() {
  return this.body.split(' ').length;
};

Entry.prototype.vowels = function() {
  // var count = 0
  return this.body.split(/[aeiou]/i).length - 1;
};

Entry.prototype.consonants = function() {
  return this.body.length - this.vowels() - this.wordCount() + 1;
};

Entry.prototype.teaser = function() {
  wordarray = [];
  var array = this.body.split(' ');
  for (i = 0; i <= 7; i++) {
    wordarray.push(array[i]);
    if(array[i].slice(-1) === ".") {
      return wordarray.join(" ");
    }
  }
  return wordarray.join(" ");
};
exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      $('ul#output').append("<li>" + entry.teaser() + " </li>");
      });
    } else {
      alert("Please enter a journal entry");
    }
  });
});

},{"./../js/entry-model.js":1}]},{},[2]);
