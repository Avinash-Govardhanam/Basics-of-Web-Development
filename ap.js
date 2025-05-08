//  A simple interactions using javascript
function showAlert() {
    alert("Submitted successfully");
}
// create an button element
let button = document.createElement("button");
button.innerText = "Submit";
// shows the alert message when clicked
button.addEventListener("click", showAlert);
document.body.appendChild(button);