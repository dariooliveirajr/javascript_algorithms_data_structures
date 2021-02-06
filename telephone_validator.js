function telephoneCheck(str) {
  let verifier = str.match(/\d/gi)

  //Filter min and max numbers
  if(verifier.length > 11 || verifier.length < 10){
      return false
  }
  //Filter US country number
  if(verifier.length == 11 && verifier[0] != 1){
      return false
  }

  let verifier2 = str.replaceAll(" ","")
  let anySpecial = /-|\(|\)/
  let anyHifen = /-/
  let anyParentheses = /\(|\)/
  
  if(anySpecial.test(verifier2)){
      //Have parentheses and hifen
      if(anyParentheses.test(verifier2) && anyHifen.test(verifier2)){
          if(verifier.length == 11){
              if(verifier2[1] != "(" || verifier2[5] != ")" || verifier2[9] != "-"){
                  return false
              }
          }else if(verifier.length == 10){
              if(verifier2[0] != "(" || verifier2[4] != ")" || verifier2[8] != "-"){
                  return false
              }
          }
      }else if(anyParentheses.test(verifier2)){
          if(verifier.length == 11){
              if(verifier2[1] != "(" || verifier2[5] != ")"){
                  return false
              }
          }else if(verifier.length == 10){
              if(verifier2[0] != "(" || verifier2[4] != ")"){
                  return false
              }
          }
      }else if(anyHifen.test(verifier2)){
          if(verifier.length == 11){
              if(verifier2[4] != "-" && verifier2[8] != "-"){
                  return false
              }
          }else if(verifier.length == 10){
              if(verifier2[3] != "-" && verifier2[7] != "-"){
                  return false
              }
          }
      }
  }

  console.log(verifier2)
  console.log("Tem acento:",anySpecial.test(verifier2))
  console.log("Tem parenteses:",anyParentheses.test(verifier2))
  console.log("Tem hifen:",anyHifen.test(verifier2))
  console.log("")

  return true;
}


telephoneCheck("1 (555) 555-5555")