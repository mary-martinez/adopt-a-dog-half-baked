import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const selectedDog = await getDog(params.get('id'));
    const showDog = renderDogDetail(selectedDog);
    dogDetailContainer.append(showDog);

})
