// Function to calculate amount in EUR based on input in USD
function calculateEuro() {
    // Get the amount of money entered by the user in USD
    const amount = parseFloat(document.getElementById('amount').value);

    // Fetch the latest exchange rates for USD from the internet
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            // Check if the internet connection is good
            if (!response.ok) {
                throw new Error('Oops! Something went wrong with the internet connection.');
            }
            // Convert the response to a readable format
            return response.json();
        })
        .then(data => {
            // Get the exchange rate for converting USD to EUR from the response
            const exchangeRate = data.rates.EUR;
            // Calculate the converted amount from USD to EUR
            const convertedAmount = amount * exchangeRate;
            // Show the result on the webpage
            document.getElementById('result').innerText = `${amount.toFixed(2)} USD is about ${convertedAmount.toFixed(2)} EUR`;
        })
        .catch(error => {
            // Log any errors to the console for troubleshooting
            console.error(error);
        });
}

// Function to calculate amount in USD based on input in EUR
function calculateUsd() {
    // Get the amount of money entered by the user in EUR
    const amount = parseFloat(document.getElementById('amount').value);

    // Fetch the latest exchange rates for USD from the internet
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => {
            // Check if the internet connection is good
            if (!response.ok) {
                throw new Error('Oops! Something went wrong with the internet connection.');
            }
            // Convert the response to a readable format
            return response.json();
        })
        .then(data => {
            // Get the exchange rate for converting EUR to USD from the response
            const exchangeRate = data.rates.EUR;
            // Calculate the converted amount from EUR to USD
            const convertedAmount = amount / exchangeRate;
            // Show the result on the webpage
            document.getElementById('result').innerText = `${amount.toFixed(2)} EUR is about ${convertedAmount.toFixed(2)} USD`;
        })
        .catch(error => {
            // Log any errors to the console for troubleshooting
            console.error(error);
        });
}
