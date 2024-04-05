createCountryInteraction(document.querySelectorAll('.russia'), 'sounds/russian.mp3', 'rgb(78, 77, 77)', 'Russia', '#4e7fe0');
createCountryInteraction(document.querySelectorAll('.italy'), 'sounds/Italy.mp3', 'rgb(78, 77, 77)', 'Italy', '#fff');
createCountryInteraction(document.querySelectorAll('.spain'), 'sounds/spain.mp3', 'rgb(78, 77, 77)', 'Spain', '#26527b');
createCountryInteraction(document.querySelectorAll('.netherlands'), 'sounds/netherlands.mp3', 'rgb(78, 77, 77)', 'Netherlands', '#fff');
createCountryInteraction(document.querySelectorAll('.portugal'), 'sounds/portugal.mp3', 'rgb(78, 77, 77)', 'Portugal', '#ff5349');
createCountryInteraction(document.querySelectorAll('.turkey'), 'sounds/turkey.mp3', 'rgb(78, 77, 77)', 'Turkey', '#fff');
createCountryInteraction(document.querySelectorAll('.poland'), 'sounds/poland.mp3', 'rgb(78, 77, 77)', 'Poland', '#ff5349');
createCountryInteraction(document.querySelectorAll('.sweden'), 'sounds/sweden.mp3', 'rgb(78, 77, 77)', 'Sweden', '#18cdca');
// i've made the code a lot shorter giving the classes of every polygon, adding the sound to each one, the hover color the text inside the toolbox and the originalcolor back from hover
function createCountryInteraction(polygons, audioFile, color, tooltipText, originalColor) {
    // created a function for each variable
    let tooltip;
    const audio = new Audio(audioFile);
    let isAudioPlaying = false;

    polygons.forEach(polygon => {
        polygon.style.cursor = 'pointer';
        polygon.addEventListener('mouseenter', function (event) {
            polygons.forEach(p => {
                p.style.fill = color;
                p.style.transition = '0.3s';
            });

            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerHTML = tooltipText;

            document.body.appendChild(tooltip);

            tooltip.style.left = `${event.clientX + 10}px`;
            tooltip.style.top = `${event.clientY + 10}px`;
            tooltip.style.display = 'block';
            // positioning the tooltip right after the mouse
        });

        polygon.addEventListener('mouseleave', function () {
            polygons.forEach(p => {
                p.style.fill = originalColor;
                p.style.transition = '0.3s';
            });

            if (tooltip) {
                tooltip.style.display = 'none';
                document.body.removeChild(tooltip);
            }
        });

        polygon.addEventListener('click', function () {
            if (isAudioPlaying) {
                audio.pause();
                audio.currentTime = 0;
            } else {
                audio.play();
            }
            isAudioPlaying = !isAudioPlaying;
        });
    });
}




// 
// code that i've eventually made but changed it using the code below with ai
// 
// 
// const russiaPolygons = document.querySelectorAll('.russia');
// let russiaTooltip;
// const russiaAudio = new Audio('sounds/russian.mp3');
// russiaPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer';
//     polygon.addEventListener('mouseenter', function (event) {
//         russiaPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         russiaTooltip = document.createElement('div');
//         russiaTooltip.className = 'tooltip';
//         russiaTooltip.innerHTML = 'Russia';

//         document.body.appendChild(russiaTooltip);

//         russiaTooltip.style.left = `${event.clientX + 10}px`;
//         russiaTooltip.style.top = `${event.clientY + 10}px`;
//         russiaTooltip.style.display = 'block';

//         setTimeout(() => {
//             russiaAudio.play();
//         }, 1000);

//     });

//     polygon.addEventListener('mouseleave', function () {
//         russiaPolygons.forEach(p => {
//             p.style.fill = '#4e7fe0';
//             p.style.transition = '0.3s';
//         });

//         if (russiaTooltip) {
//             russiaTooltip.style.display = 'none';
//             document.body.removeChild(russiaTooltip);
//         }
//         russiaAudio.pause();
//         russiaAudio.currentTime = 0;
//     });
// });

// // Italy
// const italyPolygons = document.querySelectorAll('.italy');
// let italyTooltip;
// const italyAudio = new Audio('sounds/Italy.mp3');
// italyPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer';
//     polygon.addEventListener('mouseenter', function (event) {
//         italyPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         italyTooltip = document.createElement('div');
//         italyTooltip.className = 'tooltip';
//         italyTooltip.innerHTML = 'Italy';

//         document.body.appendChild(italyTooltip);

//         italyTooltip.style.left = `${event.clientX + 10}px`;
//         italyTooltip.style.top = `${event.clientY + 10}px`;
//         italyTooltip.style.display = 'block';

//         setTimeout(() => {
//             italyAudio.play();
//         }, 1000);
//     });

