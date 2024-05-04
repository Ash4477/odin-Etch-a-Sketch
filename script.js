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

// Default Settings
let gridSize = 16;
createGrid(gridSize);
const gridBoxes = document.querySelectorAll(".sub-container > div");
gridBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    })
});


// Adding Functionalities
const colorButton = document.querySelector("#color");
const resetButton = document.querySelector("#reset");
const sizeButton = document.querySelector("#size");
const showGridButton = document.querySelector("#grid-line-choice");

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

colorButton.addEventListener("click", () => {
    const color = (prompt("Enter a Color (e.g, orange, red, blue)")).trim();
    const gridBoxes = document.querySelectorAll(".sub-container > div");
    gridBoxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = color;
        })
    });
});

resetButton.addEventListener("click", () => {
    const gridBoxes = document.querySelectorAll(".sub-container > div");
    gridBoxes.forEach((box) => {
            box.style.backgroundColor = "white";       
    });
});

showGridButton.addEventListener("click", () => {
    if (showGridButton.textContent.trim() == "Show Grid") {
        showGridButton.textContent = "Hide Grid";
        const gridDivs = document.querySelectorAll(".container div");
        gridDivs.forEach((div) => {
            div.classList.add("grid-lines");
        });
    }

    else {
        showGridButton.textContent = "Show Grid";
        const gridDivs = document.querySelectorAll(".container div");
        gridDivs.forEach((div) => {
            div.classList.remove("grid-lines");
        });
    }
 
});


