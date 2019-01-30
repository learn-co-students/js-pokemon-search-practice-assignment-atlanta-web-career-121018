document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  if (POKEMON.length === 0) {
  } else {
    document.querySelector('p').remove(); 

    const container = document.getElementById('pokemon-container');

    for (let i = 0; i < POKEMON.length; i++) {
      const card = document.createElement('div');
      card.className = 'pokemon-card';
      container.appendChild(card);
      
        const frame = document.createElement('div');
        frame.className = 'pokemon-frame';
        card.appendChild(frame); 

          const name = document.createElement('h1');
          name.className = 'center-text';
          name.textContent = POKEMON[i]['name']; 
          frame.appendChild(name); 

          const imageContainer = document.createElement('div')
          imageContainer.className = 'pokemon-image';
          frame.appendChild(imageContainer); 

            const image = document.createElement('img')
            image.setAttribute('data-id', POKEMON[i]['id']);
            image.setAttribute('data-action', 'flip');
            image.className="toggle-sprite";
            image.setAttribute('src',POKEMON[i]['sprites']['front']);
            imageContainer.appendChild(image)
    } 
  }











})
