// Map Feature w mapMarker on SVG from LAT. and LONG.

// Resources
// States : http://libremap.org/data/boundary/
// LA Coords VIA : https://www.flickr.com/places/info/2347577
// Remote https://github.com/achord/svg-state-map.git

var LA = {l: -94.0434, b: 28.9287, r: -88.8165, t: 33.0197}

function setMarker(lat, long){

  // Size in px of height and width
  // TODO Convert to %
  //var moduleHeight = 160;
  //var moduleWidth  = 173;

  var moduleWidth = document.getElementById('state-container').offsetWidth; // get width from css or from calculated
  var moduleHeight = document.getElementById('state-container').offsetHeight;
  // Coordinate Bounding Box for LA
  var top    =  LA.t;
  var right  =  LA.r;
  var bottom =  LA.b;
  var left   =  LA.l;

  var height = top - bottom;
  var width  = right - left;

  var latPx = (top - lat);
  var longPx = -(left - long);

  var markerTop = Math.round ( (latPx / height) * moduleHeight ) -2 ; // -31 offset top by marker height
  var markerLeft = Math.round( (longPx / width) * moduleWidth ) -2  ; // -17 offset left by marker width

  // console.log(height, width);
  // console.log(latPx, longPx);
  console.log('mw mh: ' + moduleWidth, moduleHeight);
  console.log(markerTop, markerLeft);

  document.getElementById("marker").style.top  = markerTop + "px";
  document.getElementById("marker").style.left = markerLeft + "px";


 }

 window.onload = function () {
       // http://www.mapcoordinates.net/en
       // set marker for map graphic
       setMarker (29.9510658, -90.0715323);     // NOLA

       // setMarker (32.99945001,-94.010009775);  // Texarkana
       // setMarker(29.18933394, -90.05699158);   // Elmers
       // setMarker(29.16535312, -89.26322937);   // pilotTown
       // setMarker(29.69371778,-93.80688386);    // bot-left Or
       // setMarker(30.99261831, -89.73770142);   // angie
       // setMarker (30.25927581,-89.94930621);   // Lacombe


    };

// JQUERY Example
// $('.StateMap-marker').css({top: markerTop+'px', left: markerLeft+'px', });

// Example of hard-coded values: 

//$(document).ready(function() {
   // http://www.mapcoordinates.net/en
   // setMarker(29.9510658, -90.0715323);     // NOLA
   // setMarker (32.99945001,-94.010009775);  // Texarkana
   // setMarker(29.18933394, -90.05699158);   // Elmers
   // setMarker(29.16535312, -89.26322937);   // pilotTown
   // setMarker(29.69371778,-93.80688386);    // bot-left Ornage
   // setMarker(30.99261831, -89.73770142);   // angie
   // setMarker (30.25927581,-89.94930621);   // Lacombe
//});
