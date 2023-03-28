function slice(array, start, end){
    var newarray = [];
    if (end === null){
        for (let i = start; i < array.length; i++) {
             newarray = newarray + array[i];
        }
        console.log(newarray);
        return newarray;
    }else{
        for (let i = start; i < end; i++) {
            newarray = newarray + array[i];
       }
       console.log(newarray);
       return newarray;
    }
}