let submitButton = document.querySelector('.form-send-button');
let form = document.querySelector('.form');
let FormButtonIconAnimDiv = document.querySelector('.form-button-icon-anim-div');
let formButtonIcon = document.querySelector('.form-button-icon');
let formButtonText = document.querySelector('.form-button-text');

let emailField = document.querySelector('#email-input-text');
let nameField = document.querySelector('#name-input-text');
let messageField = document.querySelector('#message-input-text');

let errorIcon = document.querySelector('.form-button-icon-error');

// INITIAL DELETE TEXT | Firefox

emailField.value = '';
nameField.value = '';
messageField.value = '';


function sendEmail()
{

	let params = {

		from_name:nameField.value,
		email_id:emailField.value,
		message:messageField.value,
		}

	const serviceId = "service_88ujibk";
	const templateId = "template_42znn8c";
	emailjs.send(serviceId,templateId,params).then(res => {
		nameField.value = "";
		emailField.value = "";
		messageField.value = "";
		formInputs.forEach((input) =>
		{
			if(input.value.trim() == '')
			{
				input.previousElementSibling.children[1].style.display = 'initial';
			}
		})
		if(formDescription.value.trim() == '')
		{
			formDescription.previousElementSibling.children[1].style.display = 'initial';
		}
	})
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function runSuccesAnim()
{
	submitButton.classList.add('submit-animation');
	formButtonIcon.classList.add('content-dissapear');
	formButtonText.classList.add('content-dissapear');
	FormButtonIconAnimDiv.classList.add('show-icon-anim-div');
}
function runErrorAnim()
{
	submitButton.classList.add('error-animation');
	formButtonIcon.classList.add('content-dissapear');
	formButtonText.classList.add('content-dissapear');
	errorIcon.classList.add('show-form-button-icon-error');
}
// Animatie


form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log(isValidEmail(emailField.value));
	console.log(emailField.value);
  if (form.checkValidity() && isValidEmail(emailField.value)) 
  {
  	runSuccesAnim();
  	sendEmail()
  }
  else
  {
  	runErrorAnim();
  }
});


// Sa dispara textu din inputuri cand apesi pe un input :)
let formInputs = document.querySelectorAll('.form-input');
let formDescription = document.querySelector('.form-input-description');

formInputs.forEach(input =>
{
	input.addEventListener('focus', () =>
	{
		input.previousElementSibling.children[1].style.display = 'none';
	})
	input.addEventListener('blur', () =>
	{
		if(input.value.trim() == '')
		{
			input.previousElementSibling.children[1].style.display = 'initial';
		}
		
	})
})

formDescription.addEventListener('focus', () =>
{
	formDescription.previousElementSibling.children[1].style.display = 'none';
})
formDescription.addEventListener('blur', () =>
{
	if(formDescription.value.trim() == '')
	{
		formDescription.previousElementSibling.children[1].style.display = 'initial';
	}
})


// FAQ

const faqs = document.querySelectorAll('.faq');
const faqIcons = document.querySelectorAll('.faq-icon');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqs.forEach(faq =>
{
	faq.addEventListener('click', () =>
	{
		remove_currentFAQ();
		faq.children[0].children[1].classList.add('current-faq-icon');

		faq.children[1].classList.add('expand-answer');

	})
})

function remove_currentFAQ()
{
	faqAnswers.forEach(answer =>
	{
		if(answer.classList.contains('expand-answer'))
		{
			answer.classList.remove('expand-answer');
		}
	})
	faqIcons.forEach(icon =>
	{
		if(icon.classList.contains('current-faq-icon'))
		{
			icon.classList.remove('current-faq-icon');
		}
	})
}


// RANDOM CURRENT FAQ 

choose_currentFAQ();

function choose_currentFAQ()
{
	let totalFAQ = faqs.length;
	let randomNum = Math.floor(Math.random() * totalFAQ);
	

	faqAnswers[randomNum].classList.add('expand-answer');
	faqIcons[randomNum].classList.add('current-faq-icon');
}