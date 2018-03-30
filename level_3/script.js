
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
 nameShop = prompt("Название Вашего магазина").toUpperCase();
 time = 19;



}
start();


let mainList = {
   
   budget: budget,
   nameShop: nameShop,
   shopGoods: [],
   employer: {  },
   open: false,
   discount: true
}
 
 function chooseGoods(){
 for(let i=0; i<5; i++){
 	let a = prompt("Какой товар будем продавать?");
 	
     if((typeof(a)) == 'string' && (typeof(a)) !== 'null' && a !== '' && a.length < 50){
     	console.log("Все верно!")
     	mainList.shopGoods[i] = a;
     } else{
         alert("Неправильно введен товары");
         mainList.shopGoods[i] = prompt("Введите правильно название товара!");
     }
 
 }
 }

function workTime(time){
if(time < 0){
	console.log("Не может быть");
} else if(time > 8 && time < 20){
	console.log("Время работать");
    } else if (time < 24){
    	console.log("Уже слишком поздно!");
    } else{
    	console.log("В сутках только 24 часа!");
    }
  }

workTime(19);
// let i = 0;
//  while(i<5){
//  	let a = prompt("Какой товар будем продавать?");
//  	   if((typeof(a)) == 'string' && (typeof(a)) !== 'null' && a !== '' && a.length < 50){
//      	console.log("Все верно!")
//      	mainList.shopGoods[i] = a;
//      	i++;
//      } else{
//          alert("Неправильно введен товары");
//      }

//  }

// let k = 0;
//  do{
//  	let a = prompt("Какой товар будем продавать?");
//  	   if((typeof(a)) == 'string' && (typeof(a)) !== 'null' && a !== '' && a.length < 50){
//      	console.log("Все верно!")
//      	mainList.shopGoods[k] = a;
//      	k++;
//      } else{
//          alert("Неправильно введен товары");
//      }
//  } while(k < 5);


function dayBudget(){
   alert("Ваш бюджет на одни день: " + mainList.budget / 30);
}

//dayBudget();

function systemDiscount(price) {
	if(mainList.discount == true){
      price = price / 100 * 80;
      alert("Цена со скидкой: " + price);
	}
	else{
		alert("Сорян");
	}
	
}

//systemDiscount(90);
 
function employmentEmploers(){

   for(let i = 1; i < 5; i++){
   	let a = prompt("Введите имя сотрудника");
     mainList.employer[i] = a;
 
   }
}

employmentEmploers();


console.log(mainList);