//     polygon.addEventListener('mouseleave', function () {
//         italyPolygons.forEach(p => {
//             p.style.fill = '#4e7fe0';
//             p.style.transition = '0.3s';
//         });

//         if (italyTooltip) {
//             italyTooltip.style.display = 'none';
//             document.body.removeChild(italyTooltip);
//         }
//         italyAudio.pause();
//         italyAudio.currentTime = 0;
//     });
// });

// // Spain
// const spainPolygons = document.querySelectorAll('.spain');
// let spainTooltip;
// const spainAudio = new Audio('sounds/spain.mp3');
// spainPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer';
//     polygon.addEventListener('mouseenter', function (event) {
//         spainPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         spainTooltip = document.createElement('div');
//         spainTooltip.className = 'tooltip';
//         spainTooltip.innerHTML = 'Spain';

//         document.body.appendChild(spainTooltip);

//         spainTooltip.style.left = `${event.clientX + 10}px`;
//         spainTooltip.style.top = `${event.clientY + 10}px`;
//         spainTooltip.style.display = 'block';

//         setTimeout(() => {
//             spainAudio.play();
//         }, 1000);
//     });

//     polygon.addEventListener('mouseleave', function () {
//         spainPolygons.forEach(p => {
//             p.style.fill = '#4e7fe0';
//             p.style.transition = '0.3s';
//         });

//         if (spainTooltip) {
//             spainTooltip.style.display = 'none';
//             document.body.removeChild(spainTooltip);
//         }
//         spainAudio.pause();
//         spainAudio.currentTime = 0;
//     });
// });

// // Netherlands
// const netherlandsPolygons = document.querySelectorAll('.netherlands');
// let netherlandsTooltip;
// const netherlandsAudio = new Audio('sounds/netherlands.mp3');
// netherlandsPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer';
//     polygon.addEventListener('mouseenter', function (event) {
//         netherlandsPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         netherlandsTooltip = document.createElement('div');
//         netherlandsTooltip.className = 'tooltip';
//         netherlandsTooltip.innerHTML = 'Netherlands';

//         document.body.appendChild(netherlandsTooltip);

//         netherlandsTooltip.style.left = `${event.clientX + 10}px`;
//         netherlandsTooltip.style.top = `${event.clientY + 10}px`;
//         netherlandsTooltip.style.display = 'block';

//         setTimeout(() => {
//             netherlandsAudio.play();
//         }, 1000);
//     });

//     polygon.addEventListener('mouseleave', function () {
//         netherlandsPolygons.forEach(p => {
//             p.style.fill = '#4e7fe0';
//             p.style.transition = '0.3s';
//         });

//         if (netherlandsTooltip) {
//             netherlandsTooltip.style.display = 'none';
//             document.body.removeChild(netherlandsTooltip);
//         }
//         netherlandsAudio.pause();
//         netherlandsAudio.currentTime = 0;
//     });
// });

// // Portugal
// const portugalPolygons = document.querySelectorAll('.portugal');
// let portugalTooltip;
// const portugalAudio = new Audio('sounds/portugal.mp3');
// portugalPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer';
//     polygon.addEventListener('mouseenter', function (event) {
//         portugalPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         portugalTooltip = document.createElement('div');
//         portugalTooltip.className = 'tooltip';
//         portugalTooltip.innerHTML = 'Portugal';

//         document.body.appendChild(portugalTooltip);

//         portugalTooltip.style.left = `${event.clientX + 10}px`;
//         portugalTooltip.style.top = `${event.clientY + 10}px`;
//         portugalTooltip.style.display = 'block';

//         setTimeout(() => {
//             portugalAudio.play();
//         }, 1000);
//     });

//     polygon.addEventListener('mouseleave', function () {
//         portugalPolygons.forEach(p => {
//             polygon.style.cursor = 'pointer';
//             p.style.fill = '#4e7fe0';
//             p.style.transition = '0.3s';
//         });

//         if (portugalTooltip) {
//             portugalTooltip.style.display = 'none';
//             document.body.removeChild(portugalTooltip);
//         }
//         portugalAudio.pause();
//         portugalAudio.currentTime = 0;
//     });
// });

// const russiaPolygons = document.querySelectorAll('.russia');
// let russiaTooltip;
// const russiaAudio = new Audio('sounds/russian.mp3');
// // added a variable called russiaAudio did this for every country
// let isRussiaAudioPlaying = false;
// // boolean to determine if audio is playing
// russiaPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer';
//     // styling the mouse so users know it's clickable
//     polygon.addEventListener('mouseenter', function (event) {
//         russiaPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//             // changing the color when hovered + transition
//         });

