<style lang="scss" scoped>
.map-col {
  display: flex;
  flex: 1;
}

.map {
  height: 280px;
  border-radius: 3px;
  z-index: 0;
  flex: 1;
}

.leaflet-container /deep/ a {
  color: #565f86;
}
</style>

<template>
  <div class="map">
  </div>
</template>

<script>
export default {
  props: {
    center: Array,
    zoom: Number,
    accessToken: {
      type: String,
      default: 'pk.eyJ1IjoiYmVuY29vcGVyMjIyIiwiYSI6ImNpeGlxY2dxMzAwMTYzMnBqdnM5ZzE0ZDgifQ.ny6yQcI2QEHve1aMhs-0Rw'
    },
    location: Array
  },
  mounted() {
    if (process.browser) {
      const L = require('leaflet')
      this.map = L.map(this.$el, {
        center: this.center,
        zoom: this.zoom
      })
      this.map.attributionControl.setPrefix('')
      L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}{retina}?access_token={accessToken}', {
        attribution: '&copy; <a href="http://mapbox.com">Mapbox</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> <a href="https://www.mapbox.com/feedback/" target="_blank" rel="noopener"><b>Improve this map</b></a>',
        maxZoom: 20,
        tileSize: 512,
        zoomOffset: -1,
        retina: '@2x',
        accessToken: this.accessToken
      }).addTo(this.map)

      L.marker(this.location).addTo(this.map)
        .bindPopup("<b>VandyHacks IV</b><br>Hosted at the Wondr'y")
        .openPopup()
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove()
    }
  }
}
</script>
