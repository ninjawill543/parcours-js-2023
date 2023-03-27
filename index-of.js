function indexOf(array, word, index){
    if (index != null){
        for (let i = index; i < array.length; i++) {
            if (array[i] === word){
                return i;

            }
        }
        return -1;
    }else{
        for (let i = 0; i < array.length; i++) {
            if (array[i] === word){
                return i;

            }
        }
        return -1;
    }
}