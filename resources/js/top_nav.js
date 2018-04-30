function requirement() {
    var div = document.getElementById("insert_nav");
    var card = document.createElement("div");
    var h1 = document.createElement("ul");
    h1.classList.add("display-4")
    card.classList.add("card");
    card.classList.add("drop-down-card");
    card.innerHTML = 'test';
    card.appendChild(h1)
    div.appendChild(card);
}

function calendar() {
    var div = document.getElementById("insert_nav");
    div.innerHTML = '';
    newContent = document.createTextNode("calendar will go here and push content down");
    div.appendChild(newContent);
}

function tools() {
    var div = document.getElementById("insert_nav");
    div.innerHTML = '';
    newContent = document.createTextNode("tools will go here and push content down");
    div.appendChild(newContent);
}