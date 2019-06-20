var eng_to_rusmap = new Map([
  ['q', 'й'],
  ['w', 'ц'],
  ['e', 'у'],
  ['r', 'к'],
  ['t', 'е'],
  ['y', 'н'],
  ['u', 'г'],
  ['i', 'ш'],
  ['o', 'щ'],
  ['p', 'з'],
  ['[', 'х'],
  [']', 'ъ'],
  ['a', 'ф'],
  ['s', 'ы'],
  ['d', 'в'],
  ['f', 'а'],
  ['g', 'п'],
  ['h', 'р'],
  ['j', 'о'],
  ['k', 'л'],
  ['l', 'д'],
  [';', 'ж'],
  ['\'', 'э'],
  ['z', 'я'],
  ['x', 'ч'],
  ['c', 'с'],
  ['v', 'м'],
  ['b', 'и'],
  ['n', 'т'],
  ['m', 'ь'],
  [',', 'б'],
  ['.', 'ю'],
  ['/', '.'],
  ['{', 'Х'],
  ['}', 'Ъ'],
  [':', 'Ж'],
  ['\"', 'Э'],
  ['<', 'Б'],
  ['>', 'Ю'],
  ['?', ','],
  ['&', '?']
]);

function getFocusElem() {
  var focusedElement = document.activeElement;
  if (!focusedElement || focusedElement == document.body)
      focusedElement = null;
  else if (document.querySelector)
      focusedElement = document.querySelector(":focus");
  return focusedElement;
}

function toRus(old_string) {
  console.log('old_string: ' + old_string);
  var upper = false;
  var new_string = '';

  for (var i = 0; i < old_string.length; i++) {
    if (!(eng_to_rusmap.has(old_string[i]) || (eng_to_rusmap.has(old_string[i].toLowerCase())))) {
       new_string += old_string[i];
       continue;
    }
    if (/^[A-Z]/.test(old_string[i]))  upper = !upper;

    new_string += upper ? eng_to_rusmap.get(old_string[i].toLowerCase()).toUpperCase() : eng_to_rusmap.get(old_string[i]);

    if (upper) upper = !upper;
  }
  return new_string;
}

function getNewString(all_str, sel_str, rus_str) {
  var arr = all_str.split(sel_str);
  return arr[0] + rus_str + arr[1];
}

var fE = getFocusElem();

if (fE.tagName == 'INPUT') {
  fE.value = getNewString(fE.value, fE.value, toRus(fE.value));
} else {
  fE.innerHTML = getNewString(fE.innerHTML, window.getSelection().toString(), toRus(window.getSelection().toString()));
}
