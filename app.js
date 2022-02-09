import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

window.addEventListener('load', async() => {
    const dogList = await getDogs();
    dogListContainer.textContent = '';

    for (let dog of dogList) {
        const dogInfo = renderDogCard(dog);
        dogListContainer.append(dogInfo);
        console.log(dog);
    }
});
