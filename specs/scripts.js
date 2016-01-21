var vowel = function(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "ay";
} else if
    (/[^aeiou]/.test(str)) {
    return str.slice(1) + str.charAt(0) + 'ay';
  }
};
