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