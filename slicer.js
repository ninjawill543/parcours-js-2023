function slice(array, start, end){
    var newarray ;
    if (end === null){
        for (let i = start; i < array.length-1; i++) {
            newarray.push(array[i]);
        }
        return newarray;
    }else{
        for (let i = start; i < end; i++) {
            newarray.push(array[i]);
       }
       return newarray;
    }
}