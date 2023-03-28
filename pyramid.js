const pyramid = (x, n) => {
    let res = ''
    for (let i = 1; i <= n; i++) {
        let noOfChar = ((2 *i) - 1)
        let noOfSpaces = (((2*n) - 1) - noOfChar) * x.length
        noOfSpaces /= 2
        for (let j = 0; j < noOfSpaces; j++) {
            res += ' '
        }
        for (let k = 0; k < noOfChar; k++) {
            res += x
        }
        if (i != n) {
            res += '\n'
        }
        

    }
    return res
}