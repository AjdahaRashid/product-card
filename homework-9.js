// 1 часть

const subFrom = document.querySelector('#subscribe-form');
const emailInput = document.querySelector('#subscribe-email');
subFrom.addEventListener('submit',function(event) {
  event.preventDefault();
  if (subFrom.checkValidity()) {
    const userEmail = emailInput.value;
    console.log({email:userEmail});
  }
})

// 2 часть

const modalContainer = document.querySelector('#modal-container');
const openButton = document.querySelector('#open-modal-btn');
const closeButton = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')

openButton.addEventListener('click', function() {
  modalContainer.classList.add('modal-showed');
});

const closeModal = function() {
  modalContainer.classList.remove('modal-showed');
};

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 3 часть

const regForm = document.querySelector('#registration-form');
let user = null;

regForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.querySelector('#reg-password').value;
  const confirmPassword = document.querySelector('#reg-password-confirm').value;

  if (password !== confirmPassword) {
    alert('Регистрация отклонена: пороли не совпадают!');
    return;
  }
  if (regForm.checkValidity()) {
    user = {
      firstName: regForm.querySelector('[name="firstName"]').value,
      lastName: regForm.querySelector('[name="lastName"]').value,
      login: regForm.querySelector('[name="login"]').value,
      createdOn: new Date()
    };
    console.log('Успешная регистрация!', user);
    closeModal();
    regForm.reset();
  }
});