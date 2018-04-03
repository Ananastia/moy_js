let menuItem = document.getElementsByClassName('menu-item'),
    adv = document.getElementsByClassName('adv')[0],
    column = document.getElementsByClassName('column')[1],
    titleId = document.getElementById('title'),
    promptId = document.getElementById('prompt'),
    parentItem = menuItem[1].parentNode,
    parentItem_1 = menuItem[3].parentNode,
    textPrompt;
   
parentItem.insertBefore(menuItem[2], menuItem[1]);

let li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
parentItem_1.insertBefore(li,null);
document.body.style.background = 'url(./img/apple_true.jpg) center no-repeat';
column.removeChild(adv);
titleId.textContent ='Мы продаем только подлинную технику Apple';

textPrompt = prompt("Ваше отношение к технки Apple?","");
promptId.textContent = textPrompt;