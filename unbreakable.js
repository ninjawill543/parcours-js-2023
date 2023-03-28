function splitString(string, splitter) {
    var sliced = [];
    var startIndex = 0;
    for (var i = 0; i <= string.length; i++) {
      if (i === string.length || string[i] === splitter) {
        sliced.push(string.slice(startIndex, i));
        startIndex = i + 1;
      }
    }
    return sliced;
  }