const comicEl = document.getElementById('comic');


const params = new URLSearchParams([['email', 'm.filonov@innopolis.university']]);
fetch('https://fwd.innopolis.app/api/hw2?' + params.toString())
    .then(r => r.json())
    .then(id => {
        const params = new URLSearchParams([['num', id.toString()]]);
        return fetch('https://getxkcd.vercel.app/api/comic?' + params.toString());
    })
    .then(r => r.json())
    .then(comic => {
        comicEl.innerHTML = '';
        var img = document.createElement('img');
        img.src = comic.img;
        img.alt = comic.alt;
        var heading = document.createElement('h2');
        heading.textContent = comic.title;
        var dateEl = document.createElement('div');
        const date = new Date(Date.UTC(comic.year, comic.month, comic.day));
        dateEl.textContent = 'Uploaded: ' + date.toLocaleDateString();
        comicEl.appendChild(heading);
        comicEl.appendChild(img);
        comicEl.appendChild(dateEl);

    })
    .catch(error => console.error('Something bad happen ', error))




