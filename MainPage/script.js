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

const carouselArrows = document.querySelectorAll('.carousel-arrow-div');
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const carouselFlex = document.querySelector(".carousel-flex");

const allActualSliders = allSlidersDiv.children;
let currentIndicator = 1;
let disableAllTimeout;





// MULTIPLE
totalShownSlides = get_shownSlides();
set_Indicators();
set_carousel_dimensions();

// ONE TIME

add_eventListener_Arrows();
add_eventListener_Indicators();
apply_inactive_Arrow(); 
fix_bugs();





// MULTIPLE




window.addEventListener('resize', responsive_fix);

get_fixedValues();

function responsive_fix()
{
  set_Indicators();
  set_carousel_dimensions();
  totalShownSlides = get_shownSlides();
  apply_inactive_Arrow(); 

  console.log(totalShownSlides);
}

function get_slideDimension()
{
  let generalSlideWidth = generalSlide.offsetWidth;
  let generalGap = get_slidesGap();

  let slideWidth = generalSlideWidth + generalGap;

  return slideWidth;
}

function get_shownSlides()
{
  let numShownSlides;

  if(window.innerWidth > 1172)
  {
    numShownSlides = 3;
  }
  else
  {
    numShownSlides = 2;
  }

  return numShownSlides;

}

function get_fixedValues(totalShownSlides)
{
  let slideWidth = get_slideDimension();
  let generalGap = get_slidesGap();

  let totalSlidesWidth = slideWidth * allActualSliders.length - generalGap;
  let shownWidth = calc_shownSliders_width();
  let fixedValues = [0];
  let totalSpace = 0;

  

  // if(totalShownSlides == 3)
  // {
  //   let firstSlides = 0;
  //   let secondSlides = shownWidth + generalGap;
  //   let endSlides = totalSlidesWidth - secondSlides - firstSlides;

  //   // for(let i = 0; i <)


    
  // }
  // if(totalShownSlides == 2)
  // {
  //   let firstSlides = 0;
  //   let secondSlides = shownWidth + generalGap;
  //   let thirdSlides = totalSlidesWidth - secondSlides - firstSlides;
  //   let fourth

    
  // }

}

function fix_bugs()
{
  allSlidersDiv.addEventListener('scroll', check_Scrolling);
}

function check_Scrolling()
{
  let isScrolling = false;

  disable_All();

  clearTimeout(disableAllTimeout);

  disableAllTimeout = setTimeout(() => {
    isScrolling = false;
    enable_All();
  }, 20);
  
}
function disable_All()
{
  for(let i = 0; i < carouselIndicators.length; i++)
  {
    carouselIndicators[i].classList.add('carousel-inactive');
  }
  for(let i = 0; i < carouselArrows.length; i++)
  {
    carouselArrows[i].classList.add('carousel-inactive');
  }
}

function enable_All()
{
  for(let i = 0; i < carouselIndicators.length; i++)
  {
    carouselIndicators[i].classList.remove('carousel-inactive');
  }
  for(let i = 0; i < carouselArrows.length; i++)
  {
    carouselArrows[i].classList.remove('carousel-inactive');
  }
}

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
  
  if(neededScrolls < 0)
  {
    allSlidersDiv.scrollLeft += scrollVolume;
  }
  if(neededScrolls > 0)
  {
    allSlidersDiv.scrollLeft -= scrollVolume;
  }
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
function remove_lastIndicator()
{
  for(let i = 0; i < carouselIndicators.length; i++)
  {
    if(carouselIndicators[i].classList.contains('last-indicator'))
    {
      carouselIndicators[i].classList.remove('last-indicator');
    }
  }
}
function set_Indicators()
{
  remove_currentIndicator();
  remove_lastIndicator()
  let numofIndicatorsNeeded = get_numOfIndicator_needed();

  for(let i = 0; i < numofIndicatorsNeeded; i++)
  {
    carouselIndicators[i].classList.add('show-indicator');
  }
  let totalActiveIndicators = calc_all_active_Indicators();

  carouselIndicators[0].classList.add('first-indicator');
  carouselIndicators[0].classList.add('current-indicator');
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
  let sliderDimension = get_slideDimension();
  let generalGap = get_slidesGap();

  let allShowedSpace = sliderDimension * totalShownSlides - generalGap;

  carouselFlex.style.gridTemplateColumns = `1fr ${allShowedSpace}px 1fr`;
  carouselIndicatorsDiv.style.width = `${allShowedSpace}px`;

  allSlidersDiv.scrollLeft = 0;
}

// Functii

function get_numOfIndicator_needed()
{
  let numofSlides = allActualSliders.length;
  let numofIndicatorsNeeded = Math.ceil(numofSlides / totalShownSlides);

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
  let currentIndicator = get_currentIndicator();

  console.log("CURRENT INDICATOR: "+currentIndicator)
  console.log("TOTAL ACTIVE INDICATORS: "+ totalActiveIndicators)

  if(currentIndicator <= 0)
  {
    leftArrow.classList.add('carousel-arrow-inactive');
  }
  else
  {
    leftArrow.classList.remove('carousel-arrow-inactive');
  }
  if(currentIndicator >= totalActiveIndicators-1)
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
  let slideGap = get_slidesGap();
  let slideWidth = get_slideDimension();
  let allShowedSpace = totalShownSlides * slideWidth - slideGap;

  return allShowedSpace;
}

function get_slidesGap()
{
  let firstSlide = allActualSliders[0];
  let secondSlide = allActualSliders[1];
  let generalGap = secondSlide.offsetLeft - (firstSlide.offsetLeft + firstSlide.offsetWidth);

  return generalGap;
}











// DISCLAIMER OVERLAY

const overlay = document.querySelector('.overlay');
const disclaimerDiv = document.querySelector('.disclaimer-div');
const disclaimerButton = document.querySelector('.disclaimer-button');

let userEntries = localStorage.getItem('userEntries');
let pressedYet = localStorage.getItem('pressedYet');

if(!pressedYet)
{
  localStorage.setItem('pressedYet', 'false');
}

if (!userEntries) {
  localStorage.setItem('userEntries', '0');
}

if(pressedYet == 'false')
{
  userEntries = 0;
}

if(userEntries > 15)
{
  userEntries = 0;
  pressedYet = 'false';
}

userEntries = parseInt(userEntries);

if(userEntries == 0)
{
  overlay.style.display = 'initial';
  disclaimerDiv.classList.remove("disclaimer-dissapear");
}

disclaimerButton.addEventListener('click', () =>
{
  disclaimerDiv.style.display = 'initial';
  disclaimerDiv.classList.add('disclaimer-dissapear');
  
  setTimeout(() =>
  {
    disclaimerDiv.style.display = 'none';
    overlay.classList.remove('overlay');
  }, 150);

  pressedYet = 'true';

})

userEntries += 1;

localStorage.setItem('userEntries', userEntries);
localStorage.setItem('pressedYet', pressedYet);

setTimeout(() =>
{
  localStorage.setItem('pressedYet', pressedYet);
}, 5000);