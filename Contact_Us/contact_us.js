let submitButton = document.querySelector('.form-send-button');
let form = document.querySelector('.form');
let FormButtonIconAnimDiv = document.querySelector('.form-button-icon-anim-div');
let formButtonIcon = document.querySelector('.form-button-icon');
let formButtonText = document.querySelector('.form-button-text');



submitButton.addEventListener('click', (e) =>
{
	e.preventDefault();
	submitButton.classList.add('submit-animation');
	formButtonIcon.classList.add('content-dissapear');
	formButtonText.classList.add('content-dissapear');
	FormButtonIconAnimDiv.classList.add('show-icon-anim-div');
})







let formInputs = document.querySelectorAll('.form-input');
let formDescription = document.querySelector('.form-input-description');

formInputs.forEach(input =>
{
	input.addEventListener('focus', () =>
	{
		input.previousElementSibling.style.display = 'none';
	})
	input.addEventListener('blur', () =>
	{
		input.previousElementSibling.style.display = 'flex';
	})
})

formDescription.addEventListener('focus', () =>
{
	formDescription.previousElementSibling.style.display = 'none';
})
formDescription.addEventListener('blur', () =>
{
	formDescription.previousElementSibling.style.display = 'flex';
})