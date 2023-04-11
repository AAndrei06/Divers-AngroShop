
// const downAnimationObserver = new IntersectionObserver((entries) =>
// {
// 	entries.forEach((entry) =>
// 	{
// 		if(entry.isIntersecting)
// 		{
// 			entry.target.classList.add("down-up-anim");
// 		}

		
// 	})
// })

// const downElements = document.querySelectorAll('.down-up-preset');

// downElements.forEach((el) =>
// {
// 	downAnimationObserver.observe(el);
// })

// // BACKUP BUTTON

const backupButtons = document.querySelectorAll('.backup-button');
const backUpButton = document.querySelector('.backup-div');
buttonMoved = false;
const endSectionStart = document.querySelector('.end-section-start');
const endSection = document.querySelector('.end-section');

window.addEventListener('scroll', () => {
    
	let scrollPercent = getScrollPercent();

	if (scrollPercent >= 37) 
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

// // Cand vede ultima sectiune sa dispara

function getScrollPercent()
{
  const {scrollTop, scrollHeight} = document.documentElement;

  const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100;

  return scrollPercent;
}

function get_buttonCoordinates()
{
		let offsetStartEndSect = endSectionStart.offsetTop;
	  let endStartHeight = endSectionStart.offsetHeight;
    let styles = window.getComputedStyle(endSectionStart);
    let endStartMargin = parseFloat(styles.marginTop);

    offsetStartEndSect = offsetStartEndSect + endStartHeight / 4.5 + endStartMargin;

    return offsetStartEndSect;
}

function setBackupButton()
{
			offsetStartEndSect = get_buttonCoordinates();
      
      backupbuttontopVar = offsetStartEndSect + 'px';

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

  	offsetStartEndSect = get_buttonCoordinates();

    if(entry.isIntersecting && buttonMoved == false)
    {
      setBackupButton();
    }
    if(!entry.isIntersecting && buttonMoved == true && scrollTop <= offsetStartEndSect)
    {
      unsetBackupButton();
    }
  
  })
})



backUpbuttonObserver.observe(endSection);


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