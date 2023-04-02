function letterSpaceNumber(str) {
    const pattern = /\b[a-zA-Z]\s\d(?!\d|[a-zA-Z])/g;
    const matches = str.match(pattern);
    return matches ? matches : [];
  }
  