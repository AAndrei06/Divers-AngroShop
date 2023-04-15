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
const allCategoryDivs = document.querySelector('.category-scrollable-space');
let categoryIsDragging = false;
let categoryStartX = 0;
let categoryScrollLeft = 0;

allCategoryDivs.addEventListener('mousedown', (event) => {
  categoryIsDragging = true;
  categoryStartX = event.pageX - allCategoryDivs.offsetLeft;
  categoryScrollLeft = allCategoryDivs.scrollLeft;
});

allCategoryDivs.addEventListener('mousemove', (event) => {
  if (!categoryIsDragging) return;
  event.preventDefault();
  const x = event.pageX - allCategoryDivs.offsetLeft;
  const walk = (x - categoryStartX) * 2;
  allCategoryDivs.scrollLeft = categoryScrollLeft - walk;
});

document.addEventListener('mouseup', () => {
  categoryIsDragging = false;
});

allCategoryDivs.addEventListener('mouseleave', () => {
  categoryIsDragging = false;
});

// Use passive event listener for smoother scrolling
allCategoryDivs.addEventListener('scroll', (event) => {
  if (categoryIsDragging) {
    event.preventDefault();
    event.stopPropagation();
  }
}, { passive: false });

//RANDOM EXEMPLE
let categoryLinks = Array.from(document.querySelector('.category-links').children);

let generalCategoryLink = document.querySelector('.category-link');
let generalCategoryFlex = document.querySelector('.category-text-flex');
let generalExamplesDiv = document.querySelector('#aniversare-examples');

let categoryExamplesAniversare = Array.from(document.querySelector('#aniversare-examples').children);
let categoryExamplesJucarii = Array.from(document.querySelector('#jucarii-examples').children);
let categoryExamplesRechizite = Array.from(document.querySelector('#rechizite-examples').children);
let categoryExamplesSuvenire = Array.from(document.querySelector('#suvenire-examples').children);
let categoryExamplesAccesorii = Array.from(document.querySelector('#accesorii-examples').children);
let categoryExamplesImbracaminte = Array.from(document.querySelector('#imbracaminte-examples').children);
let categoryExamplesBucatarie = Array.from(document.querySelector('#bucatarie-examples').children);
let categoryExamplesElectronice = Array.from(document.querySelector('#electronice-examples').children);
let categoryExamplesGospodarie = Array.from(document.querySelector('#gospodarie-examples').children);
let categoryExamplesIgiena = Array.from(document.querySelector('#igiena-examples').children);


let allExamples = [categoryExamplesAniversare, categoryExamplesJucarii, categoryExamplesRechizite, 
  categoryExamplesSuvenire, categoryExamplesAccesorii, categoryExamplesImbracaminte, categoryExamplesBucatarie, 
  categoryExamplesElectronice, categoryExamplesGospodarie, categoryExamplesIgiena];


for(let i = 0; i < allExamples.length; i++)
{
  shuffle_examples(i);
}

unShowAllExamples()
assign_showExample()
get_examplesGap()

function get_exampleDivWidth()
{
  let left = generalCategoryFlex.offsetLeft;
  let examplesWidth = generalCategoryLink.offsetWidth;

  let containerStyle = window.getComputedStyle(generalExamplesDiv);
  let rightPadding = parseFloat(containerStyle.paddingRight);
  let exampleDivWidth = examplesWidth - rightPadding - left;

  return exampleDivWidth;

}
function get_examplesGap()
{
  let computedStyle = window.getComputedStyle(generalExamplesDiv);
  let generalGap = computedStyle.getPropertyValue('gap');
  generalGap = parseInt(generalGap);

  return generalGap;
}

function assign_showExample()
{

  let generalGap = get_examplesGap();

  for(let i = 0; i < allExamples.length; i++)
  {
    let totalWidth = 0;
    let examplesWidth = get_exampleDivWidth();
    examplesWidth = examplesWidth -60;
    for(let j = 0; j < allExamples[i].length; j++)
    {
      if(totalWidth < examplesWidth)
      {
        let example = allExamples[i][j];
        example.classList.add('show-category-example');
        let exampleWidth = example.offsetWidth;
        let exampleSpace = exampleWidth + generalGap;
        totalWidth = totalWidth + exampleSpace;
      }
      if(totalWidth > examplesWidth)
      {
        allExamples[i][j].classList.remove('show-category-example');
      }
    }
    
  }

}

