if ( $('#map').length ) {

  ;(function () {
    var $map = document.getElementById('map');

    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.781398, 37.583499],
        zoom: 17,
        controls: []
      });

      var marker = new ymaps.Placemark([55.781398, 37.583499], {
        iconCaption: '3-я ул. Ямского Поля, дом 2, корпус 12, офис № 314'
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      });

      myMap.geoObjects.add(marker);
    }
  })();

}