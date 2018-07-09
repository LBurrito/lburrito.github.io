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
    mapboxApiAccessToken: 'pk.eyJ1IjoibHVjYWJvbW1hciIsImEiOiJjamphYzZxcDkzZzc0M3ZvNm45d3Y4NXd0In0.NW5KWw9ZJg6a0iQm5D7omw',
    mapStyle:'mapbox://styles/mapbox/dark-v9',      
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
            data: 'https://ucea5430f9b964c0a270b35fb77e.dl.dropboxusercontent.com/cd/0/inline/AK9UEmmAkB-VCn4A90jVlia2VbPAkB3yFhZL0AphZf7U68UWFo18bJ6CNVrY16stgdB-DOzB40GRx4zeDux-Z5XF5ARA-SqH3fi-880URZdumOoWBQZjZV8VOtBG9tpqheTVUY-orjHuRyeIwb8BxELh5xylFuc6swr2vt2UohhwQpGw-ORMjY0S12xmugYSPdw/file',
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
            stroke: 3
          })
          /*new TripsLayer({
            id: 'trips',
            data: 'https://uc0d896c086a841cef537af659e4.dl.dropboxusercontent.com/cd/0/inline/AK5_ZZYzIAyu6ObcBcfpeq2Wh59kOfMj-RK1cyLDruZGM8XtPIkloZe3MWOBY6ooXUGskjEGR9fh3Zh0DaoUq839mgA3LJLPOMEj5IeBxD7YQ4cqcJG7XMUO4SoI3kfKpZwbFap1NNWvP4xneKPWUHdw1cxqDhVY0wNnod_R3eiBvqsxA0ZKnaP4STL39Lg6pfw/file',
            getPath: d => {
                return [d.position[0], d.position[1], d.time]
            } ,
            getColor: [253, 128, 93],
            opacity: 0.3,
            strokeWidth: 2,
            trailLength: 120,
          })*/
    ]
});
