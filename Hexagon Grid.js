/* Hexagon Grid */

// testtest3

window.onload = drawHexLines;
document.getElementById('ZoomIn').addEventListener('click', ZoomInFunction);
document.getElementById('ZoomOut').addEventListener('click', ZoomOutFunction);
document.getElementById('ZoomIn').addEventListener('click', drawHexLines);
document.getElementById('ZoomOut').addEventListener('click', drawHexLines);
document.getElementById('HexGridCanvasDiv').addEventListener('click', drawHexLines);

const numberOfPlayers = document.getElementById('NumberOfPlayers').selectedIndex + 1;
const numberOfTiles = numberOfPlayers * 7 + 7;
let size = 40;
const mapWidth = numberOfTiles;


// Zoom
function ZoomInFunction() {
    while (size <= 100) {
        size = size + 5;
        return size;
    }
}

function ZoomOutFunction() {
    while (size >= 10) {
        size = size - 5;
        return size;
    }
}

// draw Grid
/*
function drawHexGrid() {
    let Xcenter = 0;
    let Ycenter = 0;
    const numberOfRows = 1;
    const numberOfColumns = 1;
    const boardCoord = [];
    let q = 0;
    let r = 0;

    for (q = 0; q <= numberOfColumns - 1; q++) {
        for (r = 0; r <= numberOfRows - 1; r++) {
            if (r % 2 === 0) {
                Xcenter = ((2 * size) * (3 / 4) * (q + 1) * 2 + ((2 * size) * (3 / 4)));
            } else {
                Xcenter = ((2 * size) * (3 / 4) * (q + 1) * 2);
            }
            //         if (q % 2 === 0) {
            Ycenter = (Math.sqrt(3) * size * (r + 1) * 0.5);
            //         } else {  Ycenter = (Math.sqrt(3) * size * (r+1));
            //        


            boardCoord.push([q, r]);
            boardY.push(Ycenter);
            console.log(boardCoord);
            console.log(Ycenter);
            boardY.forEach(drawHexLines(Ycenter[r]));
            
        }
        
    }
    
}
*/

// draw Hex
function drawHexLines(canvasID) {
    
    canvasID = document.getElementById('HexGridCanvas');
    canvasID.width = 800;
    canvasID.height = 800;
    const ctx = canvasID.getContext('2d');
    const numberOfSides = 6;
    let Xcenter = 0;
    let Ycenter = 0;
    const numberOfRows = 2;
    const numberOfColumns = 2;
    const boardCoord = [];
    const hexWidth = (2 * size) * (3 / 4);


    // var mousex = event.offsetX;
    // var mousey = event.offsetY;


    // var x = size * Math.sqrt(3) * (Xcenter + Ycenter/2);
    // var y = size * 3.0 / 2 * Ycenter;

    
    for (let q = 0; q <= numberOfColumns - 1; q++) {
        for (let r = 0; r <= numberOfRows - 1; r++) {
            if (r % 2 === 0) {
                Xcenter = (hexWidth * (q + 1) * 2 + hexWidth);
            } else {
                Xcenter = (hexWidth * (q + 1) * 2);
            }
            //         if (q % 2 === 0) {
            Ycenter = (Math.sqrt(3) * size * (r + 1) * 0.5);
            //         } else {  Ycenter = (Math.sqrt(3) * size * (r+1));
            //         }


            ctx.beginPath();
            ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));          

            for (let i = 1; i <= numberOfSides; i++) {
                ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides)); 
            }
            ctx.strokeStyle = '#000000';

            /*
var xCoordHex1 = Xcenter + size * Math.cos(1 * 2 * Math.PI / 6);
var xCoordHex2 = Xcenter + size * Math.cos(3 * 2 * Math.PI / 6);
var yCoordHex1 = Ycenter + size * Math.sin(2 * 2 * Math.PI / 6);
var yCoordHex2 = Ycenter + size * Math.sin(4 * 2 * Math.PI / 6);
if (xCoordHex2 < mousex < xCoordHex1 || yCoordHex2 < mousey < yCoordHex1) {
    ctx.strokeStyle = "#ff00ff";
} else {
}
*/
            /*
console.log(xCoordHex2);
console.log(mousex);
console.log(xCoordHex1);
console.log(yCoordHex2);
console.log(mousey);
console.log(yCoordHex1);
*/

            ctx.lineWidth = 1;
            ctx.stroke();
            console.log(Ycenter);

            /*
// Add q & r as coordinates
boardCoord.push([r, q]);
console.log(boardCoord);
*/
        }
    }
}

/*
function MouseClick() {

    
    if (xCoordHex2 > mousex > xCoordHex1 || yCoordHex2 > mousey > yCoordHex1) {
        ctx.strokeStyle = "green";
    } else {
        ctx.strokeStyle = "#000000";
    }
    
}

*/


