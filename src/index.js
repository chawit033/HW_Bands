import bandList from './bands.json'

import './main.scss'

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.getElementById('card')
    const bands = bandList.data
    insertBand(bands,cards)

})

function insertBand(bands,cards) {
    bands.forEach(band => {
        let cardDOM = builtCardDOM(band)
        cards.insertAdjacentHTML('beforeend', cardDOM)
    })

}
        

function builtCardDOM(band) {
    let img = bandList.image_base_url
    return (
        `<div class="card">
            <img src="${img.replace(`xxxARTIST-IDxxx`, `${band.art_id}`)}" alt="#" />
            <div class="band-info">   
                <div class="album">${band.album_title}<div>
                <div class="artist">${band.artist_title}<div>
                <div class="genre">${band.genre_text}</div>
            </div>
        </div>`

    )
}