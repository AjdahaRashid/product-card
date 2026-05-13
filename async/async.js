const userContainer = document.getElementById('user-container');
const btnGet = document.getElementById('btn-get');
const btnDelete = document.getElementById('btn-delete');

const localData = localStorage.getItem('users');

if (localData === null) {
  userContainer.textContent = "Данные загружаются";
  setTimeout(() => {
    loadData();
  },2000);
} else {
  displayUsers(JSON.parse(localData));
}

async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error("Ошибка при загрузки");
    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data));
    displayUsers(data);
  } catch (error) {
    usersContainer.textContent = error.message;
  }
}


function displayUsers(users) {
  userContainer.innerHTML = ''
  if (users.length === 0) {
    userContainer.textContent = "Список пуст";
    return; 
  }
  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'user-card'

    card.innerHTML = `
    <h3> ${user.name} ${user.surname}</h3>
    <p>Возраст: ${user.age}</p>
    <p>Email: ${user.email}</p>
    <button class="delete-btn">Удалить</button>
    `;

card.querySelector('.delete-btn').onclick = () => {
  const currentUsers = JSON.parse(localStorage.getItem('users'));
  const filtered = currentUsers.filter(u => u.id !== user.id);
  localStorage.setItem('users', JSON.stringify(filtered));
  displayUsers(filtered);
};
userContainer.appendChild(card);
  });
};

btnGet.onclick = () => {
  localStorage.removeItem('users');
  userContainer.textContent = "Восстановления данных";
  loadData();
};

btnDelete.onclick = () => {
  localStorage.setItem('users', JSON.stringify([]));
  displayUsers([]);
};