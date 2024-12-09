 function hide() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "inline") {
      x.style.display = "none";
    } else {
      x.style.display = "inline";
    }
  }
function validateForm() {
    let x = document.forms["formContact"]["name"].value
    if (x == "") {
        alert("Enter a name")
        return false
    }
    let y = document.forms["formContact"]["mail"].value
    if (y == "") {
        alert("Enter an email")
        return false
    }  
    let z = document.forms["formContact"]["comment"].value

    if (z == "") {
        alert("Enter a comment")
        return false
    }    

}