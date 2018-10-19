var input, lcs, parse;

input = '';

lcs = function(a, b) {
  var curr, i, j, prev, subs1, subs2, _i, _j, _ref, _ref1;
  prev = (function() {
    var _i, _ref, _results;
    _results = [];
    for (i = _i = 0, _ref = b.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      _results.push('');
    }
    return _results;
  })();
  for (i = _i = 0, _ref = a.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
    curr = [''];
    for (j = _j = 0, _ref1 = b.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; j = 0 <= _ref1 ? ++_j : --_j) {
      if (a[i] === b[j]) {
        curr.push(prev[j] + a[i]);
      } else {
        subs1 = curr[j];
        subs2 = prev[j + 1];
        if (subs1.length > subs2.length) {
          curr.push(subs1);
        } else {
          curr.push(subs2);
        }
      }
    }
    prev = curr;
  }
  return curr[b.length].length;
};

parse = function(a, b) {
  var char, common_chars_a, common_chars_b, _i, _j, _len, _len1;
  common_chars_a = "";
  common_chars_b = "";
  for (_i = 0, _len = a.length; _i < _len; _i++) {
    char = a[_i];
    if (b.indexOf(char) >= 0) {
      common_chars_a += char;
    }
  }
  for (_j = 0, _len1 = b.length; _j < _len1; _j++) {
    char = b[_j];
    if (a.indexOf(char) >= 0) {
      common_chars_b += char;
    }
  }
  if (common_chars_a.length === 0) {
    return console.log(0);
  } else {
    return console.log(lcs(common_chars_a, common_chars_b));
  }
};

process.stdin.resume();

process.stdin.setEncoding('ascii');

process.stdin.on('end', function() {
  var a, b, _ref;
  _ref = input.split('\n'), a = _ref[0], b = _ref[1];
  return parse(a, b);
});

process.stdin.on('data', function(chunk) {
  return input += chunk;
});