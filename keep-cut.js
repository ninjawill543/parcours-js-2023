function cutFirst(string){
    return string.slice(2);
}

function cutLast(string){
    return string.slice(0, string.length-2);
}

function cutFirstLast(string){
    return cutFirst(cutLast(string));
}

function keepFirst(string){
    return string.slice(0,2);
}

function keepLast(string){
    return string.slice(string.length-2);
}


function keepFirstLast(string){
    const str = string;
    if (string.length === 2){
        return keepFirst(string);
    }else if(string.length === 3){
        return keepFirst(string) + keepLast(str);
    }else{
        return keepFirst(string)+keepLast(str);

    }
}