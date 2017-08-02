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
  font-size: 12px;
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
    & > * {
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
      <div class="poi-info-window">
        <div class="title full-width">The Wond'ry</div>
        <div class="address-line full-width">2414 Highland Ave #102,</div>
        <div class="address-line full-width">Nashville, TN 37213</div>
        <div class="view-link">
          <a href="https://www.google.com/maps?cid=14093173697703109464" rel="noopener" target="_blank">View larger map</a>
        </div>
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
    GoogleMapsLoader.load(google => {
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat: 36.142926, lng: -86.805989 },
        zoom: 16,
        minZoom: 5,
        scrollwheel: false,
        gestureHandling: 'cooperative',
        clickableIcons: false,
        mapTypeControl: false,
        styles: [
          {
            'featureType': 'administrative',
            'elementType': 'all',
            'stylers': [
              {
                'hue': '#222a53'
              },
              {
                'saturation': 7
              },
              {
                'lightness': 19
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'all',
            'stylers': [
              {
                'hue': '#ffffff'
              },
              {
                'saturation': -100
              },
              {
                'lightness': 20
              },
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi.school',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
              {
                'hue': '#bbc0c4'
              },
              {
                'saturation': -93
              },
              {
                'lightness': 0
              },
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels',
            'stylers': [
              {
                'hue': '#bbc0c4'
              },
              {
                'saturation': -93
              },
              {
                'lightness': 31
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'labels',
            'stylers': [
              {
                'hue': '#bbc0c4'
              },
              {
                'saturation': -93
              },
              {
                'lightness': -2
              },
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
              {
                'hue': '#e9ebed'
              },
              {
                'saturation': -90
              },
              {
                'lightness': -25
              },
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'all',
            'stylers': [
              {
                'hue': '#e9ebed'
              },
              {
                'saturation': 10
              },
              {
                'lightness': 40
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
              {
                'hue': '#222a53'
              },
              {
                'saturation': -85
              },
              {
                'lightness': 0
              },
              {
                'visibility': 'simplified'
              }
            ]
          }
        ]
      })

      this.mapLoaded = true
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(this.$refs['top-left-widget'])

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