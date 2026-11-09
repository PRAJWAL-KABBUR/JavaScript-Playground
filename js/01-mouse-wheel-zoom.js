const zoomScreen = document.querySelector(".container");

let zoom = 1;
const zoomSpeed = 0.1;

document.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) 
    {
     zoom += zoomSpeed; // Scroll up to zoom in
    } else {
    zoom -= zoomSpeed; // Scroll down to zoom out
    }
    zoom = Math.min(Math.max(zoom, 0.5), 3);
    zoomScreen.style.transform = `scale(${zoom})`;
});
