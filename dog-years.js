function dogYears(name, age){
    let newage = age * 7;
    switch(name){
        case 'earth':
            return newage * 1 / 31,557,600;
        case 'mercury':
            return newage * 0.2408467 / 31,557,600;
        case 'venus':
            return newage * 0.61519726 / 31,557,600;
        case 'mars':
            return newage * 1.8808158 / 31,557,600;
        case 'jupiter':
            return newage * 11.862615 / 31,557,600;
        case 'saturn':
            return newage * 29.447498 / 31,557,600;
        case 'uranus':
            return newage * 84.016846 / 31,557,600;
        case 'neptune':
            return newage * 164.79132 / 31,557,600;
    }
}