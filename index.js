module.exports = function Numberwang(number) {
  return (Date.now() % +(+number || '42') === 0);
};
