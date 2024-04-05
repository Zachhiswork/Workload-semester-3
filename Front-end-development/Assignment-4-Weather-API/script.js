// API key for accessing the OpenWeatherMap API
const apiKey = 'e27fe1054714b8ecec4d0db84b85702a';

// Function to get weather data
function getWeather() {
    // Get user input for the city from the input field
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value.trim();

    // Check if the user entered a city name
    if (!city) {
        // Alert the user if no city name is entered
        alert('Please enter a city name.');
        return;
    }

    // Fetch weather data from OpenWeatherMap API using the entered city and API key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Call the displayWeather function with the retrieved data
            displayWeather(data);
        })
        .catch(error => {
            // Log and alert if there's an error fetching weather data
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data');
        });
}

// Function to display weather information on the webpage
function displayWeather(data) {
    // Get HTML elements for city name, temperature, description, and weather icon
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const weatherIcon = document.getElementById('weather-icon');

    // Update the HTML elements with the corresponding weather data
    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // Call the setBodyBackground function to update the body background based on weather description
    setBodyBackground(data.weather[0].description);
}

// Function to set the body background based on the weather description
function setBodyBackground(description) {
    // Get the body element
    const body = document.body;

    // Define a mapping of weather descriptions to background images
    const weatherImages = {
        'rain': 'rain.gif',
        'clear': 'clear.gif',
        'cloud': 'cloud.gif',
        'mist': 'mist.gif',
        'fog': 'mist.gif', // Intentional typo: 'mist' used for 'fog'
        'default': 'default.jpg'
    };

    // Update the body background image based on the weather description
    body.style.backgroundImage = `url(${weatherImages[getWeatherType(description)]})`;
}

// Function to determine the weather type based on the description
function getWeatherType(description) {
    // Check the weather description and return a corresponding type
    if (description.includes('rain')) {
        return 'rain';
    } else if (description.includes('clear')) {
        return 'clear';
    } else if (description.includes('cloud')) {
        return 'cloud';
    } else if (description.includes('mist')) {
        return 'mist';
    } else if (description.includes('fog')) {
        return 'mist'; // Intentional typo: 'mist' used for 'fog'
    } else {
        return 'default';
    }
}
