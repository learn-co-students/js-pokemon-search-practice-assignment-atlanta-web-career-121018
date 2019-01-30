document.addEventListener('DOMContentLoaded', () => {
  console.log("initial pokemon:", POKEMON)  
  const container = document.getElementById('pokemon-container');
  printPokemon(POKEMON)
  
  const pokemonSearchInput = document.getElementById('pokemon-search-input')
  pokemonSearchInput.addEventListener('input', function(event) { 
    let filteredPokemon = POKEMON.filter(function(pokeObj){
      return pokeObj.name.includes(event.target.value)
    })  
   printPokemon(filteredPokemon);
  })

  function printPokemon (filteredPokemon){
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }  
    
    if (filteredPokemon.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'There are no Pokémon here';
      container.appendChild(message)
    } 

    for (let i = 0; i < filteredPokemon.length; i++) {
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      container.appendChild(card);
      
        const frame = document.createElement('div');
        frame.className = 'pokemon-frame';
        card.appendChild(frame); 

          const name = document.createElement('h1');
          name.className = 'center-text';
          name.textContent = filteredPokemon[i]['name']; 
          frame.appendChild(name); 

          const imageContainer = document.createElement('div')
          imageContainer.className = 'pokemon-image';
          frame.appendChild(imageContainer); 

            const image = document.createElement('img')
            image.setAttribute('data-id', filteredPokemon[i]['id']);
            image.setAttribute('data-action', 'flip');
            image.className="toggle-sprite";
            image.setAttribute('src',filteredPokemon[i]['sprites']['front']);
            imageContainer.appendChild(image)
    }  
  }
})