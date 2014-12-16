var test = require('tape');
var Numberwang = require('./');

test('Welcome to NumberWang!', function(t) {
  var numberwang;
  var test;

  while(!(numberwang = Numberwang((test = Math.floor(Math.random() * (100 - 1)) + 1))))
    t.notOk(numberwang, test + '? Nope');

  t.ok(numberwang, test + '? That\'s NumberWang!');
  t.end();
});
