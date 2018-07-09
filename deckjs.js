

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
            data: 'https://uc6157d73b62c52d065ca2c02e42.dl.dropboxusercontent.com/cd/0/inline/AK4tck0OItPWxl6oD89Vw_t_8Q2f7Kw5bJcUgcn2sGbuIi5CblX1SOZEuZPgNpT1lKTxjM9XKX9oSMxdEtNkbMrhaQKQhgPC50-dWNlym_6TBJ_nIGdL9tXgVCt5OgEzvPYmrP28KhhHLXYXNe0gDk6nzJsafS9sRDDpe4-kX4CxpykbQ3a6uVf11ZWo_PKSBd0/file',
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
            getPosition: d => {
                return [d.position[0], d.position[1], d.altitude]
            },
            opacity: 0.05
        }),*/
        /*new deck.PointCloudLayer({
                id: 'point-cloud-layer',
                data: 'https://raw.githubusercontent.com/LBurrito/lburrito.github.io/master/multiFlight.json',
                pickable: false,
                radiusPixels: 4,
                getPosition: d => {
                    return [d.position[0], d.position[1], d.altitude]
                },
                getColor: d => (d.altitude < 0 ? [0,0,0] :
                    (d.altitude < 2500 ? colors[0] : 
                        (d.altitude < 5000 ? colors[2] : 
                            (d.altitude < 7500 ? colors[2] : colors[3])
                        )
                    )
                ), 
                getNormal: d => d.normal,
                opacity: 0.05,
                lightSettings: {},
                onHover: ({object}) => setTooltip(object.position.join(', '))

          })*/
          new deck.LineLayer({
            id: 'flight-paths',
            data: 'https://ucda45ff6a692192b02ddbca1ef6.dl.dropboxusercontent.com/cd/0/inline/AK401YbW2JxzEHNVUH7C5MXYtMxw__n3A3nbI4J1hcOpJJYQXtAObrIKjUuebD80u7f6NcBlXmu4mdSnSjNZObY0RTZSEql57B49zpOVKLXKyTnz2FVwKCxCw-rATDdgXoltT496eqW1yXavGQY9YK-prrHEz5XXqzXJgzgXjek9y5WnvC9dPMp_KbCl6MpirIk/file',
            fp64: false,
            getSourcePosition: d => {
                return [d.position[0], d.position[1], d.altitude]
            },
            getTargetPosition: d => {
                return [d.nextPos[0], d.nextPos[1], d.nextAlt]
            },
            getColor: d => (d.altitude < 0 ? [0,0,0] :
                (d.altitude < 2500 ? colors[0] : 
                    (d.altitude < 5000 ? colors[2] : 
                        (d.altitude < 7500 ? colors[2] : colors[3])
                    )
                )
            ),
            opacity: 0.05,
            stroke: 1
          })
    ]
});
