// 1 часть

const subFrom = document.querySelector('#subscribe-form');

subFrom.addEventListener('submit', function (event) {
  event.preventDefault();

  if (subFrom.checkValidity()) {
    const userEmail = subFrom.nextElementSibling.email.value;
    console.log({ email: userEmail });
    subFrom.reset();
  }
});

// 2 часть

const modalContainer = document.querySelector('#modal-container');
const openButton = document.querySelector('#open-modal-btn');
const closeButton = document.querySelector('.close-btn')
const overlay = document.querySelector('.overlay')

openButton.addEventListener('click', function () {
  modalContainer.classList.add('modal-showed');
});

const closeModal = function () {
  modalContainer.classList.remove('modal-showed');
};

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 3 часть

const regForm = document.querySelector('#registration-form');
let user = null;

regForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const { elements } = regForm;

  const password = elements.password.value;
  const confirmPassword = elements.confirmPassword.value;

  if (password !== confirmPassword) {
    alert('Регистрация отклонена: пароли не совпадают!');
    return;
  }
  if (regForm.checkValidity()) {
    const formDataObj = Object.formEntries(new FormData(regForm));
    user = {
      ...formDataObj,
      createdOn: new Date()
    };
    console.log('Успешная регистрация!', user);
    closeModal();
    regForm.reset();
  }
});