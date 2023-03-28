function slice(arr, start = 0, end = arr.length) {

    let sliced = Array.isArray(arr) ? [] : '';
  
    for (let i = start; i < end; i++) {
      sliced += arr[i];
    }
  
    return sliced;
  }