function palindrome(str) {
    let result = true;
    let newArr = []
    let theStr = str.toLowerCase().replace(/\W|_/g,'').split('')
    if(theStr){
      theStr.forEach(el => {
        newArr.unshift(el)
      })
    }else {
        return false
    }
  
    console.log(theStr)
    console.log(newArr)
  
    for(let i = 0; i<theStr.length; i++){
      if(theStr[i] != newArr[i]){
        result = false
        break
      }
    }
    return result;
  }
  
  
  
  
  console.log(palindrome("1 eye for of 1 eye."))