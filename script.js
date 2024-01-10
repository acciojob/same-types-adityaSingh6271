function isSameType(value1, value2) {
  if (isNaN(value1) && isNaN(value2)) {
    return true; // Both values are NaN
  } else if (typeof value1 !== typeof value2) {
    return false; // Types are not the same
  }
  return true; // Types are the same (excluding NaN scenario)
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
