var squares = document.querySelectorAll("td");
var reStart = document.querySelector("#restart");

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

reStart.addEventListener("click", clearBoard);

function changeMarker() {
  if (this.textContent == "") {
    this.textContent = "X";
  } else if (this.textContent == "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker);
}

console.log("connected");
