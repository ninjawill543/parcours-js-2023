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

function lastIndexOf(array, word, index){
    if (index != null){
        for (let i = array.length - 1; i >= index; i--) {
            if (array[i] === word){
                return i;

            }
        }
        return -1;
    }else{
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === word){
                return i;

            }
        }
        return -1;
    }
}