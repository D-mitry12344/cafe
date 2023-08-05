ymaps.ready(init);
function init(){
    let myMap = new ymaps.Map("map", {
        center: [50.988559, 3.695710],
        zoom: 10
    });
    let myGeoObject = new ymaps.GeoObject({
       geometry: {
            type: "Point", 
            coordinates:  [50.988559, 3.695710] 
        }
    });
   myMap.geoObjects.add(myGeoObject); 
}
