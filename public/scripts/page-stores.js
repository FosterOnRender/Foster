//create map
const map = L.map('mapid').setView([-10.9439441,-37.0559183], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const storesSpan = document.querySelectorAll('.stores span')
storesSpan.forEach( span => {
    const store = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(store)
})

function addMarker({id, name, lat, lng}) {
    //create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/store?id=${id}"> <img src="/images/arrow-white.svg" > </a>`)


    //create and add marker
    L.marker([lat,lng], { icon }).addTo(map).bindPopup(popup)
}
