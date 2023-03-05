
interface Comic {
    day: string,
    month: string,
    year: string,
    num: number,
    link: string,
    news: string,
    safe_title: string,
    transcript: string,
    alt: string,
    img: string,
    title: string
}

export async function fetchComic() {
    const comicEl = document.getElementById('comic') as HTMLElement
    const mailParams = new URLSearchParams([['email', 'm.filonov@innopolis.university']])
    const idResponse = await fetch('https://fwd.innopolis.app/api/hw2?' + mailParams.toString())
    const id: string = await idResponse.json()
    const params = new URLSearchParams([['num', id.toString()]])
    const comicResponse = await fetch('https://getxkcd.vercel.app/api/comic?' + params.toString())
    const comicData: Comic = await comicResponse.json()
    comicEl.innerHTML = ''
    var img = document.createElement('img')
    img.src = comicData.img
    img.alt = comicData.alt
    var heading = document.createElement('h2')
    heading.textContent = comicData.title
    var dateEl = document.createElement('div')
    const date = new Date(parseInt(comicData.year), parseInt(comicData.month), parseInt(comicData.day))
    dateEl.textContent = 'Uploaded: ' + date.toLocaleDateString()
    comicEl.appendChild(heading)
    comicEl.appendChild(img)
    comicEl.appendChild(dateEl)
}


