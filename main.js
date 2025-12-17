
// Задача проект личный кабинет
// пользователь может зарегистрироваться на странице сайта
// вводит пароль и логин
// если такой пользователя нет в вашем массиве пользователей 
// то запишите в локал сторедж его данные об авторизации
// если в лк есть запись о пользователе значит он авторизован
// и показывает ему личный кабинет
// к кибенете выводятся его данные имя логин
// также должна быть кнопка выхода
// при нажатии на нее удаляем пользователя в лк и он снова видит форму входа

let users = [
    {
        login: "111",
        password: "111"
    },

    {
        login: "222",
        password: "222"
    },
];

const title = document.createElement("h1");
title.textContent = "🎄 Новогодний вход 2026 ❄️";
title.style.color = "#ffffff";
title.style.textShadow = "0 0 10px rgba(255,255,255,0.5), 0 0 20px #e74c3c";
title.style.marginBottom = "20px";
title.style.fontSize = "2.5rem";
title.classList.add("blink-title")



const div_vhod = document.createElement("div")
div_vhod.classList = "enter"

const login = document.createElement("input")
login.placeholder = "Введите логин"
login.id = "login"
login.classList = "enter_inputs"

const password = document.createElement("input")
password.placeholder = "Введите пароль"
password.type = "password"
password.id = "password"
password.classList = "enter_inputs"


const button_vhod = document.createElement("button")
button_vhod.classList = "vhod"
button_vhod.id = "button_vhod"
button_vhod.textContent = "🎅 Войти"

button_vhod.addEventListener("click", () => {
    const inputlogin = login.value;
    const inputpassword = password.value;

    const foundUser = users.find(user => user.login === inputlogin && user.password === inputpassword);
    if (foundUser) {
        alert("Вход выполнен успешно!");
        div_vhod.style.display = "none"; // Скрываем, но не удаляем
        create_lc(foundUser);

    } else {
        alert("Неверный логин или пароль!");
    }

})

const registr = document.createElement("button")
registr.classList = "registr"
registr.id = "registracia"
registr.textContent = "🎁 Регистрация"

registr.addEventListener("click", () => {
    const addlogin = login.value;
    const addpassword = password.value;
    if (addlogin && addpassword) {
        users.push({
            login: addlogin,
            password: addpassword
        })
        localStorage.setItem("users", JSON.stringify(users));

        alert("пользователь добавлен и сохранен!")
        console.log("Текущая база в LS:", JSON.parse(localStorage.getItem("users")));

        login.value = ""
        password.value = ""
    } else {
        alert('Заполните оба поля!');
    }
})




div_vhod.appendChild(title)
div_vhod.appendChild(login)
div_vhod.appendChild(password)
div_vhod.appendChild(button_vhod)
div_vhod.appendChild(registr)
document.body.appendChild(div_vhod)




function create_lc(userData) {
    const div_personal_account = document.createElement("div")
    div_personal_account.classList = "personal_account"

    const personal_account_data = document.createElement("div")
    personal_account_data.classList = "personal_account_data"
    personal_account_data.textContent = "🎄 C наступающим 2026 годом! 🎄";


    const personal_account_login = document.createElement("div")
    personal_account_login.classList = "personal_account_login"
    personal_account_login.textContent = `Ваш логин: ${userData.login}`

    const personal_account_password = document.createElement("div")
    personal_account_password.classList = "personal_account_password"
    personal_account_password.textContent = `Ваш пароль: ${userData.password}`

    const button_exit = document.createElement("button")
    button_exit.classList = "button_exit"
    button_exit.textContent = "Выход"
    button_exit.addEventListener("click", () => {
        div_personal_account.remove();    
        div_vhod.style.display = "block"; 
        login.value = "";
        password.value = "";

    })

    div_personal_account.appendChild(personal_account_data)
    personal_account_data.appendChild(personal_account_login)
    personal_account_data.appendChild(personal_account_password)
    div_personal_account.appendChild(button_exit)
    document.body.appendChild(div_personal_account)
}



const usersJSON = JSON.stringify(users);
localStorage.setItem('usersList', usersJSON);

function read_localstorage(params) {
    const storedUsersString = localStorage.getItem('usersList');
    const storedUsersArray = JSON.parse(storedUsersString);
}
function createSnow() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄';
    setupFallingElement(snowflake, '10px 20px', 3000, 6000);
}

// Новая функция создания падающих елок
function createFallingTree() {
    const tree = document.createElement('div');
    const treeEmojis = ['🎄', '🌲', '🎁', '🌟']; 
    tree.innerHTML = treeEmojis[Math.floor(Math.random() * treeEmojis.length)];
    // Елки будут крупнее и падать чуть дольше
    setupFallingElement(tree, '20px 40px', 5000, 10000); 
}

// Вспомогательная функция для настройки общего поведения падения
function setupFallingElement(element, fontSizeRange, duration, timeout) {
    element.style.position = 'fixed';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = '-50px'; // Начинаем падение выше экрана
   element.style.opacity = Math.random() * 0.6;
    
    // Генерируем случайный размер из диапазона
    const minSize = parseInt(fontSizeRange.split(' ')[0]);
    const maxSize = parseInt(fontSizeRange.split(' ')[1]);
    element.style.fontSize = Math.random() * (maxSize - minSize) + minSize + 'px';
    
    element.style.zIndex = '1000';
    element.style.pointerEvents = 'none';
    document.body.appendChild(element);

    // Анимация падения
    element.animate([
        { transform: 'translateY(0vh)' },
        { transform: 'translateY(110vh)' } // Падение за пределы видимости
    ], {
        duration: Math.random() * duration + duration, // Случайная скорость
        easing: 'linear',
    });

    // Удаляем элемент после завершения падения
    setTimeout(() => {
        element.remove();
    }, timeout);
}


setInterval(createSnow, 200);        
setInterval(createFallingTree, 800);

setInterval(createSnow, 200);

