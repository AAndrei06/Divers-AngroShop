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
const indicatorAnimator = document.querySelector('.carousel-indicator-anim');

const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
const carouselFlex = document.querySelector(".carousel-flex");

let scrolled;

let fixedValues = [];

const allActualSliders = allSlidersDiv.children;


// MULTIPLE
let currentIndicator = 0;
totalShownSlides = get_shownSlides();
set_carousel_dimensions();
set_Indicators();
apply_inactive_Arrow(); 
get_fixedValues();

// ONE TIME

add_eventListener_Arrows();
add_eventListener_Indicators();


responsive_fix();

set_indicatorAnim();

function set_indicatorAnim()
{
  let generalIndicatorWidth = carouselIndicators[0].offsetWidth;
  indicatorAnimator.style.width = `${generalIndicatorWidth}px`;
  let currentLeft = carouselIndicators[currentIndicator].offsetLeft;
  indicatorAnimator.style.left = `${currentLeft}px`;
}

function responsive_fix()
{
  window.addEventListener('resize', () =>
    {
      currentIndicator = 0;
      totalShownSlides = get_shownSlides();
      set_carousel_dimensions();
      set_Indicators();
      apply_inactive_Arrow();
      get_fixedValues();
    });
  
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

  let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if(windowWidth > 1200)
  {
    numShownSlides = 3;
  }
  if(windowWidth < 1200)
  {
    numShownSlides = 2;
  }

  return numShownSlides;

}

function get_fixedValues()
{
  fixedValues = [0];
  let slideWidth = get_slideDimension();
  let generalGap = get_slidesGap();
  let numOfIndicators = calc_all_active_Indicators();
  let totalSlidesWidth = slideWidth * allActualSliders.length - generalGap;
  let shownWidth = calc_shownSliders_width();
  
  let totalSlidesValues = 0;

  for(let i = 0; i < numOfIndicators-1; i++)
  {
    totalSlidesValues += shownWidth + generalGap;
    fixedValues.push(totalSlidesValues);
  }

  // let end = totalSlidesWidth - totalSlidesValues;

  // fixedValues.push(end);

  
}

function update_Indicator()
{
  remove_currentIndicator();
  carouselIndicators[currentIndicator].classList.add('current-indicator')
}
function update_Indicator_Dynamic()
{
  
  allSlidersDiv.addEventListener('scroll', () => 
  {
    let generalGap = get_slidesGap();
    remove_currentIndicator();
    scrolled = allSlidersDiv.scrollLeft;
    scrolled = Math.round(scrolled);
    let areas = fixedValues.length;

    if(areas == 3)
    {
      if(scrolled >= fixedValues[0] && scrolled < fixedValues[1] - generalGap)
      {
        carouselIndicators[0].classList.add('current-indicator');
        currentIndicator = 0;
      }
      if(scrolled >= fixedValues[1] - generalGap && scrolled < fixedValues[2])
      {
        carouselIndicators[1].classList.add('current-indicator');
        currentIndicator = 1;
      }
      if(scrolled >= fixedValues[2])
      {
        carouselIndicators[2].classList.add('current-indicator');
        currentIndicator = 3;
      }
    }
    if(areas == 4)
    {
      if(scrolled >= fixedValues[0] && scrolled < fixedValues[1] - generalGap)
      {
        carouselIndicators[0].classList.add('current-indicator');
        currentIndicator = 0;
      }
      if(scrolled >= fixedValues[1] - generalGap && scrolled < fixedValues[2] - generalGap)
      {
        carouselIndicators[1].classList.add('current-indicator');
        currentIndicator = 1;
      }
      if(scrolled >= fixedValues[2] - generalGap && scrolled < fixedValues[3])
      {
        carouselIndicators[2].classList.add('current-indicator');
        currentIndicator = 3;
      }
      if(scrolled >= fixedValues[3])
      {
        carouselIndicators[2].classList.add('current-indicator');
        currentIndicator = 4;
      }
    }


  })

}


function add_eventListener_Indicators()
{
    carouselIndicators.forEach(indicator =>
    {
      indicator.addEventListener('click', (e) =>
      {

        remove_currentIndicator()
        indicator.classList.add('current-indicator');
        let clickedCurrentIndicatorIndex = get_currentIndicator();
        currentIndicator = clickedCurrentIndicatorIndex;

        scroll(currentIndicator);
        set_indicatorAnim();
      })
    })
}


function scroll(currentIndicator)
{
  allSlidersDiv.scrollLeft = fixedValues[currentIndicator];
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
function remove_activeIndicator()
{
  for(let i = 0; i < carouselIndicators.length; i++)
  {
    if(carouselIndicators[i].classList.contains('show-indicator'))
    {
      carouselIndicators[i].classList.remove('show-indicator');
    }
  }
  
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
  indicatorAnimator.style.left = `0px`;
  remove_activeIndicator()
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
    currentIndicator += 1;
    scroll(currentIndicator);
    update_Indicator();
    set_indicatorAnim();
  })

  leftArrow.addEventListener('click', (e) =>
  {
    currentIndicator -= 1;
    scroll(currentIndicator);
    update_Indicator();
    set_indicatorAnim();
    
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
  }, 100);

  pressedYet = 'true';

})

userEntries += 1;

localStorage.setItem('userEntries', userEntries);
localStorage.setItem('pressedYet', pressedYet);

setTimeout(() =>
{
  localStorage.setItem('pressedYet', pressedYet);
}, 5000);