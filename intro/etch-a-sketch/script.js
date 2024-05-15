const DEFAULT_GRID_SIZE = 16

document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.flexDirection = "column";

const pageTitle = document.createElement("div");
pageTitle.textContent = "Etch-A-Sketch";
pageTitle.style.textAlign = "center";
pageTitle.style.fontWeight = "bolder";
pageTitle.style.fontSize = "50px";
pageTitle.width = "100%";

document.body.appendChild(pageTitle);

function createNewGrid(customGridSize){
    let container = document.querySelector(".container") 
    if (container){
        while (container.hasChildNodes()){
            container.removeChild(container.lastChild)
        }
    } else {
        container = document.createElement("div");
        container.setAttribute("class", 'container');
        container.style.display = "flex";
        container.style.height = "960px";
        container.style.width = "960px";
        container.style.flexDirection = "column";
        container.style.border = "5px solid black";
    }

    let gridSize = customGridSize ? (customGridSize) : DEFAULT_GRID_SIZE

    for (let y = 0; y < gridSize; y++){
        const rowContainer = document.createElement("div");
        rowContainer.style.flex = "1 1 45px";
        rowContainer.style.display = "flex";
        
        for (let x = 0; x < gridSize*1.5; x++) {
            const newDiv = document.createElement('div');
            newDiv.style.flex = "1"

            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "black"          
            })

            rowContainer.appendChild(newDiv)
        }

        container.appendChild(rowContainer)
    }

    document.body.appendChild(container)
}

const newGridBtn = document.createElement("button");
newGridBtn.textContent = "New Grid";
newGridBtn.style.margin = "10px 0px";

newGridBtn.addEventListener("click", () => {
    const newGridSize = prompt("Enter new grid size (x): ") 
    createNewGrid(newGridSize)
})

document.body.appendChild(newGridBtn);