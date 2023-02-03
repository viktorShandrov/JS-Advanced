const [...buttons] = document.querySelectorAll("div");
let turns = 0;
for (const button of buttons) {
    button.addEventListener("click", makeChoice);
    button.setAttribute("isfilled", "false");
}



function makeChoice(event) {
    if (event.target.getAttribute("isfilled") !== "true") {

        event.target.setAttribute("isfilled", "true")
        turns += 1;
        const newFigure = document.createElement("img");
        
        if (turns % 2 === 0) {
            //circle's turn
            event.target.setAttribute("type", "cirlce")
            
            newFigure.src = "/tic-tac-toe/images/circle.jpg";
            event.target.appendChild(newFigure);
        } else {
            //crossTurn
            
            event.target.setAttribute("type", "cross")
            newFigure.src = "/tic-tac-toe/images/cross.jpg";
            event.target.appendChild(newFigure);
        }
    }
}