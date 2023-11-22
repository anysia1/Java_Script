function getSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return 'Winter';
        case 3:
        case 4:
        case 5:
            return 'Spring';
        case 6:
        case 7:
        case 8:
            return 'Summer';
        case 9:
        case 10:
        case 11:
            return 'Fall';
        default:
            return 'Invalid month';
    }
}

console.log(getSeason(7));