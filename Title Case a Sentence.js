function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, string => string.toUpperCase());
  }
  
  titleCase("I'm a little tea pot");