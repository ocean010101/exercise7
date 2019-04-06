module.exports = function (str) {
  return /^(0x[\dA-Fa-f][\dA-Fa-f]\s*){8}$/.test(str);
}