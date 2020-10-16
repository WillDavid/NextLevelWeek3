const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

// create map
const map = L.map('mapid', options).setView([-3.10719, -60.0261], 16);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// Create popup overlay
const popup = L.popup({
    closeButton: false,
    className:'map-popup',
    minWidth:240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')


// Create and add marker

L.marker([-3.10719, -60.0261], {icon}).addTo(map)
    .bindPopup(popup)



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