function unShowAllExamples()
{
  for(let i = 0; i < allExamples.length; i++)
  {
    for(let j = 0; j < allExamples[i].length; j++)
    {
      if(allExamples[i][j].classList.contains("show-category-example"))
      {
        allExamples[i][j].classList.remove("show-category-example");
      }
      
    }
  }
}

function shuffle_examples(arrayIndex)
{
  let temp;
 
   for (let i = 0; i < allExamples.length-2; i++) 
   {
    let randomItemIndex = Math.floor(Math.random() * (i));
    let temp = allExamples[arrayIndex][i];
    allExamples[arrayIndex][i] = allExamples[arrayIndex][randomItemIndex];
    allExamples[arrayIndex][randomItemIndex] = temp;
    }
}


// CARUSELE :(
class Carousel
{
  constructor(allSlidersDiv, generalSlide, carouselIndicatorsDiv, carouselIndicators, indicatorAnimator,
   leftArrow, rightArrow, carouselFlex, allActualSliders)
  {

    this.allSlidersDiv = allSlidersDiv;
    this.generalSlide = generalSlide;
    this.carouselIndicatorsDiv = carouselIndicatorsDiv;
    this.carouselIndicators = carouselIndicators;
    this.indicatorAnimator = indicatorAnimator;
    this.leftArrow = leftArrow;
    this.rightArrow = rightArrow;
    this.carouselFlex = carouselFlex;
    this.allActualSliders = allActualSliders;

    this.fixedValues = [];
    this.grabTimeout;
    this.scrolled;
    this.currentIndicator = 0;
    this.switchToPhone = 1200;
    this.totalShownSlides = 3;
    this.totalActiveIndicators = 0;

  }

  // MULTIPLE
  responsive_fix()
  {
    window.addEventListener('resize', () =>
    {
      this.currentIndicator = 0;
      this.get_shownSlides();
      this.set_carousel_dimensions();
      this.set_Indicators();
      this.apply_inactive_Arrow();
      this.get_fixedValues();
      this.set_indicatorAnim();
    });
  }

  get_shownSlides()
  {
    let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(windowWidth > this.switchToPhone)
    {
      this.totalShownSlides = 3;
    }
    if(windowWidth <= this.switchToPhone)
    {
      this.totalShownSlides = 2;
    }

  }
  set_carousel_dimensions()
  {
    let sliderDimension = this.get_slideDimension();
    let generalGap = this.get_slidesGap();

    let allShowedSpace = sliderDimension * this.totalShownSlides - generalGap;
    console.log('allShowedSpace: '+allShowedSpace)
    this.carouselFlex.style.gridTemplateColumns = `1fr ${allShowedSpace}px 1fr`;
    this.carouselIndicatorsDiv.style.width = `${allShowedSpace}px`;

    this.allSlidersDiv.scrollLeft = 0;
  }

  set_Indicators()
  {
    this.indicatorAnimator.style.left = `0px`;
    this.remove_activeIndicator()
    this.remove_currentIndicator();
    this.remove_lastIndicator()
    let numofIndicatorsNeeded = this.get_numOfIndicator_needed();

    for(let i = 0; i < numofIndicatorsNeeded; i++)
    {
      this.carouselIndicators[i].classList.add('show-indicator');
    }
    this.calc_all_active_Indicators();
    this.carouselIndicators[0].classList.add('first-indicator');
    this.carouselIndicators[0].classList.add('current-indicator');
    this.carouselIndicators[this.totalActiveIndicators-1].classList.add('last-indicator');
  }

  apply_inactive_Arrow()
  {
    this.calc_all_active_Indicators();

    if(this.currentIndicator <= 0)
    {
      this.leftArrow.classList.add('carousel-arrow-inactive');
    }
    else
    {
      this.leftArrow.classList.remove('carousel-arrow-inactive');
    }
    if(this.currentIndicator >= this.totalActiveIndicators-1)
    {
      this.rightArrow.classList.add('carousel-arrow-inactive');
    }
    else
    {
      this.rightArrow.classList.remove('carousel-arrow-inactive');
    }

  }

  get_fixedValues()
  {
    this.fixedValues = [0];
    let generalGap = this.get_slidesGap();
    this.calc_all_active_Indicators();
    let shownWidth = this.calc_shownSliders_width();
    
    let totalSlidesValues = 0;

    for(let i = 0; i < this.totalActiveIndicators-1; i++)
    {
      totalSlidesValues += shownWidth + generalGap;
      this.fixedValues.push(totalSlidesValues);
    }
    
  }

