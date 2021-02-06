function checkCashRegister(price, cash, cid) {

    let status;
    let newArr = []
    let newCid = []
    cid.forEach(el => {
      newCid.unshift(el)
    })
    let cidValue = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
      ]
    let change = cash-price
    let insChange = change
    for(let i = 0; insChange > 0; i++){

      while((insChange-cidValue[i][1]) >= 0
      && cidValue[i][1] <= newCid[i][1]) {
          insChange = (insChange-cidValue[i][1]).toFixed(2)
          newCid[i][1]= (newCid[i][1]-cidValue[i][1]).toFixed(2)
          newArr.push(cidValue[i])
      }
      if(insChange == 0){
        let remaining = newCid.reduce((acc,el) => {
          return el[1]+acc
        },0)
        if(remaining == 0){
          status = "CLOSED"
          break
        }else {
          status = "OPEN"
          break
        }
      }
      if(i == 8){
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }

    }

  let counter;

  if(status == "OPEN"){
    counter = {
        "ONE HUNDRED": 0,
        "TWENTY": 0,
        "TEN": 0,
        "FIVE": 0,
        "ONE": 0,
        "QUARTER": 0,
        "DIME": 0,
        "NICKEL": 0,
        "PENNY": 0
    }
  } else {
    counter = {
        "PENNY": 0,
        "NICKEL": 0,
        "DIME": 0,
        "QUARTER": 0,
        "ONE": 0,
        "FIVE": 0,
        "TEN": 0,
        "TWENTY": 0,
        "ONE HUNDRED": 0
    }
  }

    
    for(let i = 0; i<newArr.length; i++){
      let sum = +(counter[newArr[i][0]] + newArr[i][1]).toFixed(2)
      counter[newArr[i][0]] = sum
    }
      
    if(status == "OPEN"){
      let properties = Object.keys(counter)
      properties.forEach(el => {
        if(counter[el] == 0){
          delete counter[el]
        }
      })
    }
    change = Object.entries(counter)
    const resObject = {status,change}

    return resObject;
  }
  
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))