maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS, //starting postion[lng, lat]
  center: coordinates,
  zoom: 10, //starting zoom
});

new maptilersdk.Marker({ color: "#FF0000" })
  .setLngLat(coordinates)
  .setPopup(new maptilersdk.Popup({offset:25}).setHTML("<h3>Welcome to Stavia!<h3/>"))
  .addTo(map);
