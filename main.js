var bulbasaur = document.getElementById("bulba");
// console.log("bulbasaur");
bulbasaur.addEventListener('click', function(){
	console.log("bulbasaur");
	bulbasaur.classList.remove("bulbasaur");
	bulbasaur.classList.add("bul");
})

var charmander = document.getElementById("charm");
charmander.addEventListener('click',function(){
	charmander.classList.remove("charmander");
	charmander.classList.add("charm")
})

var Squi = document.getElementById("Squir");
Squi.addEventListener('click',function(){
	Squi.classList.remove("Squirtle");
	Squi.classList.add("Squir")
})