function repeat(string, num){
    var print;
    for (let i = 0; i < num; i++) {
        print = print + String(string);
    }
    return print;
}