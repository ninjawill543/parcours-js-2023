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

  function divide(a, b) {
    let flag = false;
    let count = false
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }

    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
        flag = true
    }
    let result = a
    while (result > b) {
        result -= b
        count++
    }
    if (flag) {
        count = -count
    }
    return count
}
  