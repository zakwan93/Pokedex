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

var card1 = document.getElementById("mycard")

var bulbasaur_pokemon = axios.get("http://fizal.me/pokeapi/api/v2/name/bulbasaur.json")
.then(function (myResponse) {
	console.log(myResponse);
	var data = myResponse.data;
	var name = data.name;
	var height = data.height;
	var hp = data.stats[5].base_stat
	var attack = data.stats[1].base_stat
	var defence = data.stats[3].base_stat
	var abilities = data.abilities
	var myabilities = [];
	for (var i=0;i<abilities.length;i++){
		myabilities.push(abilities[i].ability.name)
	}
	var moves = data.moves
	// console.log(moves)
	var myMoves = [];
	for (var i=0;i<moves.length;i++){
			var topmoves = moves[i].move.name	
			if(topmoves.length <5){
				myMoves.push(topmoves)
			}
	}

	console.log(myMoves)
	// console.log(myMoves)
	// console.log(myabilities)
	// console.log(height);

	card1.innerHTML = 
	`<h3 class = "pl-5 ml-4">NAME - ${name}
	<h5 class = "pl-5 ml-4">HEIGHT - ${height}</h5>
	<h5 class = "pl-5 ml-4">HP - ${hp}</h5>
	<h5 class = "pl-5 ml-4">ATTACK - ${attack}</h5>
	<h5 class = "pl-5 ml-4">DEFENCE - ${defence}</h5>
	<h5 class = "pl-5 ml-4">TOP 5 MOVES - ${myMoves}</h5>
	<h5 class = "pl-5 ml-4">ABILITIES - ${myabilities}</h5>`

})