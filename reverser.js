function reverse(input){
    let sliced = Array.isArray(input) ? [] : '';
    if (Array.isArray(input)){
        for (let i = input.length - 1; i >= 0; i--) {
            sliced.push(input[i]);
        }
    }else{
        for (let i = input.length - 1; i >= 0; i--) {
            sliced += input[i];
        }
    }
    return sliced;
    
}

