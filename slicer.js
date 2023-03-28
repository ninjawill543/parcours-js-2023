function slice(array, start, end){
    if (typeof array === object){
        var newarray = [];
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
    }else{
        var newarray = "";
        if (end === null){
            for (let i = start; i < array.length-1; i++) {
                newarray = newarray + array[i];
            }
            return newarray;
        }else{
            for (let i = start; i < end; i++) {
                newarray = newarray + array[i];
           }
           return newarray;
        }
    }

}