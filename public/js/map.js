  mapboxgl.accessToken = mapToken;

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // new delhi: [longitude, latitude]
    zoom: 9,
  });


  const marker = new mapboxgl.Marker({color:'red'})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({offset: 25}).setHTML(
        `<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`
      ))
    .addTo(map);
    
    




//   mapboxgl.accessToken = mapToken;

// const map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/mapbox/standard",
//   center: [77.2090, 28.610],
//   zoom: 9,
//   projection: "globe"
// });

// console.log(coordinates);

// const marker = new mapboxgl.Marker({
//   color: "#30a9c7"
// })
//   .setLngLat(coordinates)
//   .addTo(map);
