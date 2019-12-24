// function startBackground() {
//     var today = new Date();
//     var h = today.getHours();

//     if (h <= 10 && h >= 6) {

//     }
//     else if (h > 10 && h <= 18) {

//     }
//     else if (h > 18 || h < 6) {

//     }
// }

function Datum() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toDateString();
}
Datum();

function Vreme() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('timeid').innerHTML =
        h + ":" + m;
    var t = setTimeout(Vreme, 60000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // dodati 0 ako je broj < 10
    return i;
}
Vreme();

function welcome() {
    var today = new Date();
    var h = today.getHours();
    var element = document.getElementById("welcomeText");
    element.style.textAlign = "center";
    element.style.marginTop = "5%";
    element.style.fontSize = "120px";
    element.style.color = "white";
    element.style.textShadow = "3px 3px 8px rgb(119, 15, 15)";

    if (h >= 6 && h <= 10) {
        document.getElementById('welcomeText').innerHTML = "Dobro jutro!";
        document.body.background = "img/morning.jpg";
    }
    else if (h > 10 && h <= 18) {
        document.getElementById('welcomeText').innerHTML = "Dobar dan!";
        document.body.background = "img/day.jpg";
    }
    else if (h > 18 || h < 6) {
        document.getElementById('welcomeText').innerHTML = "Dobro veče!";
        document.body.background = "img/night.jpg";
    }
}
welcome();

$(".textFade").hide().fadeIn(3000);

$("#img1").click(function () {
    $("#text1").removeClass("hidden");
});
