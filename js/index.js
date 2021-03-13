function onSearch() {
    let input = document.getElementsByClassName("form-control me-2")[0].value;

    if (!input) return null;

    alert("Du kannst doch alle Links sehen? Wonach suchst du, lol?")
}

function onSuprise () {
    return window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0", "_blank");
}