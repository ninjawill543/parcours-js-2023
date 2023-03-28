function split(string, splitter){
    var sliced = [];
    var holder = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === splitter){
            sliced.push(holder);
            holder = '';
        }else{
            holder += string[i];
        }
    }
    return sliced;
}