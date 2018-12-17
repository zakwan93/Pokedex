class Trainer{
	constructor(name,pokemon){
		this.name = name;
		this.pokemon = pokemon;
	}

	all() {
        return this.pokemon;
    }

	get(name){
		for(let i=0; i<this.pokemon.length; i++){
			let pokemonName = this.pokemon[i].name;
			if(pokemonName === name){
				return this.pokemon[i];
			}
		}
		return false;
	}
}

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
let zakwan = new Trainer("Zakwan",[myBulbasaur,myCharmander,mySquirtle]);

// Axios call for each pokemon using name
function getPokemonStats(name,id){
	axios.get("http://fizal.me/pokeapi/api/v2/id/"+ id +".json")
	.then(function (myResponse){
		// console.log(myResponse);
		let data = myResponse.data;

		// call get method from Trainer class and store the name of pokemon 
		let myPokemon = zakwan.get(name);

		// Getting all abilities of pokemon from abilities array
		let myabilities = [];
		let abilities = data.abilities;
		for (var i=0;i<abilities.length;i++){
			myabilities.push(abilities[i].ability.name)
		}

		// Getting all move of each pokemon 
		let myMoves = [];
		myPokemon.moves = data.moves
		// goign through the length of moves array and storing the name of each movr in topmoves
		for (var i=0;i<myPokemon.moves.length;i++){
				var topmoves = myPokemon.moves[i].move.name;
				// checking if topmoves length is less than 5 
				// and push that first 5 moves in a myMoves array	
				if(topmoves.length <5){
					myMoves.push(topmoves)
				}
			}

		myPokemon.id = data.id
		myPokemon.name = data.name;
		myPokemon.height = data.height;
		myPokemon.hp = data.stats[5].base_stat
		myPokemon.attack = data.stats[1].base_stat
		myPokemon.defence = data.stats[3].base_stat
		myPokemon.abilities = myabilities
		myPokemon.moves = myMoves
		
		// console.log(myMoves)
	})
}

// Funnction call for each pokemon with it's name
getPokemonStats('bulbasaur',1);
getPokemonStats('charmander',4);
getPokemonStats('squirtle',7);


// Functionn to show data on HTML
function showStates(myPokemon, id){
	let container = document.getElementById(id);
	console.log(container)
	let Name = container.querySelector(".Name");
	let Height = container.querySelector(".Height");
	let HP = container.querySelector(".HP");
	let Attack = container.querySelector(".Attack");
	let Defence = container.querySelector(".Defence");
	let Abilities = container.querySelector(".Abilities");
	let Moves = container.querySelector(".Moves")
	Name.innerHTML = myPokemon.name;
	Height.innerHTML = myPokemon.height;
	HP.innerHTML = myPokemon.hp;
	Attack.innerHTML = myPokemon.attack;
	Defence.innerHTML = myPokemon.defence;
	Abilities.innerHTML = myPokemon.abilities;
	Moves.innerHTML = myPokemon.moves;
}



var bulbasaur = document.getElementById("bulba");
bulbasaur.addEventListener('click', function(){
	bulbasaur.classList.remove("bulbasaur");
	bulbasaur.classList.add("bul");
	let pokemon = zakwan.get("bulbasaur");
	showStates(pokemon, 'bulba');
})

var charmander = document.getElementById("charm");
charmander.addEventListener('click',function(){
	charmander.classList.remove("charmander");
	charmander.classList.add("charm");
	let pokemon = zakwan.get("charmander");
	showStates(pokemon, 'charm');
})

var Squi = document.getElementById("Squir");
Squi.addEventListener('click',function(){
	Squi.classList.remove("Squirtle");
	Squi.classList.add("Squir");
	let pokemon = zakwan.get("squirtle");
	showStates(pokemon, 'Squir');
})

