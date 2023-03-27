function repeat(string, num){
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(string);
    }
    let array = arr.toString();
    let res = array.replace(/,/g, "");
    return(res);
}