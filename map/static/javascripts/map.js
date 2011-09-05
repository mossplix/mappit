var map = null;
var center = new google.maps.LatLng(39.8, -89.2);

function fetch_tile(coord, zoom) {
    return "/static/tiles/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
}

// --- begin geocoding stuff --

var outside_il = false; // until prove true
var user_marker = null;
var has_zoomed = false;
var has_moved = false;



// --- end geocoding stuff ---

$(document).ready(function() {

    tile_opts = {
        getTileUrl: fetch_tile,
        tileSize: new google.maps.Size(256, 256),
        isPng: true
    }
    map_demo = new google.maps.ImageMapType(tile_opts);

    map_options = {
        minZoom: 7,
        maxZoom: 10,
        zoom: 7,
        center: center,
        mapTypeControl: false,
        mapTypeId: "simple"
    };



    var initial_hash = window.location.hash;
    map = new google.maps.Map(document.getElementById("map"), map_options);
    var geocoder = new google.maps.Geocoder();
    var MIN_LON = '29.5732';
    var MAX_LON = '35.0360';
    var MIN_LAT = '-1.4840';
    var MAX_LAT = '4.2144';
    
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(new google.maps.LatLng(parseFloat(MIN_LAT), parseFloat(MIN_LON)));
    bounds.extend(new google.maps.LatLng(parseFloat(MAX_LAT), parseFloat(MAX_LON)));
    map.fitBounds(bounds);
    map.mapTypes.set("simple", simple);
    map.overlayMapTypes.push(map_demo);


});