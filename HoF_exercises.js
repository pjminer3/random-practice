// Exercise in refactoring/creating a few selected Higher Order Functions

function getAllElementsButNth(array, n) {
  return array.filter(function(el, idx) {
    return idx !== n;
  });
}

function getElementsThatEqual10AtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter(function(el, idx) {
      return el === 10;
    });
  } else {
    return [];
  }
}

function select(arr, obj) {
  var newObj = {};
  arr.forEach(function(el) {
    if (obj.hasOwnProperty(el)) { 
      newObj[el] = obj[el]; 
    }
  });
  return newObj;
}

function getElementsLessThan100AtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter(function(el) {
      return el < 100;
    });
  } else {
    return [];
  }
}

function getElementsGreaterThan10AtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter(function(el) {
      return el > 10;
    });
  } else {
    return [];
  }
}

function removeElement(array, discarder) {
  return array.filter(function(el) {
    return el !== discarder;
  });
}

function removeElement(array, discarder) {
  return array.filter(function(el) {
    return el !== discarder;
  });
}

function getOddLengthWordsAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    return obj[key].filter(function(word) {
      return word.length % 2 !== 0;
    });
  } else {
    return [];
  }
}

function computeAverageOfNumbers(nums) {
  if (nums.length === 0) { return 0; }
  // else 
  var sum = nums.reduce(function(sum, num) {
    return sum + num;
  });
  return sum / nums.length;
}

function getAverageOfElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    if (obj[key].length === 0) { return 0; }
    // else 
    return obj[key].reduce(function(sum, num) {
      return sum + num;
    }) / obj[key].length;
  } else {
    return 0;
  }
}

function getEvenLengthWordsAtProperty(obj, key) {
  if (Array.isArray(obj[key])) {
    if (obj[key].length === 0) { return []; }
    // else
    return obj[key].filter(function(e) {
      return e.length % 2 === 0;
    });
  } else {
    return [];
  }
}

function filterOddLengthWords(words) {
  return words.filter(function(word) {
    return word.length % 2 !== 0;
  });
}

function getSquaredElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].map(function(el) {
      return el * el;
    });
  } else {
    return [];
  }
}

function getOddElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].filter(function(el) {
      return el % 2 !== 0;
    });
  } else {
    return [];
  }
}

function getEvenElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].filter(function(el) {
      return el % 2 === 0;
    });
  } else {
    return [];
  }
}

function filterEvenLengthWords(words) {
  return words.filter(function(word) {
    return word.length % 2 === 0;
  });
}

function getLengthOfLongestElement(arr) {
  return arr.reduce(function(longestLength, word) {
    if (word.length > longestLength) {
      return word.length;
    } else {
      return longestLength;
    }
  }, 0);
}

function getSmallestElementAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce(function(smallestNum, num) {
      if (num < smallestNum) { return num; } 
      else { return smallestNum; }
    });
  }
}

  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce(function(biggestNum, num) {
      if (num > biggestNum) { return num; }
      else { return biggestNum; }
    });
  }
}

function squareElements(arr) {
  return arr.map(function(num) {
    return num * num;
  });
}

function filterOddElements(arr) {
  return arr.filter(function(number) {
    return number % 2 !== 0;
  });
}

function computeProductOfAllElements(arr) {
  if (arr.length === 0) { return 0; }
  // else
  return arr.reduce(function(product, num) {
    return product * num;
  });
}

function filterEvenElements(arr) {
  return arr.filter(function(number) {
    return number % 2 === 0;
  });
}

function getLengthOfShortestElement(arr) {
  if (arr.length === 0) { return 0; }
  // else
  return arr.reduce(function(shortest, word) {
    if (word.length < shortest) {
      return word.length;
    } else {
      return shortest;
    }
  }, arr[0].length);
}

function getLongestElement(arr) {
  return arr.reduce(function(longestWord, word) {
    if (word.length > longestWord.length) {
      return word;
    } else {
      return longestWord;
    }
  });
}

function findSmallestElement(arr) {
  return arr.reduce(function(smallest, num) {
    if (num < smallest) {
      return num;
    } else {
      return smallest;
    }
  });
}

function findShortestElement(arr) {
  if (arr.length === 0) { return ''; }
  // else
  return arr.reduce(function(shortestWord, word) {
    if (word.length < shortestWord.length) {
      return word;
    } else {
      return shortestWord;
    }
  });
}

function getLargestElement(arr) {
  if (arr.length === 0) { return 0; }
  return arr.reduce(function(largest, num) {
    if (num > largest) {
      return num;
    } else {
      return largest;
    }
  });
}

function computeSumOfAllElements(arr) {
  return arr.reduce(function(sum, num) {
    return sum + num;
  }, 0);
}

function getProductOfAllElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce(function(product, num) {
      return product * num;
    });
  } else {
    return 0;
  }
}

function getSumOfAllElementsAtProperty(obj, key) {
  if (Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key].reduce(function(sum, num) {
      return sum + num;
    });
  } else {
    return 0;
  }
}

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) { return ''; }
  // else
  var words = arr.filter(function(el) {
    return typeof el === 'string';
  });
  if (words.length === 0) { return ''; }
  // else
  return words.reduce(function(shortestWord, word) {
    if (word.length < shortestWord.length) {
      return word;
    } else {
      return shortestWord;
    }
  });
}

function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) { return 0; }
  // else
  var nums = arr.filter(function(el) {
    return typeof el === 'number';
  });
  if (nums.length === 0) { return 0; }
  // else
  return nums.reduce(function(smallestNum, el) {
    if (el < smallestNum) {
      return el;
    } else {
      return smallestNum;
    }
  });
}







