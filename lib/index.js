'use strict';

// http://stackoverflow.com/a/9310752
let regexpEscape = function(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

let replacer = function(needles, replaceCallback) {
  let needlesEscaped = needles.map(s => regexpEscape(s));
  let regexp = new RegExp('(' + needlesEscaped.join('|') + ')', 'g');
  return function(haystack) {
    return haystack.replace(regexp, replaceCallback);
  };
};

let mapReplacer = function(mapOldToNew) {
  let needles = Object.keys(mapOldToNew);
  return replacer(needles, old => mapOldToNew[old]);
};

export default {
  replacer,
  mapReplacer,
};
