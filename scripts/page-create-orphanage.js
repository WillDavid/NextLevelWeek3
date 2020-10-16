// create map
const map = L.map('mapid2').setView([-3.10719, -60.0261], 16);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29,68]
})

let marker;

// Create and add marker


map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //remove icon
    marker && map.removeLayer(marker)

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    // add icon later
    marker = L.marker([lat, lng], {icon}).addTo(map)
})


// Photos Upload - Campo de adicionar fotos

function addPhotoField(){

    // Pegar o container de fotos #images

    const container = document.querySelector('#images');

    // Pegar o container para duplicar .new-upload

    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Realizar o clone da última imagem adicionada

    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    const input = newFieldContainer.children[0]

    // Verificar se o campo está vazio
    if(input.value == ""){
        return 
    }else {

        // Limpar o campo antes de adicionar ao container
        input.value = ""


        // Adicionar o clone ao container de #images
        
        container.appendChild(newFieldContainer);
    }
  
}


function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }else {
        console.log("Cheguei aqui")


        // Deletar o campo antes de adicionar
        span.parentNode.remove();
    }

}



// Sim ou não

function toggleSelect(event){
    // Retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button').forEach(function(button){
        button.classList.remove('active');
    })

    // Colocar a class .active nesse botao clicado

    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar o meu input hidden com o valor selecionado

    const input = document.querySelector('[name="open_on_weekends"]')

    // Pegar o botao clicado

    input.value = button.dataset.value

    // Verificar se sim ou nao

}
