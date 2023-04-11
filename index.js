class Formatter {
  static capitalize (str) {
    let firstLetter = str.charAt(0)
    return firstLetter.toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    const pattern = /[^a-zA-Z0-9-' ]/g;
  
    const sanitizedStr = str.replace(pattern, '');
    return sanitizedStr;
  }
  
  static titleize(str) {
    
  const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  const words = str.toLowerCase().split(' ');
  const titleizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (i === 0 || smallWords.indexOf(word) === -1) {
      titleizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    } else {
      titleizedWords.push(word);
    }
  }
  return titleizedWords.join(' ');
  }
}