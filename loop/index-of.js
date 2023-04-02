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

function lastIndexOf(arr, value, index = arr.length - 1) {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === value) return i
    }
    return -1
}

function includes(array, word, index){
    if (indexOf(array, word, index) != -1){
        return true;
    }else{
        return false;
    }
}