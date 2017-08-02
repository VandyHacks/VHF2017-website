<style lang='scss' scoped>
$height: 500px;

.map-wrapper {
  height: $height;
  overflow-y: hidden;
}

.map {
  background: #e5e3df;
  height: $height;
}

#top-left-widget {
  width: 240px;
  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
  background-color: white;
  padding: 10px;
  font-family: Roboto, Arial;
  font-size: 13px;
  margin: 15px;

  .title {
    overflow: hidden;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .full-width {
    width: 180px;
  }

  .address-line {
    color: #5B5B5B;
    font-family: Roboto, Arial;
  }

  .view-link {
    margin-top: 6px;
    &>* {
      color: #427fed;
      text-decoration: none;
    }
  }
}
</style>

<template>
  <div class="map-wrapper">
    <div class="map" ref="map">
    </div>
    <div id="top-left-widget" ref="top-left-widget" v-show="mapLoaded">
      <div class="title full-width">The Wond'ry</div>
      <div class="address-line full-width">2414 Highland Ave #102,</div>
      <div class="address-line full-width">Nashville, TN 37213</div>
      <div class="view-link">
        <a href="https://www.google.com/maps?cid=14093173697703109464" rel="noopener" target="_blank">View larger map</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapLoaded: false
    }
  },
  mounted() {
    if (process.server) return

    const GoogleMapsLoader = require('google-maps')
    GoogleMapsLoader.KEY = 'AIzaSyBxCpny2yWKW8U06L2c10K5WXnnXktjKTo'
    GoogleMapsLoader.LIBRARIES = ['places']
    const position = { lat: 36.142926, lng: -86.805989 }
    GoogleMapsLoader.load(google => {
      this.map = new google.maps.Map(this.$refs.map, {
        center: position,
        zoom: 16,
        minZoom: 5,
        scrollwheel: false,
        gestureHandling: 'cooperative',
        // clickableIcons: false,
        mapTypeControl: false,
        streetViewControl: false
      })

      this.mapLoaded = true
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.$refs['top-left-widget'])

      new google.maps.Marker({ // eslint-disable-line no-new
        map: this.map,
        position: position
      })
    })
  }
}
</script>