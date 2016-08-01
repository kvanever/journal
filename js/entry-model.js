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

exports.entryModule = Entry;
