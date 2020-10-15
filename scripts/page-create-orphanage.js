// create map
const map = L.map('mapid').setView([-3.10719, -60.0261], 16);


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


    // add icon later
    marker = L.marker([lat, lng], {icon}).addTo(map)
})



