function currencyConverter(amount, sourceCurrency, targetCurrency) {
    switch (`${sourceCurrency}_${targetCurrency}`) {
        case 'USD_EUR':
            return amount * 0.85;
        default:
            return 'Invalid currency pair';
    }
}

console.log(currencyConverter(100, 'USD', 'EUR'));