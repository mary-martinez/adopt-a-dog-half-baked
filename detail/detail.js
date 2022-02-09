import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async () => {
    console.log('entering detail event listener');
    const params = new URLSearchParams(window.location.search);
    const selectedDog = await getDog(params.get('id'));
    const showDog = renderDogDetail(selectedDog);
    dogDetailContainer.append(showDog);

})
// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
