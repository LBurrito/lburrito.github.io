
var dataSet = {}

$.getJSON("dataset.json", function(data) {
    console.log("found data!");
    console.log(data);
    dataSet = data;
})
new deck.DeckGL({
    container: 'container',
    mapStyle:'https://free.tilehosting.com/styles/positron/style.json?key=U0iNgiZKlYdwvgs9UPm1',      
    longitude: -122.45,
    latitude: 37.8,
    zoom: 12,
    layers: [
        new deck.ScatterplotLayer(
            dataSet
        )
    ]
});
