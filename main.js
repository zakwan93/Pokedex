// class Trainer{
// 	constructor(name,pokemon){
// 		this.name = name;
// 		this.pokemon = pokemon;
// 	}

// 	get(name){
// 		for(let i=0; i<this.pokemon.length; i++){
// 			let pokemonName = this.pokemon[i];
// 			if(pokemonName == name){
// 				return this.pokemon[i];
// 			}
// 		}
// 		return false;
// 	}
// }


class Pokemon{
	constructor(name,id,height,hp,attack,defence,abilities,moves){
		this.name = name;
		this.id = id;
		this.height = height;
		this.hp = hp;
		this.attack = attack;
		this.defence = defence;
		this.abilities = abilities;
		this.moves = moves;
	}
}

// Pokemon object
let myBulbasaur = new Pokemon('bulbasaur',1);
let myCharmander = new Pokemon('charmander',4);
let mySquirtle = new Pokemon('squirtle',7);

// Traier object
// let trainer = new Trainer("Zakwan",["bulbasaur","charmander","squirtle"])

// Axios call for each pokemon using name
function getPokemonStats(name,id){
	axios.get("http://fizal.me/pokeapi/api/v2/id/"+ id +".json")
	.then(function (myResponse){
		console.log(myResponse);
		// let myPokemon = trainer.get(name);
		// console.log(myPokemon)
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
				var topmoves = moves[i].move.name;	
				if(topmoves.length <5){
					myMoves.push(topmoves)
				}
			}
	})
}

// Funnction call for each pokemon with it's name
var bulbasaur = getPokemonStats('bulbasaur',1);
console.log(bulbasaur)
getPokemonStats("charmander",4);
getPokemonStats("squirtle",7);

// Grab the tag from HTML page 
let name = document.querySelector(".card-title")
let HTag = document.getElementsByTagName("h5");
let height = HTag[1];
let hp = HTag[2];
let attack = HTag[3];
let defecne = HTag[4];
let abilities = HTag[5];
let moves = HTag[6];

// Functionn to show data on HTML
function showStates(myPokemon){
	name.innerHTML = myPokemon.name
	height.innerHTML = myPokemon.height
	console.log(myPokemon.height)
}



var bulbasaur = document.getElementById("bulba");
bulbasaur.addEventListener('click', function(){
	bulbasaur.classList.remove("bulbasaur");
	bulbasaur.classList.add("bul");
	// let pokemon = getPokemonStats("bulbasaur",1);
	showStates(bulbasaur)
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

// var bulbasaur_pokemon = axios.get("http://fizal.me/pokeapi/api/v2/name/bulbasaur.json")
// .then(function (myResponse) {
// 	console.log(myResponse);
// 	var data = myResponse.data;
// 	var name = data.name;
// 	var height = data.height;
// 	var hp = data.stats[5].base_stat
// 	var attack = data.stats[1].base_stat
// 	var defence = data.stats[3].base_stat
// 	var abilities = data.abilities
// 	var myabilities = [];
// 	for (var i=0;i<abilities.length;i++){
// 		myabilities.push(abilities[i].ability.name)
// 	}
// 	var moves = data.moves
// 	// console.log(moves)
// 	var myMoves = [];
// 	for (var i=0;i<moves.length;i++){
// 			var topmoves = moves[i].move.name	
// 			if(topmoves.length <5){
// 				myMoves.push(topmoves)
// 			}
// 	}

// 	console.log(myMoves)
// 	// console.log(myMoves)
// 	// console.log(myabilities)
// 	// console.log(height);

// 	card1.innerHTML = 
// 	`<h5 class = "pl-5 ml-4">NAME - ${name}</h5>
// 	<h5 class = "pl-5 ml-4">HEIGHT - ${height}</h5>
// 	<h5 class = "pl-5 ml-4">HP - ${hp}</h5>
// 	<h5 class = "pl-5 ml-4">ATTACK - ${attack}</h5>
// 	<h5 class = "pl-5 ml-4">DEFENCE - ${defence}</h5>
// 	<h5 class = "pl-5 ml-4">TOP 5 MOVES - ${myMoves}</h5>
// 	<h5 class = "pl-5 ml-4">ABILITIES - ${myabilities}</h5>`

// })