let submitButton = document.querySelector('.form-send-button');
let form = document.querySelector('.form');
let FormButtonIconAnimDiv = document.querySelector('.form-button-icon-anim-div');
let formButtonIcon = document.querySelector('.form-button-icon');
let formButtonText = document.querySelector('.form-button-text');


function sendEmail(){

	var params = {

		from_name:document.getElementById("name-input-text").value,
		email_id:document.getElementById("email-input-text").value,
		message:document.getElementById("message-input-text").value,
		}

	const serviceId = "service_88ujibk";
	const templateId = "template_42znn8c";
	emailjs.send(serviceId,templateId,params).then(res => {
		document.getElementById("name-input-text").value = "";
		document.getElementById("email-input-text").value = "";
		document.getElementById("message-input-text").value = "";
	})
}

// Animatie
submitButton.addEventListener('click', (e) =>
{
	e.preventDefault();
	submitButton.classList.add('submit-animation');
	formButtonIcon.classList.add('content-dissapear');
	formButtonText.classList.add('content-dissapear');
	FormButtonIconAnimDiv.classList.add('show-icon-anim-div');
	sendEmail();
})






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