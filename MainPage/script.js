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




// CARUSELE :(

const allSlidersDiv = document.querySelector('.carousel-sliders');
const generalSlide = document.querySelector('.carousel-slide');
const carouselIndicatorsDiv = document.querySelector('.carousel-indicators');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const carouselFlex = document.querySelector(".carousel-flex");

const allActualSliders = allSlidersDiv.children;
let totalShownSlides = 3;
let currentIndicator = 1;


// Instant Responsive ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Seteaza indicatoarele

set_Indicators()

// Seteaza opacitatea la sageti

apply_inactive_Arrow();

// Seteaza widthul la carusel si la indicator

set_carousel_dimensions();

// Event Listener la sageti

add_eventListener_Arrows();

// Instant Responsive ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

add_eventListener_Indicators();

function update_Indicator()
{
  remove_currentIndicator();
  carouselIndicators[currentIndicator-1].classList.add('current-indicator');
}
function add_eventListener_Indicators()
{
    carouselIndicators.forEach(indicator =>
    {
      indicator.addEventListener('click', (e) =>
      {
        let pastCurrentIndicatorIndex = get_currentIndicator();
        remove_currentIndicator()
        indicator.classList.add('current-indicator');
        let clickedCurrentIndicatorIndex = get_currentIndicator();
        let neededScrolls = pastCurrentIndicatorIndex - clickedCurrentIndicatorIndex;

        scroll(neededScrolls);
      })
    })
}

function scroll(neededScrolls)
{
  let scrollVolume;

  allShowedSpace = allSlidersDiv.offsetWidth;
  let slidesGap = get_slidesGap()

  allShowedSpace = parseInt(allShowedSpace);

  scrollVolume = allShowedSpace * Math.abs(neededScrolls) + slidesGap;

  console.log(scrollVolume)
  
  if(neededScrolls < 0)
  {
    allSlidersDiv.scrollLeft += scrollVolume;
  }
  if(neededScrolls > 0)
  {
    allSlidersDiv.scrollLeft -= scrollVolume;
  }
  let currentIndicatorIndex = get_currentIndicator();
  currentIndicatorIndex += 1;

  currentIndicator = currentIndicatorIndex;
  apply_inactive_Arrow();
}

function get_currentIndicator()
{

  let currentIndicatorIndex = 0;
  let temp = 0;

  for(let i = 0; i < carouselIndicators.length; i++)
  {
    if(!carouselIndicators[i].classList.contains('current-indicator'))
    {
      temp += 1;
    }
    else
    {
      currentIndicatorIndex = temp;
    }
  }

  return currentIndicatorIndex;
}
function remove_currentIndicator()
{
  for(let i = 0; i < carouselIndicators.length; i++)
  {
    if(carouselIndicators[i].classList.contains('current-indicator'))
    {
      carouselIndicators[i].classList.remove('current-indicator');
    }
  }
}
function set_Indicators()
{
  let numofIndicatorsNeeded = get_numOfIndicator_needed();
  

  for(let i = 0; i < numofIndicatorsNeeded; i++)
  {
    carouselIndicators[i].classList.add('show-indicator');
  }
  let totalActiveIndicators = calc_all_active_Indicators()
  
  carouselIndicators[0].classList.add('first-indicator');
  carouselIndicators[totalActiveIndicators-1].classList.add('last-indicator');
}

function add_eventListener_Arrows()
{
  rightArrow.addEventListener('click', (e) =>
  {
    scroll(-1);
    currentIndicator += 1;
    apply_inactive_Arrow();
    update_Indicator();
  })

  leftArrow.addEventListener('click', (e) =>
  {
    scroll(1);
    currentIndicator -= 1;
    apply_inactive_Arrow();
    update_Indicator();
  })
}

function set_carousel_dimensions()
{
  allShowedSpace = calc_shownSliders_width();
  carouselFlex.style.gridTemplateColumns = `1fr ${allShowedSpace}px 1fr`;
  carouselIndicatorsDiv.style.width = `${allShowedSpace}px`;
}

// Functii

function get_numOfIndicator_needed()
{
  let numofSlides = allActualSliders.length + 1;
  let numofIndicatorsNeeded = Math.ceil(numofSlides / totalShownSlides);
  console.log(numofIndicatorsNeeded);
  return numofIndicatorsNeeded;
}

function calc_all_active_Indicators()
{
  let totalActiveIndicators = 0;

  for(let i = 0; i < carouselIndicators.length; i++)
  {
    if(carouselIndicators[i].classList.contains('show-indicator'))
    {
      totalActiveIndicators += 1;
    }
  }

  return totalActiveIndicators;
}

function apply_inactive_Arrow()
{
  let totalActiveIndicators = calc_all_active_Indicators();

  if(currentIndicator <= 1)
  {
    leftArrow.classList.add('carousel-arrow-inactive');
  }
  else
  {
    leftArrow.classList.remove('carousel-arrow-inactive');
  }
  if(currentIndicator >= totalActiveIndicators)
  {
    rightArrow.classList.add('carousel-arrow-inactive');
  }
  else
  {
    rightArrow.classList.remove('carousel-arrow-inactive');
  }

}

function calc_shownSliders_width()
{
  let generalSlideWidth = generalSlide.offsetWidth;
  let allShowedSpace;
  let generalGap = get_slidesGap();

  allShowedSpace = (generalSlideWidth * totalShownSlides) + generalGap * (totalShownSlides - 1);
  
  return allShowedSpace;
}

function get_slidesGap()
{
  let firstSlide = allActualSliders[0];
  let secondSlide = allActualSliders[1];
  let generalGap = secondSlide.offsetLeft - (firstSlide.offsetLeft + firstSlide.offsetWidth);

  return generalGap;
}


