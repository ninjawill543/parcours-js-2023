function split(string, splitter){
    const sliced = [];
    var holder = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === splitter){
            sliced.push(holder);
        }else{
            sliced += string[i];
        }
    }
    return sliced;
}