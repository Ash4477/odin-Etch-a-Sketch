function createGrid() {
    const container = document.querySelector(".container");

    for (let i = 0; i < gridSize; i++) {
        const newSubContainer = document.createElement("div");
        newSubContainer.classList.add("sub-container");
        for (let j = 0; j< gridSize; j++) {
            const newDiv = document.createElement("div");
            newDiv.style = `width: ${boxSize}px; height: ${boxSize}px;`;
            newSubContainer.appendChild(newDiv);
        }
        container.appendChild(newSubContainer);
    }
}

const gridSize = 16;
const boxSize = 60-gridSize;
createGrid();