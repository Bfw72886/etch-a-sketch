const container = document.querySelector("#container");
const inputContainerSize = document.querySelector("#inputContainerSize");
const inputEdgeLength = document.querySelector("#inputEdgeLength");
let cubes;

let edgeLength = 16;
let containerSize = 500;

function getCubes() {
    return document.querySelectorAll(".cube");
}

inputContainerSize.addEventListener("keydown", (event) => {
    const keyname = event.key;

    if (keyname === "Enter") {
        containerSize = inputContainerSize.value;
        console.log("Containersize: " + containerSize);
        drawContainer();
    }
});

inputEdgeLength.addEventListener("keydown", (event) => {
    const keyname = event.key;

    if (keyname === "Enter") {
        edgeLength = inputEdgeLength.value;
        if (edgeLength > 100) {
            edgeLength = 100;
        }
        console.log("Edgelength: " + edgeLength);
        drawContainer();
    }
});

container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cube")) {
        event.target.classList.add("hovered");
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
        console.log("Container height: " + container.scrollHeight);
        console.log("Cube height: " + cube.style.height);
        console.log("Container width: " + container.scrollWidth);
        console.log("Cube width: " + cube.style.width);
        container.appendChild(cube);
    }

    cubes = getCubes();
}

function drawContainer(sizeInPixel = containerSize) {
    console.log("Container drawn");
    container.style.height = sizeInPixel + "px";
    container.style.width = sizeInPixel + "px";
    drawPixel();
} 


drawContainer();