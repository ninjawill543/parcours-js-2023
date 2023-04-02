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

function flipNeg(num) {
    if (num < 0) return -num;
    return num
}

function checkNeg(a, b) {
    if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) return true
    return false
}


function divide(a, b) {
    const check = checkNeg(a, b)
    a = flipNeg(a)
    b = flipNeg(b)

    let x = 0;
    for (; a >= b;) {
        x += 1;
        a = a - b;
    }
    if (check) x = -x
    return x
}

function modulo(a, b) {
    let check = false;
    if (a < 0) {
        check = true
    }
    a = flipNeg(a)
    b = flipNeg(b)

    for (; a >= b;) {
        a = a - b;
    }
    if (check) a = -a
    return a
}
  