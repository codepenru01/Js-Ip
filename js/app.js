movies = movies.slice(0, 52);
let movie = document.querySelector(".movie");

movies.forEach(item => {
    movie.innerHTML += `
    <div class="col-3">
        <div class="card">
            <img src="${item.smallThumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title.split(" ").splice(0,3).join(" ")}...}</h5>
                <p class="card-text">${item.summary.split(" ").splice(0,15).join(" ")}...}</p>
                <a href="https://www.youtube.com/watch?v=${item.youtubeId}" title="${item.title}" target="_blank" class="btn btn-primary">Youtube</a>
            </div>
        </div>
    </div>
    `
})