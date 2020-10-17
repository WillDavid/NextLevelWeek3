const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

// get values
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng



// create map
const map = L.map('mapid2', options).setView([lat, lng], 16);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})


// Create and add marker

L.marker([lat, lng], {icon}).addTo(map)



function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes ativas
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass);


    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    //Selecionar a imagem clicada del


    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')

    //Atualizar o container de imagem

    imageContainer.src = image.src


    // adicionar a classe .active para o botao

    button.classList.add('active')
}