  set_indicatorAnim()
  {
    let generalIndicatorWidth = this.carouselIndicators[0].offsetWidth;
    this.indicatorAnimator.style.width = `${generalIndicatorWidth}px`;
    let currentLeft = this.carouselIndicators[this.currentIndicator].offsetLeft;
    this.indicatorAnimator.style.left = `${currentLeft}px`;
  }

  //INITIAL
  add_grab()
  {
    let slidesIsDragging = false;
    let slidesStartX = 0;
    let slidesScrollLeft = 0;
    let slidesIsScrolling = false; 

    let firstMouse = 0;
    let secondMouse = 0;

    let mouseDowned = false;
    let mouseUpped = false;

    this.allSlidersDiv.addEventListener('mousedown', (event) => {
      slidesStartX = event.pageX - this.allSlidersDiv.offsetLeft;
      slidesScrollLeft = this.allSlidersDiv.scrollLeft;
      mouseDowned = true;
      firstMouse = slidesStartX;
    });

    document.addEventListener('mouseup', () => {
      slidesStartX = event.pageX - this.allSlidersDiv.offsetLeft;
      secondMouse = slidesStartX;
      mouseUpped = true;

      if(mouseDowned == true && mouseUpped == true)
      {
        let direction = firstMouse - secondMouse;
        mouseDowned = false;
        mouseUpped = false;
        firstMouse = 0;
        secondMouse = 0;

        this.calc_all_active_Indicators()

        if(direction < 0)
        {
          if(this.currentIndicator >= 0)
          {
            this.currentIndicator -= 1;
          }
          
          this.scroll();
          this.update_Indicator();
          this.set_indicatorAnim();
        }
        if(direction > 0)
        {

          if(this.currentIndicator < this.totalActiveIndicators-1)
          {
            this.currentIndicator += 1;
          }

          this.scroll();
          this.update_Indicator();
          this.set_indicatorAnim();
        }
      }
      

    });
  }
  add_eventListener_Arrows()
  {
    this.rightArrow.addEventListener('click', (e) =>
    {
      this.currentIndicator += 1;
      this.scroll();
      this.update_Indicator();
      this.set_indicatorAnim();
    })

    this.leftArrow.addEventListener('click', (e) =>
    {
      this.currentIndicator -= 1;
      this.scroll();
      this.update_Indicator();
      this.set_indicatorAnim();
      
    })
  }

  add_eventListener_Indicators()
  {
      this.carouselIndicators.forEach(indicator =>
      {
        indicator.addEventListener('click', (e) =>
        {

          this.remove_currentIndicator();
          indicator.classList.add('current-indicator');
          let clickedCurrentIndicatorIndex = this.get_currentIndicator();
          this.currentIndicator = clickedCurrentIndicatorIndex;

          this.scroll();
          this.set_indicatorAnim();
        })
      })
  }
  add_grabMobile()
  {
    this.allSlidersDiv.addEventListener('scroll', () =>
    {

      clearTimeout(this.grabTimeout);

      this.grabTimeout = setTimeout(() =>
      {
        this.scrolled = this.allSlidersDiv.scrollLeft;
        this.update_Indicator_Dynamic(this.scrolled);
      }, 100)
      
    })
  }

  update_Indicator_Dynamic(scrolled)
  {
    let end;
    let slideWidth = this.get_slideDimension();
    let generalGap = this.get_slidesGap();
    this.remove_currentIndicator();
    let areas = this.fixedValues.length;
    let totalSlidesWidth = slideWidth * this.allActualSliders.length - generalGap;
    
    

    if(areas == 3)
    {
      end = totalSlidesWidth - this.fixedValues[1];
      if(this.scrolled >= this.fixedValues[0] && this.scrolled < this.fixedValues[1] - generalGap)
      {
        this.carouselIndicators[0].classList.add('current-indicator');
        this.currentIndicator = 0;
      }
      if(this.scrolled >= this.fixedValues[1] - generalGap && this.scrolled < end)
      {
        this.carouselIndicators[1].classList.add('current-indicator');
        this.currentIndicator = 1;
      }
      if(this.scrolled >= end)
      {
        this.carouselIndicators[2].classList.add('current-indicator');
        this.currentIndicator = 2;
      }
    }
    if(areas == 4)
    {

      if(this.scrolled >= this.fixedValues[0] && this.scrolled < this.fixedValues[1] - generalGap)
      {
        this.carouselIndicators[0].classList.add('current-indicator');
        this.currentIndicator = 0;
      }
      if(this.scrolled >= this.fixedValues[1] - generalGap && this.scrolled < this.fixedValues[2] - generalGap)
      {
        this.carouselIndicators[1].classList.add('current-indicator');
        this.currentIndicator = 1;
      }
      if(this.scrolled >= this.fixedValues[2] - generalGap && this.scrolled < this.fixedValues[3] - generalGap)
      {
        this.carouselIndicators[2].classList.add('current-indicator');
        this.currentIndicator = 2;
      }
      if(this.scrolled >= this.fixedValues[3] - generalGap)
      {
        this.carouselIndicators[3].classList.add('current-indicator');
        this.currentIndicator = 3;
      }
    }
    this.set_indicatorAnim();
  }

