
var budget = prompt("Ваш бюджет?");
var nameShop = prompt("Название Вашего магазина");
let time = 19;
//2 
var mainList = {};
var shopGoods = [];

mainList = {
   
   budget: budget,
   nameShop: nameShop,
   shopGoods: [],
   employer: {   },
   open: false

}
 
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



alert(mainList.budget / 30);

console.log(mainList);


