const wordsToNum = (s) => {
  let Small = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  };

  let Magnitude = {
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000,
  };

  let point = {
    'point': '.'
  }

  // nine million nine hundred ninety nine thousand nine hundred ninety nine point
  let a = s.toString().toLowerCase().split(/[\s-]+/);
  let n = 0; // 9999000
  let g = 0; // 999.9
  let error = false;

  a.forEach((w) => {
    let x = Small[w];
    if (x != null) {
      g = g + x;
    }
    else if (w == "point") {
      g = g + point[w];
    }
    else if (w == "hundred") {
      g = g * 100;
    }
    else {
      x = Magnitude[w];
      if (x != null) {
        n = n + g * x
        g = 0;
      }
      else {
        error = true;
      }
    }
  });
  if (error) return 'error';
  return n + parseFloat(g);
}

module.exports = wordsToNum;