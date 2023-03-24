function dogYears(name, age){
    switch(name){
        case 'earth':
            return (age * 7 * 1)/31557600;
        case 'mercury':
            return (age * 7 * 0.2408467)/31557600;
        case 'venus':
            return (age * 7 * 0.61519726)/31557600;
        case 'mars':
            return (age * 7 * 1.8808158)/31557600;
        case 'jupiter':
            return (age * 7 * 11.862615)/31557600;
        case 'saturn':
            return (age * 7 * 29.447498)/31557600;
        case 'uranus':
            return (age * 7 * 84.016846)/31557600;
        case 'neptune':
            return (age * 7 * 164.79132)/31557600;
    }
}