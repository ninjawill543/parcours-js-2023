function slice(arr, start = 0, end = arr.length) {
    if (start < 0) {
      start = arr.length + start;
    }
    if (end < 0) {
      end = arr.length + end;
    }
    let sliced = Array.isArray(arr) ? [] : '';
    for (let i = start; i < end; i++) {
      sliced += arr[i];
    }
    return sliced;
  }