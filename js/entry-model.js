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
