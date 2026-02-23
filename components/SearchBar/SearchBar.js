export default function SearchBar(onSubmit) {
    const searchBar = document.createElement("form");
    searchBar.classList.add("search-bar");

    const input = document.createElement("input");
    input.name = "query";
    input.classList.add("search-bar__input");
    input.type = "text";
    input.placeholder = "search characters";
    input.ariaLabel = "character name";
    searchBar.append(input);

    const button = document.createElement("button");
    button.classList.add("search-bar__button");
    button.ariaLabel = "search for character";
    searchBar.append(button);

    const img = document.createElement("img");
    img.classList.add("search-bar__icon");
    img.src = "./assets/magnifying-glass.png";
    button.append(img);

    searchBar.addEventListener("submit", onSubmit);
    return searchBar;
}
