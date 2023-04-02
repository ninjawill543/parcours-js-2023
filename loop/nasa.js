const nasa = (count) => {
    let countdownArray = [];

    for (let i = 1; i <= count; i++) {
        countdownArray.push(i);
    }

    for (let j = 0; j < countdownArray.length; j++) {
        if (countdownArray[j] % 3 === 0 && countdownArray[j] % 5 === 0) {
            countdownArray[j] = "NASA";
        } else if (countdownArray[j] % 3 === 0) {
            countdownArray[j] = "NA";
        } else if (countdownArray[j] % 5 === 0) {
            countdownArray[j] = "SA";
        }
    }

    let resultString = '';
    for (let k = 0; k < countdownArray.length; k++) {
        resultString += countdownArray[k];
        if (k !== countdownArray.length - 1) {
            resultString += ' ';
        }
    }

    return resultString;
}
