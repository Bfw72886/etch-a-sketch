const container = document.querySelector("#container");

let x = 16;

function drawCanvas(size) {
    let total = x * x;
    let pixelHeight = (container.scrollHeight / size) + "px";
    let pixelWidth = (container.scrollWidth / size) + "px";

    for (let i = 0; i < total; i++) {
        const pixel = document.createElement("div");
        pixel.style.height = pixelHeight;
        pixel.style.width = pixelWidth;
        console.log("Container height: " + container.scrollHeight);
        console.log("Pixel height: " + pixel.style.height);
        console.log("Container width: " + container.scrollWidth);
        console.log("Pixel width: " + pixel.style.width);
        container.appendChild(pixel);
    }
}

drawCanvas(x);