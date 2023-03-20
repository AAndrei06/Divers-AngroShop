// Cand vede o sectiunea o arata cu animatie

const observer = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("show");	
		}
		
	})
})

const headerObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("intersect");
		}

		
	})
})

const downAnimationObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("down-up-anim");
		}

		
	})
})

const staggerAnimationObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{
		if(entry.isIntersecting)
		{
			entry.target.classList.add("stagger-animation");
		}

		
	})
})

// const staggerAnimationRightObserver = new IntersectionObserver((entries) =>
// {
// 	entries.forEach((entry) =>
// 	{
// 		if(entry.isIntersecting)
// 		{
// 			entry.target.classList.add("stagger-right-animation");
// 		}

		
// 	})
// })

const hiddenHeaders = document.querySelectorAll('.header');

const hiddenElements = document.querySelectorAll('.hidden');

const downElements = document.querySelectorAll('.down-up-preset');

const leftStaggerElements = document.querySelectorAll('.stagger-animation-staged');

// const rightStaggerElements = document.querySelectorAll('.stagger-right-animation-staged');

hiddenElements.forEach((el) =>
{
	observer.observe(el);
})

hiddenHeaders.forEach((el) =>
{
	headerObserver.observe(el);
})

downElements.forEach((el) =>
{
	downAnimationObserver.observe(el);
})

leftStaggerElements.forEach((el) =>
{
	staggerAnimationObserver.observe(el);
})

// rightStaggerElements.forEach((el) =>
// {
// 	staggerAnimationRightObserver.observe(el);
// })
// FUZZ LA TEXT

let scrolling = false;
timeoutfromscrollingforgreentext = false;

const greenTexts = document.querySelectorAll('.green-text');

function start_glow_from_green_text_timeout(greenText) {
	
	 scrollTimeout = setTimeout(() => {

	  	scrolling = false;
	  	greenText.style.textShadow = 'none';
	  	timeoutfromscrollingforgreentext = true;
	    
	  }, 100)
}

greenTexts.forEach(greenText =>
{
	document.addEventListener('scroll', () => {
	  
	  if(!scrolling)
	  {
	  	greenText.style.textShadow = '0px 0px 0.15em var(--superlightGreen)';
	  }


	  start_glow_from_green_text_timeout(greenText);
	  
	 
	})
})

// BACKUP BUTTON

const backupButtons = document.querySelectorAll('.backup-button');
const backUpButton = document.querySelector('.backup-div');
const createdBackupDiv = document.querySelector('#created-backup-div');
const createdBackupButton = document.querySelector('#created-backup-button');
const endSection =  document.querySelector('.end-section');
const endSectionStart = document.querySelector('.end-section-start')
buttonMoved = false;

let setbuttontimeout;
clearTimeout(setbuttontimeout);
unsetBackupButton();
const {scrollTop} = document.documentElement;
const scrollpixels = Math.round(scrollTop);

let offsetStartEndSect = endSectionStart.offsetTop;

if(scrollpixels >= offsetStartEndSect)
{
	setBackupButton();
}
//Backup Button elimina buguri

window.addEventListener("resize", () =>
{
  clearTimeout(setbuttontimeout);
  unsetBackupButton();
  
  const {scrollTop} = document.documentElement;
  const scrollpixels = Math.round(scrollTop);

  let offsetStartEndSect = endSectionStart.offsetTop;

  if(scrollpixels >= offsetStartEndSect)
  {
    setBackupButton();
  }
})
  


window.addEventListener('scroll', () => {
    
	let scrollPercent = getScrollPercent();


	if (scrollPercent >= 23) 
	{
		backUpButton.classList.add('display-backup-button-div');
	}
	else
	{
		backUpButton.classList.remove('display-backup-button-div');
	}
})

// Cand apesi te duce sus 
backupButtons.forEach(button =>
{
	button.addEventListener('click', () => {
	  window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	  });
	});
})

// Cand vede ultima sectiune sa dispara

function getScrollPercent()
{
  const {scrollTop, scrollHeight} = document.documentElement;

  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100;

  return scrollPercent;
}
function setBackupButton()
{
      let BackupBttnSectionRect = endSectionStart.offsetTop;
      let backupOffset = window.innerWidth / 15;
      BackupBttnSectionRect = BackupBttnSectionRect - backupOffset;
      backupbuttontopVar = BackupBttnSectionRect + 'px';

      backUpButton.classList.add('postion-backup-button-div');
      backUpButton.style.setProperty('--top', backupbuttontopVar);

      buttonMoved = true;
}

function unsetBackupButton()
{
      backUpButton.classList.remove('postion-backup-button-div');
      buttonMoved = false;
}



const backUpbuttonObserver = new IntersectionObserver((entries) =>
{
	entries.forEach((entry) =>
	{

		const {scrollTop} = document.documentElement;
  	const scrollpixels = Math.round(scrollTop);

		let offsetStartEndSect = endSectionStart.offsetTop;

    if(entry.isIntersecting && buttonMoved == false)
    {
      setBackupButton();
    }
    if(!entry.isIntersecting && buttonMoved == true && scrollpixels <= offsetStartEndSect)
    {
      unsetBackupButton();
    }
  
  })
}
)


backUpbuttonObserver.observe(endSectionStart);
