function getMonthName(monthNumber) {
    switch (monthNumber) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        default:
            return 'Invalid month number';
    }
}

console.log(getMonthName(7));