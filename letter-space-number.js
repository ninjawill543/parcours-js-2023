function letterSpaceNumber(str) {
    const pattern = /[a-zA-Z]\s\d(?![a-zA-Z])/g;
    const matches = str.match(pattern);
    return matches ? matches : [];
  }
  