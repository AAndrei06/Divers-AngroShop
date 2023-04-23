const slideShowContainer = document.querySelector('.slide-show-div');
const slideSection = document.querySelector('#slide-show-section');
const blackOverlay = document.querySelector('.slideshow-overlay-black');
const grayOverlay = document.querySelector('.slideshow-overlay-gray');
const slideshowSlidesDiv = document.querySelector('.slideshow-slides');
const slideshowIndicatorsDiv = document.querySelector('.slideshow-indicators');
const slideshowIndicatorAnim = document.querySelector('.slideshow-indicator-anim');
const generalIndicator = document.querySelector('.slideshow-indicator');
const allIndicators = document.querySelectorAll('.slideshow-indicator');
const slideshowRadios = document.querySelectorAll('.slideshow-radio');

	
const slideSectionstyles = window.getComputedStyle(slideSection);
let MAX_TOP = parseInt(slideSectionstyles.getPropertyValue('height'));
let MAX_DISTANCE = slideSection.offsetTop + MAX_TOP;

let TOTAL_PX = MAX_TOP - slideShowContainer.offsetHeight;
let TOP = 0;
let currentScroll = 0;
let pastScroll = 0;

let MAX_WIDTH = 880;
let currentWidth = slideShowContainer.offsetWidth;
let NEEDED_WIDTH = MAX_WIDTH - currentWidth;
let widthPerFrame = NEEDED_WIDTH / TOTAL_PX;

let MAX_HEIGHT = 547;
let currentHeight = slideShowContainer.offsetHeight;
let NEEDED_HEIGHT = MAX_HEIGHT - currentHeight;
let heightPerFrame = NEEDED_HEIGHT / TOTAL_PX;

const MAX_OPACITY = 0;
let currentOpacity = 0.35;
let opacityperFrame = currentOpacity / TOTAL_PX;





preInstall_Slideshow();
change_slideShow();


window.addEventListener('scroll', () =>
{
	change_slideShow();
})
add_EventListenerIndicator();
add_slideshowGrab();






function change_slideShow()
{
	let {scrollTop, scrollHeight} = document.documentElement;
	scrollTop = scrollTop / 3.5;	

	if(scrollTop < MAX_DISTANCE)
	{
		pastScroll = currentScroll;
		currentScroll = scrollTop;

		let scrolled = currentScroll - pastScroll;
		
		TOP += scrolled;
		currentWidth += scrolled * widthPerFrame;
		currentHeight += scrolled * heightPerFrame;
		currentOpacity -= scrolled * opacityperFrame;

		if(TOP >= TOTAL_PX)
		{
			slideShowContainer.style.top = `${TOTAL_PX}px`;
		}

		if(TOP >= 0 && TOP < TOTAL_PX)
		{
			slideShowContainer.style.top = `${TOP}px`;
		}
		if(currentWidth <= MAX_WIDTH)
		{
			slideShowContainer.style.width = `${currentWidth}px`;
			slideshowIndicatorsDiv.style.width = `${currentWidth}px`;
		}	
		if(currentHeight <= MAX_HEIGHT)
		{
			slideShowContainer.style.height = `${currentHeight}px`;
		}
		if(currentOpacity >= MAX_OPACITY && currentOpacity <= 1)
		{
			blackOverlay.style.opacity = `${currentOpacity}`;
			grayOverlay.style.opacity = `${currentOpacity}`;
		}

		slideshowIndicatorAnim.style.width = `${generalIndicator.offsetWidth}px`;
		indicatorMoveAnim();



	}
}

function preInstall_Slideshow()
{
	let {scrollTop} = document.documentElement;

	if(scrollTop >= slideShowContainer.offsetTop + slideSection.offsetTop)
	{
		slideShowContainer.style.top = `${TOTAL_PX}px`;
		blackOverlay.style.opacity = 0;
		grayOverlay.style.opacity = 0;
		slideShowContainer.style.width = `${MAX_WIDTH}px`;
		slideShowContainer.style.height = `${MAX_HEIGHT}px`;
		slideshowIndicatorsDiv.style.width = `${MAX_WIDTH}px`;
	}
}

function add_EventListenerIndicator()
{
	allIndicators.forEach(indicator =>
	{
		indicator.addEventListener('click', () =>
		{
			setTimeout(() =>
			{
				indicatorMoveAnim();
			}, 20)
			
		})
	})
}

function indicatorMoveAnim()
{	
	let radioIndex = get_indexCheckedRadio();
	slideshowIndicatorAnim.style.left = `${allIndicators[radioIndex].offsetLeft}px`;
}

function get_indexCheckedRadio()
{
	let index = 0;
	let actualIndex;

	slideshowRadios.forEach(radio =>
	{
		if(!radio.checked)
		{
			index += 1;
		}
		else
		{
			actualIndex = index;
		}
	})

	return actualIndex;
}

function get_checkedRadio()
{
	let tempRadio;

	slideshowRadios.forEach(radio =>
	{
		if(radio.checked)
		{
			tempRadio = radio;
		}
	})

	return tempRadio;
}

function add_slideshowGrab()
{
    let slidesStartX = 0;
    let slidesScrollLeft = 0;

    let firstMouse = 0;
    let secondMouse = 0;

    let mouseDowned = false;
    let mouseUpped = false;

    slideshowSlidesDiv.addEventListener('mousedown', (event) => 
    {
      slideshowSlidesDiv.style.cursor = 'grab';
      slidesStartX = event.pageX - slideshowSlidesDiv.offsetLeft;
      slidesScrollLeft = slideshowSlidesDiv.scrollLeft;
      mouseDowned = true;
      firstMouse = slidesStartX;
    });

    document.addEventListener('mouseup', () => 
    {
      slideshowSlidesDiv.style.cursor = 'initial';
      slidesStartX = event.pageX - slideshowSlidesDiv.offsetLeft;
      secondMouse = slidesStartX;
      mouseUpped = true;

      if(mouseDowned == true && mouseUpped == true)
      {
        let direction = firstMouse - secondMouse;
        mouseDowned = false;
        mouseUpped = false;
        firstMouse = 0;
        secondMouse = 0;

        if(direction < 0)
        {
        	let currentRadio = get_checkedRadio()
        	currentRadio.previousElementSibling.checked = true;
        }
        if(direction > 0)
        {
        	let currentRadio = get_checkedRadio()
        	currentRadio.nextElementSibling.checked = true;
        }
        indicatorMoveAnim();
      }
      

    });
}




// SLIDESHOW INDICATORS ANIMATION



