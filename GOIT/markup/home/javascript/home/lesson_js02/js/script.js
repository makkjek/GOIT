var arr = [];
for (var i = 0; i < 5; i++) {
    arr.push (prompt ( 'Введите Имя!',''));
}
var enterName = prompt ("Введите Имя Пользователя!",'');
if (arr.indexOf(enterName) != -1) {
    console.log("Вы вошли как:" +enterName+ "!");
} else {
    console.log("Такого пользователя не существует!");
    ['Макс', 'Катя', 'Лана', 'Оля', 'Оксана'].indexOf('лана');
}
