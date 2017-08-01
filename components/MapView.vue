<template>
<div id="map">
  <mapbox
access-token="pk.eyJ1IjoiYmVuY29vcGVyMjIyIiwiYSI6ImNpeGlxY2dxMzAwMTYzMnBqdnM5ZzE0ZDgifQ.ny6yQcI2QEHve1aMhs-0Rw"
:map-options="{
	style: 'mapbox://styles/mapbox/dark-v9',
	center: this.center,
	zoom: this.zoom
}"
:geolocate-control="{
	show: true,
	position: 'top-left'
}"
:scale-control="{
	show: true,
	position: 'top-left'
}"
:fullscreen-control="{
	show: false,
	position: 'top-left'
}"
@map-load="mapLoaded"
>
</mapbox>
</div>
</template>
<script>
// import Vue2Leaflet from 'vue2-leaflet'
import Mapbox from 'mapbox-gl-vue'
export default {
  name: 'MapView',
  components: {
    'mapbox': Mapbox
  },
  data() {
    return {
      center: [-86.805989, 36.142926],
      zoom: 16,
      points: [
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-86.805989, 36.142926]
          },
          'properties': {
            'title': "Wondr'y",
            'icon': 'monument'
          }
        },
        {
          'type': 'Feature',
          'geometry': {
            'type': 'Point',
            'coordinates': [-86.806033, 36.142065]
          },
          'properties': {
            'title': 'Parking',
            'icon': 'parking-garage'
          }
        }],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' // change to OSM
    }
  },
  methods: {

    formatHeader: function(latlng, name) {
      return '<b>' + name + '</b><br>' +
                    latlng[0] + ', ' + latlng[1]
    },
    mapLoaded: function(map) {
      map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': this.points
          }
        },
        'layout': {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    #map {
        width: 100%;
        height: 90%;
        float: right;
        z-index:inherit;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translatey(-50%);
        -moz-transform: translatey(-50%);
        @media (max-width: 64em) {
          width: 80%;
          float: none;
          top: 0;
          left: 50%;
          position: relative;
          -moz-transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
        }
    }
</style>
