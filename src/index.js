

document.addEventListener('DOMContentLoaded', setUpPage)

    function setUpPage (){
        getPokemon(POKEMON)
        addSearchEventListener()
    }

    function getPokemon(pokemon){
        let div = document.querySelector('#pokemon-container')
        div.innerHTML = '';
        pokemon.forEach((element, index, array) => { // array[index] === element

            let divCard = document.createElement('div')
            divCard.className = 'pokemon-card'
            divCard.id = element.id

            let divFrame = document.createElement('div')
            divFrame.className = 'pokemon-frame'

            let header = document.createElement('h1')
            header.className = 'center-text'
            header.textContent = element.name

            let divImage = document.createElement('div')
            divImage.className = 'pokemon-image'

            let image = document.createElement('img')
            image.className = 'toggle-sprite';
            image.src = element.sprites.front;
            image.setAttribute('data-id', element.id);
            image.setAttribute('data-action', 'flip');

            image.addEventListener('click', event => {
                if (image.src === element.sprites.front){
                    image.src = element.sprites.back
                } else {
                    image.src = element.sprites.front
                }
            })

            divImage.appendChild(image)
            divFrame.appendChild(divImage)
            divFrame.appendChild(header)
            divCard.appendChild(divFrame)
            div.appendChild(divCard)
        })
        return div;
    }


function filterPokemon(){
    console.log(POKEMON)
    console.log(event)
    console.log(event.target)
    let pokeString = event.srcElement.value // gets entire string
    let filteredPokemon = POKEMON.filter(function(poke){ // returns object that passes condition below.
        return poke.name.includes(pokeString) // returns boolean
    })
    getPokemon(filteredPokemon)
}


function addSearchEventListener() {
    let inputText = document.querySelector('#pokemon-search-input')
    inputText.addEventListener('input', filterPokemon)
}
