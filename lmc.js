function smallestCommons(arr) {
    const [a,b] = [...arr]
    let [min, max] = []
    a < b ? [min,max] = [a,b] : [min,max] = [b,a]
    const newArr = []
  
    for(let i = min; i<=max; i++){
      newArr.unshift(i)
    }
   
  
    function findLcm(multAnterior,countAtual){
      let multAtual = newArr[countAtual]
      for(let j = 1; multAtual<=multAnterior; j++){
          multAtual = j*newArr[countAtual];
          if(multAtual === multAnterior){
              if(!!newArr[countAtual+1]){
                findLcm(multAtual,countAtual+1)
              }else {
                lcm = multAtual;
                return lcm;
              }
          }
        }
    }
  
    let lcm;
    let countAtual = 1;
  
    for(let i = 1; !lcm; i++){
      let primeiroMult = i*newArr[0];
      findLcm(primeiroMult,countAtual)
    }
    
    console.log(lcm)
  
    return lcm;
  }
  
  
  smallestCommons([23,18]);