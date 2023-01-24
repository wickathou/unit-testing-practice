function stringLength(string) {
  let count = 0
  string.split('').forEach(i => {
    count ++
  });
  if (count<1 || count > 10) {
    throw new Error
  } else {
    return count
  }
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

module.exports = {stringLength, reverseString}