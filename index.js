import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import NavButton from "./components/NavButton/NavButton.js";
import NavPagination from "./components/NavPagination/NavPagination.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
    '[data-js="search-bar-container"]',
);
const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const prevButton = NavButton("previous", () => {
    if (page > 1) {
        page--;
        fetchCharacters();
    }
});

const nextButton = NavButton("next", () => {
    if (page <= maxPage) {
        page++;
        fetchCharacters();
    }
});

const pagination = NavPagination();

navigation.append(prevButton, pagination, nextButton);

const searchBar = SearchBar((event) => {
    event.preventDefault();

    const form = event.target;
    searchQuery = form.elements.query.value;
    page = 1;
    fetchCharacters();
});

searchBarContainer.append(searchBar);

fetchCharacters();

async function fetchCharacters() {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`,
    );
    const data = await response.json();

    console.log(data);
    maxPage = data.info.pages;

    cardContainer.innerHTML = ``;
    data.results.forEach((result) => {
        cardContainer.append(CharacterCard(result));
    });

    pagination.textContent = `${page} / ${maxPage}`;
}
