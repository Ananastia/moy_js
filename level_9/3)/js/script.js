let age = document.getElementById('age');

let User = {

	surname: "Иванов",
	name: "Иван",
	value: age.value
};
 
function showUser(surname, name) {
	    
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
}
 
showUser.call(User);