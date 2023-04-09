// RANDOM ICONITE

const balonIcon = document.querySelector("#ballon-random-icon");
const focIcon = document.querySelector("#fire-random-icon");
const flagIcon = document.querySelector("#flag-random-icon");
const casaIcon = document.querySelector("#casa-random-icon");
const mouseIcon = document.querySelector("#mouse-random-icon");
const creionIcon = document.querySelector("#creion-random-icon");
const maicaIcon = document.querySelector("#maica-random-icon");
const sapunIcon = document.querySelector("#sapun-random-icon");
const tenisIcon = document.querySelector("#tenis-random-icon");
const umbrelaIcon = document.querySelector("#umbrela-random-icon");

let randomIcons = [balonIcon, focIcon, flagIcon, casaIcon, mouseIcon, creionIcon, maicaIcon, sapunIcon, tenisIcon, umbrelaIcon];

// Pozitii | left | top | rotate |

const position01 = [100, 605];
const position02 = [242, 450];
const position03 = [306, 664];
const position04 = [497, 564];
const position05 = [652, 673];
const position06 = [826, 679];
const position07 = [990, 562];
const position08 = [1141, 676];
const position09 = [1252, 445];
const position10 = [1347, 600];

let coordinates = [position01, position02, position03, position04, position05, position06, position07, position08, position09, position10];

let numOfIcons = randomIcons.length;

for(let i = 0; i < numOfIcons; i++)
{
  assignPosition();
}

function assignPosition()
{
  let numOfIcons = randomIcons.length;
  let numOfPositions = coordinates.length;
  let randomIconNum = Math.floor(Math.random() * numOfIcons);
  let randomPositionNum = Math.floor(Math.random() * numOfPositions);

  randomIcons[randomIconNum].style.left = `${coordinates[randomPositionNum][0]}px`;
  randomIcons[randomIconNum].style.top = `${coordinates[randomPositionNum][1]}px`;
  randomIcons[randomIconNum].style.display = "inline";

  randomIcons.splice(randomIconNum, 1);
  coordinates.splice(randomPositionNum, 1);

}






  
// SCROLL LA CATEGORII
const container = document.querySelector('.category-scrollable');

let isMouseDown = false; 
let startX; 
let scrollLeft; 

container.addEventListener('mousedown', (event) => {
  isMouseDown = true; 
  startX = event.clientX; 
  scrollLeft = container.scrollLeft; 
});

container.addEventListener('mouseup', () => {
  isMouseDown = false;
});

container.addEventListener('mousemove', (event) => {
  if (!isMouseDown) return;

  const dragX = event.clientX - startX;

  container.scrollLeft = scrollLeft - dragX;
});