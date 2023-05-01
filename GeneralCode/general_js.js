// BACKUP BUTTON

const backupButtons = document.querySelectorAll('.backup-button');
const backUpButton = document.querySelector('.backup-div');
const actualBackupButton = document.querySelector('.backup-button');
buttonMoved = false;
const endSectionStart = document.querySelector('.end-section-start');
const endSection = document.querySelector('.end-section');
const backupButtonStart = document.querySelector('.backup-start');

window.addEventListener('scroll', () => {
    
	let {scrollTop} = document.documentElement;
	let top = backupButtonStart.offsetTop;

	if (scrollTop >= top) 
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
	  dezactivate_backupButton(button);
	});
})

function dezactivate_backupButton(button)
{
	button.classList.add('backup-button-inactive');
	setTimeout(() =>
	{
		button.classList.remove('backup-button-inactive');
	}, 1000);
}

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
	  let buttonHeight = actualBackupButton.offsetHeight;

    offsetStartEndSect = offsetStartEndSect + endStartHeight - buttonHeight;

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

// Tablet Haburger Menu

const hamburgerMenuDiv = document.querySelector('.hamburger-menu-div');
const tabletNav = document.querySelector('.tablet-nav');
const tabletOverlay = document.querySelector('.tablet-overlay');
let hamburgerMenuDivClicked = false;

window.addEventListener('resize', () =>
{
	if(window.innerWidth > 900 || window.innerWidth < 510)
	{
		tabletNav.classList.remove('show-tablet-nav');
		tabletOverlay.classList.remove('show-tablet-overlay');
		hamburgerMenuDivClicked = false;
		hamburgerMenuDiv.classList.remove('intoX');
	}
	
})

hamburgerMenuDiv.addEventListener('click', () =>
{
	if(!hamburgerMenuDivClicked)
	{
		tabletNav.classList.add('show-tablet-nav');
		tabletOverlay.classList.add('show-tablet-overlay');
		hamburgerMenuDivClicked = true;
		hamburgerMenuDiv.classList.add('intoX');
	}
})

tabletOverlay.addEventListener('click', () =>
{
	if(hamburgerMenuDivClicked)
	{
		tabletNav.classList.remove('show-tablet-nav');
		tabletOverlay.classList.remove('show-tablet-overlay');
		hamburgerMenuDivClicked = false;
		hamburgerMenuDiv.classList.remove('intoX');
	}
})