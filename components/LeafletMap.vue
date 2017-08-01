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
</style>

<template>
  <div :class="rootClass" class="map-col">
    <div class="map" ref="mapEl">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    center: Array,
    zoom: Number,
    columns: {
      type: Number,
      default: 6
    },
    accessToken: {
      type: String,
      default: 'pk.eyJ1IjoiYmVuY29vcGVyMjIyIiwiYSI6ImNpeGlxY2dxMzAwMTYzMnBqdnM5ZzE0ZDgifQ.ny6yQcI2QEHve1aMhs-0Rw'
    }
  },
  mounted() {
    if (process.browser) {
      const L = require('leaflet')
      this.map = L.map(this.$refs.mapEl, {
        center: this.center,
        zoom: this.zoom
      })
      this.map.attributionControl.setPrefix('')
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '&copy; <a href="http://mapbox.com">Mapbox</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> <a href="https://www.mapbox.com/feedback/"><b>Improve this map</b></a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: this.accessToken
      }).addTo(this.map)
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove()
    }
  },
  computed: {
    rootClass() {
      return `col-md-${this.columns}`
    }
  }
}
</script>
