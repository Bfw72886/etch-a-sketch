const container = document.querySelector("#container");
const inputContainerSize = document.querySelector("#inputContainerSize");

let edgeLength = 16;
let containerSize = 500;

inputContainerSize.addEventListener("keydown", (event) => {
    const keyname = event.key;

    if (keyname === "Enter") {
        containerSize = inputContainerSize.value;
        console.log("Containersize: " + containerSize);
        drawContainer();
    }
})

function drawPixel(edgeLengthInCubes) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    let sizeInCubes = edgeLengthInCubes * edgeLengthInCubes;
    let cubeHeight = (container.scrollHeight / edgeLengthInCubes) + "px";
    let cubeWidth = (container.scrollWidth / edgeLengthInCubes) + "px";

    for (let i = 0; i < sizeInCubes; i++) {
        const cube = document.createElement("div");
        cube.style.height = cubeHeight;
        cube.style.width = cubeWidth;
        console.log("Container height: " + container.scrollHeight);
        console.log("Cube height: " + cube.style.height);
        console.log("Container width: " + container.scrollWidth);
        console.log("Cube width: " + cube.style.width);
        container.appendChild(cube);
    }
}

function drawContainer(sizeInPixel = containerSize) {
    console.log("Container drawn");
    container.style.height = sizeInPixel + "px";
    container.style.width = sizeInPixel + "px";
    drawPixel(edgeLength);
} 


drawContainer();