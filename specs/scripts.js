var vowel = function(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "ay";
} else if
    (/[^aeiou]/.test(str)) {
    return str.slice(1) + str.slice(0) + "ay";
  }
};
