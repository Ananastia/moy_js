
let budget,
    nameShop,
    time,
    price;
//2 


function start(){
 budget = prompt("Ваш бюджет?");
 while(isNaN(budget) || budget == "" || budget == null){
    budget = prompt("Ваш бюджет?");
}
 nameShop = prompt("Название Вашего магазина","").toUpperCase();
 time = 19;



}



let mainList = {
   budget: budget,
   nameShop: nameShop,
   shopGoods: [],
   employer: {  },
   open: false,
   discount: true,
   shopItems: [],
   chooseGoods:  function chooseGoods(){
 for(let i=0; i<5; i++){
 	let a = prompt("Какой товар будем продавать?","");
 	
     if((typeof(a)) == 'string' && (typeof(a)) !== 'null' && a !== '' && a.length < 50){
     	console.log("Все верно!")
     	mainList.shopGoods[i] = a;
     } else{
         alert("Неправильно введен товары");
         i--;
     }
 
 }
 },
    workTime: function workTime(time){
if(time < 0){
	console.log("Не может быть");
} else if(time > 8 && time < 20){
	console.log("Время работать");
	mainList.open = true;
    } else if (time < 24){
    	console.log("Уже слишком поздно!");
    } else{
    	console.log("В сутках только 24 часа!");
    }
  },
  dayBudget: function dayBudget(){
   alert("Ваш бюджет на одни день: " + mainList.budget / 30);
},
   systemDiscount: function systemDiscount(price) {
	if(mainList.discount == true){
      price = price / 100 * 80;
      alert("Цена со скидкой: " + price);
	}
	else{
		alert("Сорян");
	}
	
},
   employmentEmploers:  function employmentEmploers(){
   for(let i = 1; i < 5; i++){
   	let a = prompt("Введите имя сотрудника","");
     mainList.employer[i] = a;
 
   }
},
   chooseShopItems: function chooseShopItems(){

   	let items = prompt("Перечистите через запятую ваши товары", "");
   	if(typeof(items) == 'string' && (typeof(items)) !== 'null' && items !== ''){
      mainList.shopItems = items.split(",");
   	  mainList.shopItems.push(prompt("Подождите еще ", ""));
   	  mainList.shopItems.sort();
   	} else {
   	alert("Неверно введены товары!");
      let items = prompt("Перечистите через запятую ваши товары", "");
      mainList.shopItems = items.split(",");
   	  mainList.shopItems.push(prompt("Подождите еще ", ""));
   	  mainList.shopItems.sort();
   
   	}
    mainList.shopItems.forEach(function(item, i, shopItems){
    	
    		console.log("У нас вы можете купить " + ++i + ":" + item);
    		
    		
    })
   	
   },
   moyShop: function moyShop(){
   	console.log("Наш магазин включает в себя: ");
   	for(key in mainList){
     console.log(mainList[key]);
   	}
   }
}





