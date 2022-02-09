import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
// render and append all dog cards to the container
window.addEventListener('load', async () => {
    const dogList = await getDogs();
    dogListContainer.textContent = '';
    // console.log(dogList);
    for (let dog of dogList) {
        const dogInfo = renderDogCard(dog);
        dogListContainer.append(dogInfo);
        console.log(dog);
    }
})
