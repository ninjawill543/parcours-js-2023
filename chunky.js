const chunk = (array, chunkSize) => {
    let resultArray = [];
    let currentChunk = [];

    for (let i = 0; i < array.length; i++) {
        currentChunk.push(array[i]);

        if ((i + 1) % chunkSize === 0 || i === array.length - 1) {
            resultArray.push(currentChunk);
            currentChunk = [];
        }
    }

    return resultArray;
}