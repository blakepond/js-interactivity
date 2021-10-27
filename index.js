//create function to add movie 
//Step 2
let message = document.querySelector("#message")

console.log("hello world")


const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector("input").value;
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")

    movieTitle.textContent = inputField;
    movieTitle.addEventListener('click',crossOffMovie);
    movie.appendChild(movieTitle);
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn);
    document.querySelector('ul').appendChild(movie);
    document.querySelector("input").value = "";
}
document.querySelector("form").addEventListener("submit", addMovie)

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    document.querySelector("#message").textContent = "Movie Removed"
}

//Step 4
const crossOffMovie = (event) => {
    event.target.classList.toggle("checked")
    event.target.classList.contains("checked") ?
    message.textContent = "Movie Watched" : message.textContent = "Movie Returned";

}
