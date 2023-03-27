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
        for (let i = (array.length - index); i >= 0; i--) {
            if (array[i] === word){
                console.log(i) ;

            }
        }
        console.log(-1);
    }else{
        for (let i = array.length; i >= 0; i--) {
            if (array[i] === word){
                console.log(i) ;

            }
        }
        console.log(-1) ;
    }
}