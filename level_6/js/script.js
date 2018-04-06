let openBtn = document.getElementById('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],
    
    goodsItem = document.getElementsByClassName('goods-item'),
    goods_button = document.getElementsByTagName('button')[1],
    budget_button = document.getElementsByTagName('button')[2],
    employers_button = document.getElementsByTagName('button')[3],
    choseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudgetValue = document.querySelector('.count-budget-value'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');




let budget,
    price;
//2 

openBtn.addEventListener('click', () => {
	 budget = prompt("Ваш бюджет?");
 while(isNaN(budget) || budget == "" || budget == null){
    budget = prompt("Ваш бюджет?");
}

 budgetValue.textContent = budget;
 
 nameValue.textContent = prompt("Название Вашего магазина","").toUpperCase();
 
});


goods_button.addEventListener('click', () => {
    for(let i = 0; i < goodsItem.length; i++){
 	let a = goodsItem[i].value;
 	
     if((typeof(a)) == 'string' && (typeof(a)) !== 'null' && a.length < 50){
     	console.log("Все верно!")
     	mainList.shopGoods[i] = a;
     	goodsValue.textContent = mainList.shopGoods;
     } else{
         alert("Неправильно введен товары");
         i=i-1;
     }
 
 }

});


choseItem.addEventListener('change', () => {
    	let items = choseItem.value;
   	if(isNaN(items) && items != ''){
      mainList.shopItems = items.split(",");
   	  mainList.shopItems.sort();

   	  itemsValue.textContent = mainList.shopItems;
   	}
       
});

timeValue.addEventListener('change', () =>{
	let time = timeValue.value;
    if(time < 0){
	  console.log("Не может быть");
	   mainList.open = false;
} else if(time > 8 && time < 20){
	console.log("Время работать");
	mainList.open = true;
    } else if (time < 24){
    	console.log("Уже слишком поздно!");
        mainList.open = false;

    } else{
    	console.log("В сутках только 24 часа!");
    	mainList.open = false;

    }

    if (mainList.open == true) {
    	isopenValue.style.backgroundColor = 'green';
    } else {
    	 isopenValue.style.backgroundColor = 'red';

    }
});

budget_button.addEventListener('click', () => {
 
 countBudgetValue.value = budget / 30;

});

employers_button.addEventListener('click', () =>{

  for(let i = 0; i < hireEmployersItem.length; i++){
   	let name = hireEmployersItem[i].value;
     mainList.employer[i] = name;
 
    employersValue.textContent += mainList.employer[i] + ', ';
   }

});

const mainList = {
     shopGoods: [],
   employer: {  },
   open: false,
   discount: true,
   shopItems: [],
   systemDiscount: function systemDiscount(price) {
	if(mainList.discount == true){
      price = price / 100 * 80;
      alert("Цена со скидкой: " + price);
	}
	else{
		alert("Сорян");
	}
	
}

}
   

   
