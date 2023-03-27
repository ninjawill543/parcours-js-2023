function isPositive(arg){
    if (arg > 0){
        return true;
    }else{
        return false;
    }
}

function abs(arg){
    if (isPositive(arg) === true){
        return arg;
    }else{
        return (arg * -1);
    }
}