function pyramid(char, height) {
    let result = "";
    let width = height * 2 - 1;
    let middle = Math.floor(width / 2);

    for (let row = 0; row < height; row++) {
        let rowChars = char.repeat(row * 2 + 1);
        let rowSpaces = " ".repeat(middle - row);

        result += rowSpaces + rowChars + "\n";
    }

    return result;
}
