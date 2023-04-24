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
	console.log(scrollTop)
	console.log(slideShowContainer.offsetTop)
	console.log(slideSection.offsetTop)

	if(scrollTop >= slideSection.offsetTop - slideSection.offsetHeight)
	{
		console.log('PUS')
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




// STATISTICS
const statisticsSection = document.querySelector('#statistics-section');
const allStatistics = document.querySelectorAll('.statistic');
const allStatisticsNum = document.querySelectorAll('.statistic-num');
const allStatisticsText = document.querySelectorAll('.statistic-text');

let incrementAnimRun = false;

const timeouts = [5000, 2200, 5000, 2200, 5000, 2200 ,5000 ,2200, 5000];


function timeoutLoop(index) {
  setTimeout(() => {
  	 if (index >= timeouts.length) 
    {
    	allStatistics.forEach(statistic =>
		{
			statistic.classList.remove('statisticIntervalDelete0');
			statistic.classList.remove('statisticInterval1');
			statistic.classList.remove('statisticIntervalDelete2');
			statistic.classList.remove('statisticInterval3');
			statistic.classList.remove('statisticIntervalDelete4');
			statistic.classList.remove('statisticInterval5');
			statistic.classList.remove('statisticIntervalDelete6');
			statistic.classList.remove('statisticInterval7');
			statistic.classList.remove('statisticIntervalDelete8');
			statistic.classList.remove('current-statistic')
		});
    	index = 0;

    }
    if(index == 0)
    {
    	allStatistics[index].classList.add('current-statistic');
    	allStatisticsText[0].classList.add(`statisticIntervalDelete${index}`);
    }
    if(index % 2 !== 0)
    {
    	allStatisticsText[Math.round(index / 2)].classList.add(`statisticInterval${index}`);
    	allStatistics[Math.round(index / 2)-1].classList.remove('current-statistic');
		allStatistics[Math.round(index / 2)].classList.add('current-statistic');
    }
    if(index % 2 == 0 && index !== 0)
    {
    	allStatisticsText[Math.round(index / 2)].classList.add(`statisticIntervalDelete${index}`);
    	allStatistics[Math.round(index / 2)-1].classList.remove('current-statistic');
		allStatistics[Math.round(index / 2)].classList.add('current-statistic');	
    }

    index++;
    
    timeoutLoop(index);
  }, timeouts[index]);
}

const statisticObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			if(!incrementAnimRun)
			{
				incrementNum();
				timeoutLoop(0);
			}
			
		}
		
	})
})

statisticObserver.observe(statisticsSection);

function incrementNum()
{


	let startNum = 25000;
	let maxNumber = 100000;
	incrementAnimRun = true;
	let intervalAdd = setInterval(() => {
	  
	  if(startNum >= maxNumber) 
	  {
	    clearInterval(intervalAdd);
	    allStatisticsNum[0].innerHTML = '100,000+';
	  } 
	  else 
	  {
	    startNum += 531;
	    allStatisticsNum[0].innerHTML = `${startNum}+`;
	  }
	}, 10);

}

