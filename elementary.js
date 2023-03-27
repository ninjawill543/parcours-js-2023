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

function divide(a, b){
    var rep = a;
    var count = 0;
    while (rep >= b){
        count = count + 1;
        rep = rep - b;
        
    }
    return count;
}