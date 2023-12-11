function convertCurrency() {
    // Get input values
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Make API call to get exchange rates (you may use a real API)
    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);

    // Perform currency conversion
    var convertedAmount = amount * exchangeRate;

    // Display the result
    document.getElementById('result').innerText = amount + ' ' + fromCurrency.toUpperCase() +
        ' is equal to ' + convertedAmount.toFixed(2) + ' ' + toCurrency.toUpperCase();
}

function getExchangeRate(fromCurrency, toCurrency) {
    // In a real scenario, you would make an API call to get the actual exchange rate
    // For the sake of this example, let's assume a fixed exchange rate
    // You may replace this with a real API call
    var exchangeRates = {
        'usd': {
            'eur': 0.85,
            // Add more exchange rates as needed
        },
        'eur': {
            'usd': 1.18,
            // Add more exchange rates as needed
        },
    };

    return exchangeRates[fromCurrency][toCurrency];
}

