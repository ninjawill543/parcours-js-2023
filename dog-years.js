function dogYears(name, age){
    switch(name){
        case 'earth':
            return Number.parseFloat((age * 7 * 1)/31557600).toFixed(2);
        case 'mercury':
            return Number.parseFloat((age * 7 * 0.2408467)/31557600).toFixed(2);
        case 'venus':
            return Number.parseFloat((age * 7 * 0.61519726)/31557600).toFixed(2);
        case 'mars':
            return Number.parseFloat((age * 7 * 1.8808158)/31557600).toFixed(2);
        case 'jupiter':
            return Number.parseFloat((age * 7 * 11.862615)/31557600).toFixed(2);
        case 'saturn':
            return Number.parseFloat((age * 7 * 29.447498)/31557600).toFixed(2);
        case 'uranus':
            return Number.parseFloat((age * 7 * 84.016846)/31557600).toFixed(2);
        case 'neptune':
            return Number.parseFloat((age * 7 * 164.79132)/31557600).toFixed(2);
    }
}