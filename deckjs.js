

/*$.getJSON("dataset.json", function(data) {
    console.log("found data!");
    flightData = data;
    console.log(flightData);
})*/
const colors = 
[
    [255,237,0],
    [232,169,12],
    [255,117,0],
    [232,61,32],
    [255,0,147]
]

new deck.DeckGL({
    container: 'container',
    mapStyle:'https://free.tilehosting.com/styles/positron/style.json?key=U0iNgiZKlYdwvgs9UPm1',      
    longitude: -122.45,
    latitude: 37.8,
    zoom: 12,
    layers: [
        /*new deck.ScatterplotLayer({
            id: 'scatter-plot',
            data: 'https://raw.githubusercontent.com/LBurrito/lburrito.github.io/master/multiFlight.json',
            //radiusScale: 1,
            radius: 1,
            //getRadius: d => (d.altitude / 10000) * 300,//max altitude is 10000,
            getColor: d => (d.altitude < 0 ? [0,0,0] :
                                (d.altitude < 2500 ? colors[0] : 
                                    (d.altitude < 5000 ? colors[2] : 
                                        (d.altitude < 7500 ? colors[2] : colors[3])
                                    )
                                )
                            ),         
            radiusMinPixels: 0.5,
            getPosition: d => d.position,
            opacity: 0.05
        })*/
        new deck.PointCloudLayer({
                id: 'point-cloud-layer',
                data: 'https://raw.githubusercontent.com/LBurrito/lburrito.github.io/master/multiFlight.json',
                pickable: false,
                radiusPixels: 4,
                getPosition: d => {
                    return [d.position[0], d.position[1], d.altitude]
                },
                getNormal: d => d.normal,
                getColor: d => d.color,
                opacity: 0.05,
                lightSettings: {},
                onHover: ({object}) => setTooltip(object.position.join(', '))
          })
    ]
});
