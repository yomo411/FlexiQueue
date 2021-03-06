window.onload = function () {
    for (var i = 0; i < 7; i++) {
        getDate(i);
    }

    var time = "11.00am";
    for (var i = 0; i <= 11; i++) {
        var node = document.createElement("option");                 // Create a <option> node
        if (i == 0) {
            time = "12.00pm";
        }
        else if (i == 12) {
            time = i + ".00am";
        }
        else {
            time = i + ".00pm"
        }
        var textnode = document.createTextNode(time);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <option>
        document.getElementById("time").appendChild(node);
    }
}

function getDate(current) {
    var today = new Date();
    var date = (today.getDate() + current) + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var node = document.createElement("option");                 // Create a <option> node
    var textnode = document.createTextNode(date);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <option>
    document.getElementById("date").appendChild(node);
};
