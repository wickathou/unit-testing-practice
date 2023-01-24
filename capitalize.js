function capitalize(string) {
  if (typeof string === 'string' && string.length > 0) {
    return string[0].toUpperCase() + string.substring(1);
  } else {
    throw new Error
  }
}

module.exports = capitalize