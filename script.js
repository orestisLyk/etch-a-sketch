const mainContainer = document.querySelector(".main-container");

let DimensionInBlocks = 16;

//possibly redundant
// function blockStyle(block,stringColor) {
//     block.style.backgroundColor = stringColor;
// }

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