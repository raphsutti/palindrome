// Palindrome test function
function palindrome(str) {
  // Trimmed string
  var low = str.toLowerCase();
  var spaceTrim = low.replace(/ /g,"");
  var underTrim = spaceTrim.replace(/\_/g,"");
  var comTrim = underTrim.replace(/\,/g,"");
  var dotTrim = comTrim.replace(/\./g,"");
  var charTrim = dotTrim.replace(/\(:/g,"");
  var char2Trim = charTrim.replace(/:\)/g,"");
  var char3Trim = char2Trim.replace(/\/-\\/g,"");
  var trimmed = char3Trim.replace(/-/g,"");
  
  // Reverse string
  var strArr = [];
  for (var i =trimmed.length; i>=0; i--) {
    strArr.push(trimmed[i]);
  }
  var revStr = strArr.join("");

  if(revStr === trimmed) {
    return true;
  } else {
    return false;
  }
}

palindrome("1 eye for of 1 eye.");
