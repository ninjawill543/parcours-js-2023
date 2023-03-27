function indexOf(array, word, index){
    if (index != null){

    }else{
        for (let i = 0; i < array.length; i++) {
            if (array[i] === word){
                return i;

            }
        }
        return -1;
    }
}