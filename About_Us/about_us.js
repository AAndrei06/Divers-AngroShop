let slideShowContainer = document.querySelector('.slide-show-div');
let slideSection = document.querySelector('#slide-show-section');
const styles = window.getComputedStyle(slideSection);
let MAX_TOP = parseInt(styles.getPropertyValue('height'));
let MAX_DISTANCE = slideSection.offsetTop + MAX_TOP;

let TOTAL_PX = MAX_TOP - slideShowContainer.offsetHeight;
let TOP = 0;
let currentScroll = 0;
let pastScroll = 0;

let MAX_WIDTH = 880;
let MAX_HEIGHT = 547;





window.addEventListener('scroll', () =>
{

	let {scrollTop, scrollHeight} = document.documentElement;
	scrollTop = scrollTop / 3.5;	

	if(scrollTop < MAX_DISTANCE)
	{
		pastScroll = currentScroll;
		currentScroll = scrollTop;

		let totalScroll = currentScroll - pastScroll;
		
		TOP += totalScroll;

		if(TOP >= TOTAL_PX)
		{
			slideShowContainer.style.top = `${TOTAL_PX}px`;
		}
		if(TOP >= 0 && TOP < TOTAL_PX)
		{
			slideShowContainer.style.top = `${TOP}px`;
		}

		
		
	}



	
})
