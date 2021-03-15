const heart = "\u2764";


function onSearch () {
    let input = document.getElementsByClassName("form-control me-2")[0].value;

    if (!input) return null;

    alert("Du kannst doch alle Links sehen? Wonach suchst du, lol?");
    console.log("Du suchst nach einem Lebessinn oder?");
}

function onSuprise () {
    return window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0", "_blank");
}

function easterEgg () {
    console.log(heart.repeat(50)); 
    return window.open("https://chr3st5an.github.io/gedichtewolke/", "_blank");
}

function timeShift () {
    console.log("In die Falle bist du gelaufen, lol");
    return window.open("http://111111111111111111111111111111111111111111111111111111111111.com/", "_blank");
}
