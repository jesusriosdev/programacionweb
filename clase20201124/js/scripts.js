const URL_API = "https://rickandmortyapi.com/api/character/";
const arrayCharacters = [];

init();
async function init() {
	const response = await fetch(`${URL_API}`);
	const characters = await response.json();
	console.log(characters);

	let characterContainer = document.getElementById("character-container");
	for (let x = 0; x < 8; x++) {
        arrayCharacters.push(characters.results[x]);
        arrayCharacters.push(characters.results[x]);
		characterContainer.innerHTML += `<img src="${characters.results[x].image}" >`;
    }
    
    arrayCharacters.sort(() => Math.random() - 0.5);

    console.log(arrayCharacters);
    // let arrayCharactersRandomOrder = arrayCharacters.sort(() => Math.random() - 0.5);
    // console.log(arrayCharactersRandomOrder);

	// let image = document.getElementById('character-image');
	// image.src = character.image;
}
