function myFunction() { /*dark mode*/
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Query for the button with the id 'sign-now-button' and assign it to the variable 'signNowButton'
const signNowButton = document.querySelector('#sign-now-button');

// Query for the signpetiton form and assign it to a variable called signatureForm
const signatureForm = document.querySelector('#sign-petition');


// Helper function to validate input fields and highlight them in red if they're invalid
// Helper function to validate input fields and highlight them in red if they're invalid
// Helper function to validate input fields and display a message if they're empty

// Helper function to validate input fields and show an error message if they're invalid
// Helper function to validate input fields and highlight them in red if they're invalid
const validateInput = (inputField, minLength = 1) => {
  if (inputField.value.trim().length < minLength) {
    inputField.style.borderColor = 'red';
    return false;
  } else {
    inputField.style.borderColor = '';
    return true;
  }
};






const validateEmail = (emailField) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailError = document.querySelector('#email-error');

  if (!emailPattern.test(emailField.value.trim())) {
    emailField.style.borderColor = 'red';
    emailError.style.display = 'block';
    return false;
  } else {
    emailField.style.borderColor = '';
    emailError.style.display = 'none';
    return true;
  }
};


let totalSignatures = 3;

const addSignature = (event) => {
  event.preventDefault();

  const fnameInput = document.querySelector('#fname');
  const lnameInput = document.querySelector('#lname');
  const hometownInput = document.querySelector('#hTown');
  const emailInput = document.querySelector('#eMail');

  const fnameValid = validateInput(fnameInput, 2);
  const lnameValid = validateInput(lnameInput, 2);
  const hometownValid = validateInput(hometownInput, 2);
  const emailValid = validateEmail(emailInput);

  if (!fnameValid || !lnameValid || !hometownValid || !emailValid) {
    return;
  }

  const newSignature = document.createElement('p');
  newSignature.innerHTML = `🖊️ ${fnameInput.value} ${lnameInput.value} from ${hometownInput.value} supports this.`;

  const signaturesSection = document.querySelector('.signatures');
  const counterElement = document.querySelector('#counter');

  signaturesSection.insertBefore(newSignature, counterElement);

  const numberOfSignatures = signaturesSection.getElementsByTagName('p').length - 1;
  counterElement.innerHTML = `🖊️ ${numberOfSignatures} people have signed this petition and support this cause.`;

  signatureForm.reset();

  showModal(fnameInput.value, lnameInput.value, hometownInput.value);

};




const showModal = (firstName, lastName, hometown) => {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');
  const modalImage = document.getElementById('modal-image');
  const closeButton = document.getElementById('close-button');

  modalText.innerHTML = `Thank you ${firstName} ${lastName} from ${hometown} for signing the petition!`;
  modal.style.display = 'block';



  // Hide the modal after 3 seconds
  setTimeout(() => {
    modal.style.display = 'none';
  }, 3000);

  // Add an event listener for the close button
  closeButton.onclick = () => {
    modal.style.display = 'none';
  };
};



// Add a click event listener to the 'sign now' button
signatureForm.addEventListener('click', addSignature);



//Fade in out 
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  let motionEnabled = true;

  const observer = new IntersectionObserver((entries) => {
    if (!motionEnabled) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  });

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  window.toggleMotion = function() {
    motionEnabled = !motionEnabled;
    if (motionEnabled) {
      fadeInElements.forEach((element) => {
        observer.observe(element);
      });
    } else {
      fadeInElements.forEach((element) => {
        observer.unobserve(element);
        if (!element.classList.contains("visible")) {
          element.classList.add("visible");
        }
      });
    }
  }
});



