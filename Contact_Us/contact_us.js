// Rezolva Bug-ul unde descrierea are deja spatiu in ea
const contactDescription = document.querySelector('.description-input');

contactDescription.value = '';


//Cand apesi pe Trimite sa iti arate diferite popup-uri, sa dispara daca de duci sus de tot sau apesi pe X sau daca trec 5 secunde

const emailSendSuccesPopup = document.querySelector('.succes-popup');
const xButtonOfemail = document.querySelector('.x-at-the-end-of-flex');
const emailForm = document.querySelector('.contact-form');
const succesPopupMessage = document.querySelector('.succes-popup-message');
const emailInputs = document.querySelectorAll('.input-user');
const subjectInput = document.querySelector('.subject-input');
const submitDiv = document.querySelector('.submit-div');
let submitButton = document.querySelector('.submit-button');
let sendIcon;

let changeValuestimeout;
let changeValuestimeout02;

xButtonOfemail.addEventListener('click', (e) => {
    emailSendSuccesPopup.classList.remove("show-popup");
})

function clearInfo() {
  subjectInput.value = '';
  contactDescription.value = '';
  emailInputs.forEach(e => 
   {
	    e.value = '';
   })
}

function setchangeValuesTimeout() {
    
    clearTimeout(changeValuestimeout);
    clearTimeout(changeValuestimeout02);
    
    changeValuestimeout = setTimeout(() => {
        submitButton.innerHTML = '<span class="submit-text">Trimite</span> <span class="send-icon">></span>';
        emailSendSuccesPopup.classList.remove("show-popup");
        transformed = false;
    }, 3000);

    
    
    changeValuestimeout02 = setTimeout(() => {
        emailSendSuccesPopup.style.backgroundColor = 'var(--fourthGreen)';
        succesPopupMessage.innerHTML = 'Email trimis cu succes!';
    }, 10000);

    setTimeout(clearInfo, 3000);
    setTimeout(() =>
    {
        submitDiv.style.pointerEvents = 'all';
        submitDiv.style.cursor = 'pointer';

        emailSendSuccesPopup.style.backgroundColor = 'var(--fourthGreen)';
        xButtonOfemail.style.color = 'var(--secondDark)';
        succesPopupMessage.style.color = 'var(--secondDark)';
    }, 3000);

}

submitButton.addEventListener('click', (e) => {
    
        if (emailForm.checkValidity()) 
        {
            emailSendSuccesPopup.classList.add("show-popup");
            submitButton.innerHTML = 'Succes';
        } 
        else 
        {
            emailSendSuccesPopup.classList.add("show-popup");
            emailSendSuccesPopup.style.backgroundColor = 'var(--thirdDark)';
            xButtonOfemail.style.color = 'var(--fourthGreen)';
            succesPopupMessage.style.color = 'var(--fourthGreen)';
            submitButton.innerHTML = 'Erroare';
            succesPopupMessage.innerHTML = 'Am detectat o problema';
        }
        submitDiv.style.pointerEvents = 'none';
        transformed = true;


        setchangeValuesTimeout();
    
        
    }

)


submitButton.addEventListener('mouseover', () =>
{
    sendIcon = document.querySelector('.send-icon');
    sendIcon.innerHTML = '-->';
})


submitButton.addEventListener('mouseout', () =>
{
    try
    {
        sendIcon = document.querySelector('.send-icon');
        sendIcon.innerHTML = '>';

    }
    catch
    {

    }
    
})

