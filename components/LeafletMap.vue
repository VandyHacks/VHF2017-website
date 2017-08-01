<style lang="scss" scoped>
.map {
  height: 280px;
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
    zoom: Number
  },
  mounted() {
    if (process.browser) {
      const L = require('leaflet')
      this.map = L.map(this.$el, {
        center: this.center,
        zoom: this.zoom
      })
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYmVuY29vcGVyMjIyIiwiYSI6ImNpeGlxY2dxMzAwMTYzMnBqdnM5ZzE0ZDgifQ.ny6yQcI2QEHve1aMhs-0Rw'
      }).addTo(this.map)
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove()
    }
  }
}
</script>
