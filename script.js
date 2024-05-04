function createGrid(gridSize) {
    const container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++) {
        const newSubContainer = document.createElement("div");
        newSubContainer.classList.add("sub-container");
        for (let j = 0; j< gridSize; j++) {
            const newDiv = document.createElement("div");
            newSubContainer.appendChild(newDiv);
        }
        container.appendChild(newSubContainer);
    }
}

function removeGrid() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
}

let gridSize = 16;

createGrid(gridSize);

const colorButton = document.querySelector("#color");
const resetButton = document.querySelector("#reset");
const sizeButton = document.querySelector("#size");

sizeButton.addEventListener("click", () => {
    while (true){
        gridSize = (Number) (prompt("Enter Grid Size (1-100)"));
        if (gridSize < 1 || gridSize > 100) {
            alert("Invalid Size");
        }
        else {
            removeGrid();
            createGrid(gridSize);
            return;            
        }
    }

});

