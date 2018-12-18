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
let myLapras = new Pokemon('lapras', 131);

// Traier object
let zakwan = new Trainer("Zakwan",[myBulbasaur,myCharmander,mySquirtle, myLapras]);

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
		let moves = data.moves
		// goign through the length of moves array and storing the name of each movr in topmoves
		for (var i=0;i<moves.length;i++){
				var topmoves = moves[i].move.name;
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
	})
}

// Funnction call for each pokemon with it's name
getPokemonStats('bulbasaur',1);
getPokemonStats('charmander',4);
getPokemonStats('squirtle',7);
getPokemonStats('lapras',131);
// console.log(getPokemonStats('Greninja', 658));


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
	Name.innerHTML = `Name - ${myPokemon.name}`;
	Height.innerHTML = `Height - ${myPokemon.height}`;
	HP.innerHTML = `HP - ${myPokemon.hp}`;
	Attack.innerHTML = `Attack - ${myPokemon.attack}`;
	Defence.innerHTML = `Defence - ${myPokemon.defence}`;
	Abilities.innerHTML = `Abilities - ${myPokemon.abilities}`;
	Moves.innerHTML = `Moves - ${myPokemon.moves}`;
}



var bulbasaur = document.getElementById("bulba");
bulbasaur.classList.add("image");
bulbasaur.addEventListener('click', function(){
	bulbasaur.classList.remove("bulbasaur");
	bulbasaur.classList.remove("image");
	bulbasaur.classList.add("bul");
	bulbasaur.classList.add("states");
	let pokemon = zakwan.get("bulbasaur");
	showStates(pokemon, 'bulba');
})

var charmander = document.getElementById("charm");
charmander.classList.add("image");
charmander.addEventListener('click',function(){
	charmander.classList.remove("charmander");
	charmander.classList.remove("image");
	charmander.classList.add("charm");
	charmander.classList.add("states");
	// charmander.classList.add("data");
	let pokemon = zakwan.get("charmander");
	showStates(pokemon, 'charm');
})

var Squi = document.getElementById("Squir");
Squi.classList.add("image");
Squi.addEventListener('click',function(){
	Squi.classList.remove("Squirtle");
	Squi.classList.remove("image");
	Squi.classList.add("Squir");
	Squi.classList.add("states");
	let pokemon = zakwan.get("squirtle");
	showStates(pokemon, 'Squir');
})

var lapras = document.getElementById("lap");
lapras.classList.add("image");
lapras.addEventListener('click',function(){
	lapras.classList.remove("lapres");
	lapras.classList.remove("image");
	lapras.classList.add("lap");
	lapras.classList.add("states");
	let pokemon = zakwan.get("lapras");
	showStates(pokemon, 'lap')
})

