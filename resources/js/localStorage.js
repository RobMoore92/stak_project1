function saveToLocal() {
    var req1 = document.getElementById('req1').value;
    var req2 = document.getElementById('req2').value;
    var req3 = document.getElementById('req3').value;
    localStorage.setItem('req1', req1);
    localStorage.setItem('req2', req2);
    localStorage.setItem('req3', req3);
}

function requirements() {
    loadLocal();

}


function myFunction() {
    var x = document.getElementById("req_list");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";

    }
}

function loadLocal() {
    myFunction();
    var origin = document.getElementById('req_list');
    var req1 = localStorage.getItem("req1");
    var req2 = localStorage.getItem("req2");
    var req3 = localStorage.getItem("req3");
    var reqs = [req1, req2, req3];
    origin.innerHTML = '';
    if (reqs[i] !== '' ) {
        for (var i = 0; i < reqs.length; i++) {
            var list_item = document.createElement("li");
            list_item.classList.add('delete-list')
            list_item.innerHTML = reqs[i];
            origin.appendChild(list_item);

        }
    } else {
        var list_warning = document.createElement("p");
        list_warning.innerHTML = 'You have not added any requirements for this project';
        list_warning.classList.add('delete-list')
        origin.appendChild(list_warning);
    }
}
