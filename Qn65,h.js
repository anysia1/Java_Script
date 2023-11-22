function calculateArea(shape, params) {
    switch (shape) {
        case 'circle':
            return Math.PI * Math.pow(params.radius, 2);
        case 'square':
            return Math.pow(params.side, 2);
        case 'triangle':
            return 0.5 * params.base * params.height;
        default:
            return 'Invalid shape';
    }
}

console.log(calculateArea('circle', { radius: 5 })); 