  update_Indicator()
  {
    this.remove_currentIndicator();
    this.carouselIndicators[this.currentIndicator].classList.add('current-indicator')
  }
  get_currentIndicator()
  {

    let currentIndicatorIndex = 0;
    let temp = 0;

    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(!this.carouselIndicators[i].classList.contains('current-indicator'))
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
  remove_currentIndicator()
  {
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('current-indicator'))
      {
        this.carouselIndicators[i].classList.remove('current-indicator');
      }
    }
  }
  remove_activeIndicator()
  {
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('show-indicator'))
      {
        this.carouselIndicators[i].classList.remove('show-indicator');
      }
    }
    
  }
  remove_lastIndicator()
  {
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('last-indicator'))
      {
        this.carouselIndicators[i].classList.remove('last-indicator');
      }
    }
  }
  get_slideDimension()
  {
    let generalSlideWidth = this.generalSlide.offsetWidth;
    let generalGap = this.get_slidesGap();

    let slideWidth = generalSlideWidth + generalGap;

    return slideWidth;
  }
  get_numOfIndicator_needed()
  {
    let numofSlides = this.allActualSliders.length;
    let numofIndicatorsNeeded = Math.ceil(numofSlides / this.totalShownSlides);

    return numofIndicatorsNeeded;
  }
  scroll()
  {
    this.allSlidersDiv.scrollLeft = this.fixedValues[this.currentIndicator];
    this.apply_inactive_Arrow();
  }
  calc_all_active_Indicators()
  {
    this.totalActiveIndicators = 0;
    for(let i = 0; i < this.carouselIndicators.length; i++)
    {
      if(this.carouselIndicators[i].classList.contains('show-indicator'))
      {
        this.totalActiveIndicators += 1;
      }
    }
  }
  calc_shownSliders_width()
  {
    let slideGap = this.get_slidesGap();
    let slideWidth = this.get_slideDimension();
    let allShowedSpace = this.totalShownSlides * slideWidth - slideGap;

    return allShowedSpace;
  }
  get_slidesGap()
  {
    let firstSlide = this.allActualSliders[0];
    let secondSlide = this.allActualSliders[1];
    let generalGap = secondSlide.offsetLeft - (firstSlide.offsetLeft + firstSlide.offsetWidth);

    return generalGap;
  }

  
}

// Universal
const generalSlide = document.querySelector('.carousel-slide');

// Carousel 01

const allSlidersDiv01 = document.querySelector('#carousel-sliders01');
const carouselIndicatorsDiv01 = document.querySelector('#carousel-indicators01');

const carouselIndicators01 = Array.from(carouselIndicatorsDiv01.children);
carouselIndicators01.filter(child => child.classList.contains('carousel-indicator'));
const indicatorAnimator01 = document.querySelector('#carousel-indicator-anim01');

const leftArrow01 = document.querySelector("#left-arrow01");
const rightArrow01 = document.querySelector("#right-arrow01");
const carouselFlex01 = document.querySelector("#carousel-flex01");

const allActualSliders01 = allSlidersDiv01.children;

const carousel01 = new Carousel(allSlidersDiv01, generalSlide, carouselIndicatorsDiv01, carouselIndicators01, indicatorAnimator01,
  leftArrow01, rightArrow01, carouselFlex01, allActualSliders01);


// MULTIPLE

carousel01.get_shownSlides();
carousel01.set_carousel_dimensions();
carousel01.set_Indicators();
carousel01.apply_inactive_Arrow(); 
carousel01.get_fixedValues();

// ONE TIME

carousel01.add_eventListener_Arrows();
carousel01.add_eventListener_Indicators();

carousel01.add_grab();
carousel01.add_grabMobile()
carousel01.responsive_fix();

carousel01.set_indicatorAnim();


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