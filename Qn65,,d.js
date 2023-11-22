function trafficLightColor(code) {
    switch (code) {
        case 1:
            return 'Red';
        case 2:
            return 'Yellow';
        case 3:
            return 'Green';
        default:
            return 'Invalid code';
    }
}

console.log(trafficLightColor(2)); 