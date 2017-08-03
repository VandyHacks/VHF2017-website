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
  box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
  background-color: white;
  padding: 10px;
  font-family: 'Roboto', Arial;
  font-size: 12px;
  margin: 15px;
  border-radius: 2px;

  .address {
    display: inline-block;
  }

  .title {
    overflow: hidden;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 6px;
  }

  .full-width {
    width: 160px;
  }

  .address-line {
    color: #5B5B5B;
  }

  .link-wrapper {
    margin-top: 6px;
  }

  .view-link,
  .navigate-link {
    color: #427fed;
    text-decoration: none;
  }

  .view-link:hover {
    text-decoration: underline;
  }

  .directions {
    float: right;
    padding: 0 7px;
    display: none;

    @media (min-width: 432px) {
      display: block;
    }

    &:hover {
      cursor: pointer;

      .navigate-icon {
        background-position: 48px 0px;
      }

      .navigate-link {
        text-decoration: underline;
      }
    }
  }

  .navigate-icon {
    background-image: url(https://maps.gstatic.com/mapfiles/embed/images/entity11.png);
    background-size: 70px 210px;
    width: 22px;
    height: 22px;
    overflow: hidden;
    margin: 0 auto;
    background-position: 0px 0px;

    @media (-webkit-min-device-pixel-ratio: 1.2), (min-resolution: 1.2dppx), (min-resolution: 116dpi) {
      background-image: url(https://maps.gstatic.com/mapfiles/embed/images/entity11_hdpi.png);
    }
  }
}
</style>

<template>
  <div class="map-wrapper">
    <div class="map" ref="map">
    </div>
    <div id="top-left-widget" ref="top-left-widget" v-show="mapLoaded">
      <div class="address">
        <div class="title full-width">The Wond'ry</div>
        <div class="address-line full-width">2414 Highland Ave #102,</div>
        <div class="address-line full-width">Nashville, TN 37213</div>
        <div class="link-wrapper">
          <a href="https://www.google.com/maps/search/?api=1&query=The+Wond%27ry&query_place_id=ChIJd_uqbKNmZIgRWON4Kc8ClcM" class="view-link" rel="noopener" target="_blank">View on Google Maps</a>
        </div>
      </div>
      <a href="https://www.google.com/maps/dir/?api=1&destination=The+Wond%27ry&destination_place_id=ChIJd_uqbKNmZIgRWON4Kc8ClcM" rel="noopener" target="_blank">
        <div class="directions">
          <div class="navigate-icon" />
          <div class="link-wrapper">
            <span class="navigate-link">Directions</span>
          </div>
        </div>
      </a>
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