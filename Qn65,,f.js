function executeOperation(option) {
    switch (option) {
        case 1:
            console.log('Performing operation 1');
            break;
        case 2:
            console.log('Performing operation 2');
            break;
        default:
            console.log('Invalid option');
    }
}

executeOperation(2);