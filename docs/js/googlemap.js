var greyStyles = [
{
featureType: "all",
stylers: [
      {saturation: '-55'},
      {hue: '#555ff00'},
      {gamma: '0.90'},
]
},
{
featureType: 'road.highway',
      rules: [
      {hue: -80},
      {saturation: -40},
      {lightness: 8.8}
]
    }
  ];
  var map;
  var city = new google.maps.LatLng(32.08781,34.782187);
  
  
  function initialize() {
  var greyMapType = new google.maps.StyledMapType(greyStyles,
  {name: "Grey Area"});
  var mapOptions = {
  zoom: 17,
  center: city,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: true,
      scaleControl: true,
      draggable: true,
    };
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'grey_area']
    
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('grey_area', greyMapType);
  map.setMapTypeId('grey_area');

               
    marker = new google.maps.Marker({
      map:map,
 	  scrollwheel: true,
      navigationControl: true,
      mapTypeControl: true,
      scaleControl: true,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: city
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
  }

  function toggleBounce() {

    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }