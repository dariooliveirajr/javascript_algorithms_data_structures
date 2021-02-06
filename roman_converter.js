function convertToRoman(num) {
    let newNum = num
    let result= "";
    let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
   
    for(let i = 0; i<decimals.length; i ++){
        while((newNum-decimals[i])>=0){
            newNum -= decimals[i]
            result += roman[i]
        }
    }

    return result;
   }
   
   convertToRoman(36);