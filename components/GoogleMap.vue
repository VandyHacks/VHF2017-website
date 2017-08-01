<style lang="scss" scoped>
.map {
  height: 500px;
  background: #e4e4df;
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
    GoogleMapsLoader.LIBRARIES = ['places']
    GoogleMapsLoader.load(google => {
      this.map = new google.maps.Map(this.$el, {
        center: { lat: 36.142926, lng: -86.805989 },
        zoom: 16,
        scrollwheel: false
      })

      const placeId = 'ChIJd_uqbKNmZIgRWON4Kc8ClcM'
      const service = new google.maps.places.PlacesService(this.map)
      service.getDetails({
        placeId: placeId
      }, (result, status) => {
        new google.maps.Marker({ // eslint-disable-line no-new
          map: this.map,
          place: {
            placeId: placeId,
            location: result.geometry.location
          }
        })
      })
    })
  },
  beforeDestroy() {

  }
}
</script>