const body = document.querySelector("body");
const mainContainer = document.querySelector(".main-container");
const startBtn = document.querySelector("#start-button");
const slider = document.querySelector("#dimension-input");
const dimensionDisplay = document.querySelector("#dimension-display");

let dimensionInBlocks = 16;
const maxDimension = 64;
let isMouseDown = false;

//on load
slider.min = 0;
slider.max = maxDimension;

body.addEventListener("click",clickHandler);
body.addEventListener("mousedown",() => {isMouseDown = true;})
body.addEventListener("mouseup",() => {isMouseDown = false;})
mainContainer.addEventListener("mouseover",etcher);


//possibly redundant
// function blockStyle(block,stringColor) {
//     block.style.backgroundColor = stringColor;
// }

function clickHandler(click) {
    const id = click.target.id;
    if(id === "start-button") {
        //switch following line to equivalent function that doesn't use innerhtml(for security)
        mainContainer.innerHTML = "";
        startBtn.textContent = "Refresh"
        createBlockMatrix(dimensionInBlocks);
    } else if (id === "dimension-input") {
        dimensionInBlocks = slider.value;
        dimensionDisplay.textContent = dimensionInBlocks; 
    }
}


function etcher(event) {
    const targetClasslist = event.target.classList;
    if( targetClasslist.contains("block") && isMouseDown && !targetClasslist.contains("darkened-twice")) {
        if(targetClasslist.contains("darkened")) {
            targetClasslist.add("darkened-twice");
        } else {
            targetClasslist.add("darkened");
        };
    };
}

function createBlockRow(numberOfBlocks) {
    let div;
    const lineContainer = document.createElement("div");
    lineContainer.classList.add("block-row");
    for(let i = 0; i < numberOfBlocks; i++) {
        div = document.createElement("div");
        div.flex = "1";
        div.classList.add("block");
        lineContainer.appendChild(div);
    }
    return lineContainer;
}

function createBlockMatrix(numberOfBlocks) {
    for(let i = 0; i < numberOfBlocks; i++) {
        mainContainer.appendChild(createBlockRow(numberOfBlocks))
    }
    return true;
}