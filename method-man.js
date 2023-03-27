function words(arg){
    return myArray = arg.split(" ");
}

function sentence(arg){
    let text = arg.toString();
    let res = text.replace(",", " ");
    return res;
}

function yell(arg){
    return arg.toUpperCase();
}

function whisper(arg){
    return arg.toLowerCase();
}

function capitalize(arg){
    let low = arg.toLowerCase();
    return low[0].toUpperCase() + low.slice(1);
}