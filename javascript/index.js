
  function initMap(){
    var puntasal = {lat: -3.9566944, lng: -80.9582091};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10, 
        center: puntasal
    });
    var marker = new google.maps.Marker({
        position: puntasal,
        map: map
    });
  } 


