module.exports = function check(str, bracketsConfig) {
  let bracketSamples = bracketsConfig.map((e) => e.join(''));

  for (let i = 0; i < bracketSamples.length; i++){
    if (str.includes(bracketSamples[i])) {
      str = str.replace(bracketSamples[i], '');
      i = -1;
    }
  }

  return str ? false : true;
}
