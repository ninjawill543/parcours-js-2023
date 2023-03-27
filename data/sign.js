function sign(arg){
    if (arg === 0){
        return 0;
    }else if (arg > 0){
        return 1;
    }else{
        return -1;
    }
}

function sameSign(arg, arg2){
    if (sign(arg) === sign(arg2)){
        return true;
    }else{
        return false;
    }
}