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

createGrid(2);