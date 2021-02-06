function rot13(str) {
    let newStr = str.split('')
    const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLM .!?()"'.split('')
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ .!?()"'.split('')
    let resArr = []
  
    for(let i = 0; i<newStr.length; i++){
      let index = rot13.indexOf(newStr[i])
      resArr.push(alphabet[index])
    }
  
    return resArr.join('');
  }
  
  rot13("SERR PBQR PNZC");