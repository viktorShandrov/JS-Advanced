import { showView } from './dom.js';
import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { e } from  './dom.js';

const section = document.getElementById("home-page");
const catalog = section.querySelector(".card-deck.d-flex.justify-content-center");
section.querySelector("#createLink").addEventListener('click', (event) => {
    console.log(section.querySelector("#createLink"));
    event.preventDefault();
    showCreate();
});
section.remove();


export function showHome() {
    showView(section);
    getMovies();
}

async function getMovies() {
    catalog.replaceChildren(e('p', {className: ""}, 'Loading...')); // това защо не работи както при Виктор.... НЕ ЗНАМ!;
    // const loading = document.createElement('p');
    // loading.textContent = "Loading...";
    // catalog.replaceChildren(loading)

    const url = "http://localhost:3030/data/movies"
    const resp = await fetch(url);
    const data = await resp.json();

    catalog.replaceChildren(...data.map(createMovieCard));

    catalog.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.tagName == "BUTTON") {
            target = target.parentElement;
        }
        if (target.tagName == "A"){
            const id = target.dataset.id;
            showDetails(id);
        }
    })
};

function createMovieCard(movie) {
    const element = e('div', { className: 'card mb-4'});
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
        <div class="card-body"> 
            <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <a data-id="${movie._id}" href="#">
                <button type="button" class="btn btn-info">Details</button>
            </a>
    </div>
    `;

    return element;
}

{/* <div class="card mb-4">
    <img class="card-img-top" src="" alt="Card image cap" width="400">
        <div class="card-body"> 
            <h4 class="card-title"></h4>
        </div>
        <div class="card-footer">
            <a href="#">
                <button type="button" class="btn btn-info">Details</button>
            </a>
    </div>
</div> */}

