// const button = document.getElementById("button");
// const outputdiv = document.getElementById('output')
// button.addEventListener("click", modifyText);

// function modifyText() {
//     let img = document.createElement('img');
//     img.src = 'cat.jpeg'
//     img.width = '150px'
//     outputdiv.appendChild(img);
//     console.log('image added')
// }
// function modifyText() {
//     document.getElementById("output").style.display = "block";
//     console.log('it works');
// }
// //////////////////////////////////////////////////////
// excercise 3
// //////////////////////////////////////////////////////
let button = document.getElementById("button")
button.addEventListener("click", myfunction)

function myfunction() {
    let u = Math.floor((Math.random() * 400) + 100);
    let y = Math.floor((Math.random() * 500) + 50);
    var x = document.createElement("img");
    x.setAttribute("src", "http://placekitten.com/" + y + '/' + u);
    x.setAttribute("alt", "kitty");
    document.body.appendChild(x);
}
