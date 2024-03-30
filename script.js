let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("reset");
let msgContainer = document.querySelector(".msg-ctr")
let msg = document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const checkWinner = () => {
    for(let pattern of winPatterns) {
        pos1Val = boxes[pattern[0].innerText]
        pos2Val = boxes[pattern[1].innerText]
        pos3Val = boxes[pattern[2].innerText]
        
        if(pos1Val != "" && pos2Val !="" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("Winner!");
            showWinner();
            }
    }
}
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}.`;
    msgContainer.classList.remove("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

reset.addEventListener("click", () => {
        boxes.forEach((box) => {
            document.getElementsByClassName(".box").innerText = " ";
        });
});
