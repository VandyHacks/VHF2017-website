<style lang="scss" scoped>
.map {
  height: 500px;
}
</style>

<template>
  <div class="map">
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.server) return
    const GoogleMapsLoader = require('google-maps')
    GoogleMapsLoader.KEY = 'AIzaSyBxCpny2yWKW8U06L2c10K5WXnnXktjKTo'
    GoogleMapsLoader.load(google => {
      this.map = new google.maps.Map(this.$el, {
        center: { lat: 36.142926, lng: -86.805989 },
        zoom: 16,
        scrollwheel: false
      })
    })
  },
  beforeDestroy() {

  }
}
</script>