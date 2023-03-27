function multiply(a, b){
    var sum = 0;
    if (b > 0){
        for (let i = 0; i < b; i++) {
            sum = sum + a;
        }
        return(sum);
    }else{
        for (let i = 0; i < -b; i++) {
            sum = sum + a;
        }
        return(-sum);
    }
    
}

  

//   function divide(a, b) {
//     if (b === 0) {
//       return NaN;
//     }
    
//     var count = 0;
    
//     while (a >= b) {
//       a = a - b;
//       count++;
//     }
    
//     return count;
//   }