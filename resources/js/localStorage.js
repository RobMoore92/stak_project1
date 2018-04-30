function saveToLocal() {
    var req1 = document.getElementById('req1').value;
    var req2 = document.getElementById('req2').value;
    var req3 = document.getElementById('req3').value;
    localStorage.setItem('req1', req1);
    localStorage.setItem('req2', req2);
    localStorage.setItem('req3', req3);
}

function requirements() {
    loadReqs();
}

function calendar() {
    var x = document.getElementById("calendar_hide");
    var y = document.getElementById('req_list');
            y.style.display = "none";
    if (x.style.display === "block") {
        x.style.display = "none";       

    } else {
        x.style.display = "block";

    }
}


function toggler() {
    var x = document.getElementById("req_list");
    var y = document.getElementById("calendar_hide");
    y.style.display = "none"
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}

function loadReqs() {
   toggler();
    var origin = document.getElementById('req_list');
    var req1 = localStorage.getItem("req1");
    var req2 = localStorage.getItem("req2");
    var req3 = localStorage.getItem("req3");
    var reqs = [req1, req2, req3];
    origin.innerHTML = '';
    if (typeof reqs[0] === undefined){
        var no_items = document.createElement(li);
        no_items.innerHTML = 'You have no requirements set';
        origin.appendChild(no_items);
    } else {
    for (var i = 0; i < reqs.length; i++) {
        if (reqs[i] !== '') {
            var list_item = document.createElement("li");
            list_item.classList.add('delete-list')
            list_item.innerHTML = reqs[i];
            origin.appendChild(list_item);

        } else {
            var item_empty = document.createElement("li");
            item_empty.innerHTML = '-';
            origin.appendChild(item_empty);
        }
    }}
}

function saveProject() {
    var title = document.getElementById('title').value;
    var due_date = document.getElementById('due_date').value
    localStorage.setItem('title', title);
   localStorage.setItem('due_date', due_date);
}

function loadReference() {
    var test = window.getSelection().toString();
    var keyname = 'value' + keyname.localStorage.length;
    localStorage.setItem(keyname, 'test');
    alert(test);

}
