const container = document.querySelector("#container");
const inputContainerSize = document.querySelector("#inputContainerSize");
const inputEdgeLength = document.querySelector("#inputEdgeLength");
const inputEdgeLengthLimit = document.querySelector("#inputEdgeLengthLimit");

let edgeLength = inputEdgeLength.value;
let containerSize = inputContainerSize.value;
let edgeLengthLimit = inputEdgeLengthLimit.value;

inputContainerSize.addEventListener("focusout", () => {
    containerSize = inputContainerSize.value;
    drawContainer();
})

inputEdgeLength.addEventListener("focusout", () => {
    edgeLength = inputEdgeLength.value;
    if (edgeLength > edgeLengthLimit) {
        edgeLength = edgeLengthLimit;
    }
    drawContainer();
})

inputEdgeLengthLimit.addEventListener("focusout", () => edgeLengthLimit = inputEdgeLengthLimit.value);

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cube")) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
    }
});

function drawPixel(edgeLengthInCubes = edgeLength) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    let sizeInCubes = edgeLengthInCubes * edgeLengthInCubes;
    let cubeHeight = (container.scrollHeight / edgeLengthInCubes) + "px";
    let cubeWidth = (container.scrollWidth / edgeLengthInCubes) + "px";

    for (let i = 0; i < sizeInCubes; i++) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.style.height = cubeHeight;
        cube.style.width = cubeWidth;
        container.appendChild(cube);
    }
}

function drawContainer(sizeInPixel = containerSize) {
    container.style.height = sizeInPixel + "px";
    container.style.width = sizeInPixel + "px";
    drawPixel();
} 


drawContainer();