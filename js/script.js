import { movies } from "./db.js";
console.log(movies);

let ul = document.querySelector('.promo__interactive-list')
let promo_bg = document.querySelector('.promo__bg');
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector(".promo__title");
let promo__descr = document.querySelector(".promo__descr")
let imdb = document.querySelector(".imdb");
let reserch = document.querySelector('.reserch')
console.log(promo_bg);



for (let i of movies) {

    let fm = movies.sort(function (a, b) {
        if (a.Title > b.Title) return 1;
        if (a.Title, b.Title) return -1
    })
    Movie(fm)

    let li = document.createElement('li')
    let delit = document.createElement('img')

    ul.classList.add('promo__interactive-list')
    li.classList.add('promo__interactive-item')
    delit.classList.add('delete')
    li.innerHTML = i.Title


    ul.append(li)
    li.append(delit)

    delit.onclick = () => {
        li.remove()
    }

    li.onclick = () => {
        Movie(i)
    }

 
}
function Movie(movie) {
    promo_bg.style.backgroundImage = `url("${movie.Poster}")`
    promo__genre.innerHTML = movie.Genre
    promo__title.innerHTML = movie.Title
    promo__descr.innerHTML = movie.Plot
    imdb.innerHTML = `IMDb: ${movie.imdbRating}`
    reserch.innerHTML = `Кинопоиск: ${movie.Metascore}`
}


