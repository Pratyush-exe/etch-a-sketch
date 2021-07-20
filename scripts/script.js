let gridContainer = document.getElementById("grid-container");
let show = document.getElementById("scroll-button");
let slider = document.getElementById("slider");
let random = false;
let random_button = document.getElementById("random-button");
let erase = false;
let erase_button = document.getElementById("erase-button");
let black_button = document.getElementById("black-button");
let reset_button = document.getElementById("reset-button");

function changeColor(e) {
    e.target.style.backgroundColor =  `rgb(${0}, ${0}, ${0})`;
    if(random==true){
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
    if(erase==true){
        e.target.style.backgroundColor = `rgb(${200}, ${200}, ${200})`;
    }
}

function makeGrid(size=16) {
    let child = gridContainer.lastElementChild;
    while(child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
    gridContainer.style.display="grid";
    let columns = "";
    for(let i = 0; i < size; i++) {
        columns = columns + (512/size).toString() + "px ";
    }

    gridContainer.style.gridTemplateColumns = columns;
    for(let i = 0;i < size*size; i++) {
        const gridBox = document.createElement('div');
        gridBox.classList = "grid-box";
        gridBox.addEventListener('mouseover', changeColor);
        gridBox.style.width = gridBox.style.height = 512/size;
        gridContainer.appendChild(gridBox);
    }
}

random_button.addEventListener('click', function() {
    if(random==false){random = true; erase = false;}
    else{random = false;}
})

erase_button.addEventListener('click', function() {
    if(erase==false){erase = true; random = false;}
    else{erase = false;}
})

black_button.addEventListener('click', function() {
    erase = false;
    random = false;
})

reset_button.addEventListener('click', function() {
    makeGrid(Math.pow(2,slider.value-1));
})

makeGrid();
show.addEventListener('click', function() {
    makeGrid(Math.pow(2,slider.value-1));
})