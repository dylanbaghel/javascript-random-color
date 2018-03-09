
function randomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function randomHexColor() {
    var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hex[randomNumber(hex.length)];
    }
    return color;
}

function randomRgbColor() {
    return "rgb(" + randomNumber(256) + "," + randomNumber(256) + "," + randomNumber(256) + ")"
}


var rgb = document.querySelector("#rgb");
var hexa = document.querySelector("#hex");
var color = document.querySelector("#color");

// var lis = document.querySelectorAll("li");
// for (var i = 0; i < lis.length; i++) {
//     lis[i].addEventListener("click", function() {
//         this.style.color = randomHexColor();
//     });
// }

rgb.addEventListener("click", function() {
    var randomColor = randomRgbColor();
    document.querySelector("body").style.background = randomColor;
    color.textContent = randomColor;
});

hexa.addEventListener("click", function() {
    var randomColor = randomHexColor();
    document.querySelector("body").style.background = randomColor;
    color.textContent = randomColor;
});
