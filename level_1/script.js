//1
// var budget = prompt("Ваш бюджет?");
// var nameShop = prompt("Название Вашего магазина");

//2 
var mainList = {};
var shopGoods = [];

mainList = {
   
   budget: 1000,
   nameShop: "Глобус",
   shopGoods: ['ручка', 'книга', 'тетрадь'],
   employer: {

   	seller: "Кассир",
   	oxrana: "Охранник"

   },
   open: true

}
 
//3
var typeTovar_1 = prompt("Какой товар будем продавать?");
var typeTovar_2 = prompt("Какой товар будем продавать?");
var typeTovar_3 = prompt("Какой товар будем продавать?");

shopGoods = [typeTovar_1, typeTovar_2, typeTovar_3];

// 4
alert(+(budget) / 30);


