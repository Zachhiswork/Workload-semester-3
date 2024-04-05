# Interactive Map of Europe

## Overview

This project features an interactive map of Europe with pop-ups for each country that play audio specific to each region. The primary goal was to create an engaging and informative experience for users exploring the continent.

## The Challenge

The main goal was to implement an interactive map where users could click on individual countries and receive a pop-up with relevant information, including the name of the country and associated audio.

## Development Process

### Coding

- JavaScript was used to dynamically generate pins for each country on the map.
- Rather than using SVGs to outline countries, pins were strategically placed on the map using JavaScript for enhanced efficiency.
- Initial pop-ups were implemented using alert boxes but were later switched to div elements for a more seamless integration with audio playback.

### Project Structure

- **HTML (`index.html`):**
  - Contains the structure of the web page, including the map, pins, and pop-up elements.

- **CSS (`style.css`):**
  - Stylesheet to control the visual presentation of the map and pop-ups.

- **JavaScript (`script.js`):**
  - Generates pins on the map based on the `locations` array.
  - Manages pop-up display and audio playback.

## How to Run

1. Clone the repository: `git clone [repository_url]`
2. Open `index.html` in a web browser.

## Dependencies

- No external libraries or frameworks are used.
- Compatible with modern web browsers.

Feel free to explore, enhance, and learn from the codebase. Enjoy exploring Europe interactively!
