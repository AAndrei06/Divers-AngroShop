let slideShowContainer = document.querySelector('.slide-show-div');
let slideSection = document.querySelector('#slide-show-section');
let blackOverlay = document.querySelector('.slideshow-overlay-black');
let grayOverlay = document.querySelector('.slideshow-overlay-gray');



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

let MAX_OPACITY = 0;
let currentOpacity = 0.35;
let opacityperFrame = currentOpacity / TOTAL_PX;



window.addEventListener('scroll', () =>
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
			slideShowContainer.style.filter = 'drop-shadow(0px 85px 24px rgba(0, 0, 0, 0.01)) drop-shadow(0px 54px 22px rgba(0, 0, 0, 0.04)) drop-shadow(0px 31px 18px rgba(0, 0, 0, 0.15)) drop-shadow(0px 14px 14px rgba(0, 0, 0, 0.26)) drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.29)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.3))';
		}
		else
		{
			slideShowContainer.style.filter = 'none';
		}
		if(TOP >= 0 && TOP < TOTAL_PX)
		{
			slideShowContainer.style.top = `${TOP}px`;
		}

		if(currentWidth <= MAX_WIDTH)
		{
			
			slideShowContainer.style.width = `${currentWidth}px`;
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

		
		
	}



	
})