//         russiaTooltip = document.createElement('div');
//         russiaTooltip.className = 'tooltip';
//         russiaTooltip.innerHTML = 'Russia';
//         // added a tooltip so when country is hovered it shows the name of the country
//         document.body.appendChild(russiaTooltip);
//         // appending the tooltip

//         russiaTooltip.style.left = `${event.clientX + 10}px`;
//         russiaTooltip.style.top = `${event.clientY + 10}px`;
//         // positioning the tooltip so it's easy to read and the mouse will not be in the way
//         russiaTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         russiaPolygons.forEach(p => {
//             p.style.fill = '#4e7fe0';
//             p.style.transition = '0.3s';
//             // changing the color back when not hovered + transition
//         });

//         if (russiaTooltip) {
//             russiaTooltip.style.display = 'none';
//             document.body.removeChild(russiaTooltip);
//             // 
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isRussiaAudioPlaying) {
//             russiaAudio.pause();
//             russiaAudio.currentTime = 0;
//         } else {
//             russiaAudio.play();
//         }
//         isRussiaAudioPlaying = !isRussiaAudioPlaying;
//     });
//     // code added by ai to stop when clicked if played then pause and starting over 
// });

// // Italy
// const italyPolygons = document.querySelectorAll('.italy');
// let italyTooltip;
// const italyAudio = new Audio('sounds/Italy.mp3');
// let isItalyAudioPlaying = false;

// italyPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         italyPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         italyTooltip = document.createElement('div');
//         italyTooltip.className = 'tooltip';
//         italyTooltip.innerHTML = 'Italy';

//         document.body.appendChild(italyTooltip);

//         italyTooltip.style.left = `${event.clientX + 10}px`;
//         italyTooltip.style.top = `${event.clientY + 10}px`;
//         italyTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         italyPolygons.forEach(p => {
//             p.style.fill = '#fff';
//             p.style.transition = '0.3s';
//         });

//         if (italyTooltip) {
//             italyTooltip.style.display = 'none';
//             document.body.removeChild(italyTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isItalyAudioPlaying) {
//             italyAudio.pause();
//             italyAudio.currentTime = 0;
//         } else {
//             italyAudio.play();
//         }
//         isItalyAudioPlaying = !isItalyAudioPlaying;
//     });
// });


// // Spain
// const spainPolygons = document.querySelectorAll('.spain');
// let spainTooltip;
// const spainAudio = new Audio('sounds/spain.mp3');
// let isSpainAudioPlaying = false;

// spainPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         spainPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         spainTooltip = document.createElement('div');
//         spainTooltip.className = 'tooltip';
//         spainTooltip.innerHTML = 'Spain';

//         document.body.appendChild(spainTooltip);

//         spainTooltip.style.left = `${event.clientX + 10}px`;
//         spainTooltip.style.top = `${event.clientY + 10}px`;
//         spainTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         spainPolygons.forEach(p => {
//             p.style.fill = '#26527b';
//             p.style.transition = '0.3s';
//         });

//         if (spainTooltip) {
//             spainTooltip.style.display = 'none';
//             document.body.removeChild(spainTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isSpainAudioPlaying) {
//             spainAudio.pause();
//             spainAudio.currentTime = 0;
//         } else {
//             spainAudio.play();
//         }
//         isSpainAudioPlaying = !isSpainAudioPlaying;
//     });
// });

// // Netherlands
// const netherlandsPolygons = document.querySelectorAll('.netherlands');
// let netherlandsTooltip;
// const netherlandsAudio = new Audio('sounds/netherlands.mp3');
// let isNetherlandsAudioPlaying = false;

// netherlandsPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         netherlandsPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         netherlandsTooltip = document.createElement('div');
//         netherlandsTooltip.className = 'tooltip';
//         netherlandsTooltip.innerHTML = 'Netherlands';

//         document.body.appendChild(netherlandsTooltip);

//         netherlandsTooltip.style.left = `${event.clientX + 10}px`;
//         netherlandsTooltip.style.top = `${event.clientY + 10}px`;
//         netherlandsTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         netherlandsPolygons.forEach(p => {
//             p.style.fill = '#fff';
//             p.style.transition = '0.3s';
//         });

//         if (netherlandsTooltip) {
//             netherlandsTooltip.style.display = 'none';
//             document.body.removeChild(netherlandsTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isNetherlandsAudioPlaying) {
//             netherlandsAudio.pause();
//             netherlandsAudio.currentTime = 0;
//         } else {
//             netherlandsAudio.play();
//         }
//         isNetherlandsAudioPlaying = !isNetherlandsAudioPlaying;
//     });
// });

// // Portugal
// const portugalPolygons = document.querySelectorAll('.portugal');
// let portugalTooltip;
// const portugalAudio = new Audio('sounds/portugal.mp3');
// let isPortugalAudioPlaying = false;

// portugalPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         portugalPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         portugalTooltip = document.createElement('div');
//         portugalTooltip.className = 'tooltip';
//         portugalTooltip.innerHTML = 'Portugal';

//         document.body.appendChild(portugalTooltip);

//         portugalTooltip.style.left = `${event.clientX + 10}px`;
//         portugalTooltip.style.top = `${event.clientY + 10}px`;
//         portugalTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         portugalPolygons.forEach(p => {
//             p.style.fill = '#ff5349';
//             p.style.transition = '0.3s';
//         });

//         if (portugalTooltip) {
//             portugalTooltip.style.display = 'none';
//             document.body.removeChild(portugalTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isPortugalAudioPlaying) {
//             portugalAudio.pause();
//             portugalAudio.currentTime = 0;
//         } else {
//             portugalAudio.play();
//         }
//         isPortugalAudioPlaying = !isPortugalAudioPlaying;
//     });
// });

// // turkey
// const turkeyPolygons = document.querySelectorAll('.turkey');
// let turkeyTooltip;
// const turkeyAudio = new Audio('sounds/turkey.mp3');
// let isTurkeyAudioPlaying = false;

// turkeyPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         turkeyPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         turkeyTooltip = document.createElement('div');
//         turkeyTooltip.className = 'tooltip';
//         turkeyTooltip.innerHTML = 'Turkey';

//         document.body.appendChild(turkeyTooltip);

//         turkeyTooltip.style.left = `${event.clientX + 10}px`;
//         turkeyTooltip.style.top = `${event.clientY + 10}px`;
//         turkeyTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         turkeyPolygons.forEach(p => {
//             p.style.fill = '#fff';
//             p.style.transition = '0.3s';
//         });

//         if (turkeyTooltip) {
//             turkeyTooltip.style.display = 'none';
//             document.body.removeChild(turkeyTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isTurkeyAudioPlaying) {
//             turkeyAudio.pause();
//             turkeyAudio.currentTime = 0;
//         } else {
//             turkeyAudio.play();
//         }
//         isTurkeyAudioPlaying = !isTurkeyAudioPlaying;
//     });
// });

// // poland
// const polandPolygons = document.querySelectorAll('.poland');
// let polandTooltip;
// const polandAudio = new Audio('sounds/poland.mp3');
// let isPolandAudioPlaying = false;

// polandPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         polandPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         polandTooltip = document.createElement('div');
//         polandTooltip.className = 'tooltip';
//         polandTooltip.innerHTML = 'Poland';

//         document.body.appendChild(polandTooltip);

//         polandTooltip.style.left = `${event.clientX + 10}px`;
//         polandTooltip.style.top = `${event.clientY + 10}px`;
//         polandTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         polandPolygons.forEach(p => {
//             p.style.fill = '#ff5349';
//             p.style.transition = '0.3s';
//         });

//         if (polandTooltip) {
//             polandTooltip.style.display = 'none';
//             document.body.removeChild(polandTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isPolandAudioPlaying) {
//             polandAudio.pause();
//             polandAudio.currentTime = 0;
//         } else {
//             polandAudio.play();
//         }
//         isPolandAudioPlaying = !isPolandAudioPlaying;
//     });
// });

// // sweden
// const swedenPolygons = document.querySelectorAll('.sweden');
// let swedenTooltip;
// const swedenAudio = new Audio('sounds/sweden.mp3');
// let isSwedenAudioPlaying = false;

// swedenPolygons.forEach(polygon => {
//     polygon.style.cursor = 'pointer'; // Set cursor to pointer
//     polygon.addEventListener('mouseenter', function (event) {
//         swedenPolygons.forEach(p => {
//             p.style.fill = 'rgb(78, 77, 77)';
//             p.style.transition = '0.3s';
//         });

//         swedenTooltip = document.createElement('div');
//         swedenTooltip.className = 'tooltip';
//         swedenTooltip.innerHTML = 'Sweden';

//         document.body.appendChild(swedenTooltip);

//         swedenTooltip.style.left = `${event.clientX + 10}px`;
//         swedenTooltip.style.top = `${event.clientY + 10}px`;
//         swedenTooltip.style.display = 'block';
//     });

//     polygon.addEventListener('mouseleave', function () {
//         swedenPolygons.forEach(p => {
//             p.style.fill = '#18cdca';
//             p.style.transition = '0.3s';
//         });

//         if (swedenTooltip) {
//             swedenTooltip.style.display = 'none';
//             document.body.removeChild(swedenTooltip);
//         }
//     });

//     polygon.addEventListener('click', function () {
//         if (isSwedenAudioPlaying) {
//             swedenAudio.pause();
//             swedenAudio.currentTime = 0;
//         } else {
//             swedenAudio.play();
//         }
//         isSwedenAudioPlaying = !isSwedenAudioPlaying;
//     });
// });

