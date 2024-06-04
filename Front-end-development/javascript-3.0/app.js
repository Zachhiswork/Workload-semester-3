(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    // forEach is used to find out the button name and data inserted 
    // then i want to take the buttons value (if) the button was pressed
    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function (e) {
        // if the value on screen is empty it will show nothing
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            // eval returns a string object containing on the screen and will return the mathematical solution 
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    // if the clear button is clicked it will show nothing
    clear.addEventListener('click', function (e) {
        screen.value = "";
    })

})();