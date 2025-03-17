let buttons = document.querySelectorAll('.picker');
let body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        console.log(e);
        
        if (e.target.id == "grey") {
            body.style.backgroundColor = "grey";
        } else if (e.target.id == "orange") {
            body.style.backgroundColor = "orange";
        } else if (e.target.id == "red") {
            body.style.backgroundColor = "red";
        } else if (e.target.id == "yellow") {
            body.style.backgroundColor = "yellow";
        } else if (e.target.id == "green") {
            body.style.backgroundColor = "green";
        }
    });
});

