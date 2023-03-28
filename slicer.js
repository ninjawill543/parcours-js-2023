function slice(arr, start, end) {
    if (start < 0) {
      start = arr.length + start;
    }
    if (end < 0) {
      end = arr.length + end;
    }
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined || end > arr.length) {
      end = arr.length;
    }
    let sliced = Array.isArray(arr) ? [] : '';
    for (let i = start; i < end; i++) {
      sliced += arr[i];
    }
    return sliced;
  }
  