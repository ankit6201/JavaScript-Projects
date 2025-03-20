let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
 
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,8],
    [2,4,6],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn0 = true;
    enableBoxes()
    msgContainer.classList.add("hide")
}

  boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("event was clicked");
        if (turn0) {
            box.innerText = "O"
            turn0 = false
        }else{
            box.innerText = "X"
            turn0 = true
        }
        box.disabled = true
        checkWiner();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const ank = prompt("Enter Your Name")
const showWinner = (winner)=>{
msg.innerText = `Congtaulation ${ank} , Winner is  ${winner}`
msgContainer.classList.remove("hide")
disableBoxes();
}

const checkWiner = ()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText; 

        if (pos1val!="" && pos2val !="" && pos3val != "" ){
           if (pos1val===pos2val &pos2val=== pos3val & pos3val===pos1val) {
            console.log("Winner",pos1val);
            showWinner(pos1val);
            
           } 
        }
    }
}

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)

