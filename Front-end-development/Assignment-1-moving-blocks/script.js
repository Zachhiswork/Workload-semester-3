const boxes = document.querySelectorAll(".box");
// To keep track of the box being dragged
let draggedBox = null;

// give the boxes the function of actually being draggable
boxes.forEach((box, index) => {
    box.draggable = true;
    // the start of dragging
    box.addEventListener("dragstart", (e) => {
        draggedBox = box;
        box.classList.add("dragging");
    });
    // function of the drag being over
    box.addEventListener("dragend", () => {
        draggedBox = null;
        box.classList.remove("dragging");
    });
    // letting the function now that it's hovering over an 'potential' drop box
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    // hightlighting the potential drop box with the hovered feature
    box.addEventListener("dragenter", (e) => {
        e.preventDefault();
        box.classList.add("hovered");
    });

    // leaving an potential drop box removing the hovering feature
    box.addEventListener("dragleave", () => {
        box.classList.remove("hovered");
    });

    box.addEventListener("drop", () => {
        if (draggedBox) {
            // Swap the colors between the dragged box and the target box
            const tempColor = box.style.backgroundColor;
            box.style.backgroundColor = draggedBox.style.backgroundColor;
            draggedBox.style.backgroundColor = tempColor;
            // removing the hovered as the different color actually landed
            box.classList.remove("hovered");
        }
    });

    // give every box predefined colors
    const predefinedColors = ["#472731", "#282130", "#24788F", "#D3885E", "beige", "#F18A85", "E73C37", "#BFB0A0"];
    if (index < predefinedColors.length) {
        box.style.backgroundColor = predefinedColors[index];
    }
});


// youtube video that helped/inspired me https://www.youtube.com/watch?v=vJn5_SytV_U&ab_channel=CodingLab