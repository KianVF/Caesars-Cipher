function rot13(str) {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return str.replace(/[A-Z]/g, e => letters.indexOf(e)-13 >= 0 ? letters[letters.indexOf(e)-13] : letters[letters.length+letters.indexOf(e)-13]);
}
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
