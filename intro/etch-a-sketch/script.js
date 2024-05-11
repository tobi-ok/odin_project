const GRID_SIZE = 16

const container = document.createElement("div");
container.setAttribute("class", 'container');
container.style.display = "flex"; 
container.style.height = "100%";
//container.style.flexWrap = "Wrap";
container.style.flexDirection = "column";

for (let y = 0; y < GRID_SIZE; y++){
    const rowContainer = document.createElement("div");
    rowContainer.style.backgroundColor = "Orange";
    rowContainer.style.height = "45px";
    rowContainer.style.display = "flex";
    
    for (let x = 0; x < GRID_SIZE*2; x++) {
        const newDiv = document.createElement('div');
        newDiv.style.flex = "1"
        //newDiv.style.width = `${parseInt(rowContainer.style.width)/GRID_SIZE}px`;
        newDiv.style.backgroundColor = "Pink";

        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black"          
        })

        rowContainer.appendChild(newDiv)
    }

    container.appendChild(rowContainer)
}

document.body.appendChild(container)