
document.getElementById("tx-area").innerHTML = localStorage.getItem("storage");

function addTask() {
    let x = document.getElementById("txt-input").value;
    document.getElementById("tx-area").value += x + "\n";
    document.getElementById("txt-input").value = "";
    localStorage.setItem("storage", document.getElementById("tx-area").value);
}

function clearTask() {
    document.getElementById("tx-area").value = "";
    localStorage.removeItem("storage");
}