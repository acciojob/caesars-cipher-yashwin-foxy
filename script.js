function rot13(str) {
  return str.replace(/[A-Z]/g, function(char) {
    // Get the character code of the current character
    var charCode = char.charCodeAt(0);
    // A: 65, Z: 90
    // Apply ROT13 decoding using modulo operator
    // Shift the characters by 13 positions in the alphabet
    charCode = (charCode - 65 + 13) % 26 + 65;
    // Convert the character code back to a character and return
    return String.fromCharCode(charCode);
  });
}

// Example usage
var encodedString = "SERR PBQR PNZC";
var decodedString = rot13(encodedString);
console.log(decodedString); // Output: "FREE CODE CAMP"
