<style lang='scss' scoped>
.map {
  height: 500px;
  background: #e5e3df;

  /deep/ {
    .poi-info-window {
      font-size: 13px;

      .title {
        overflow: hidden;
        font-weight: 500;
        font-size: 14px;
      }

      .full-width {
        width: 180px;
      }

      .address-line {
        color: #333;
        font-family: Roboto, Arial;
      }

      .view-link > :first-child {
        text-decoration: none;
      }
    }

    .gm-style-iw > * {
      display: none;
    }
  }
}
</style>

<template>
  <div class='map'>
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
        minZoom: 5,
        scrollwheel: false,
        gestureHandling: 'cooperative',
        clickableIcons: false,
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

      const placeId = 'ChIJd_uqbKNmZIgRWON4Kc8ClcM'
      const service = new google.maps.places.PlacesService(this.map)
      const infoWindow = new google.maps.InfoWindow({
        content: `
        <div class="poi-info-window gm-style">
          <div class="title full-width">The Wond'ry</div>
          <div class="address-line full-width">2414 Highland Ave #102,</div>
          <div class="address-line full-width">Nashville, TN 37213</div>
          <div class="view-link"><a href="https://www.google.com/maps?cid=14093173697703109464" rel="noopener" target="_blank">View on Google Maps</a></div>
        </div>
        `
      })

      service.getDetails({
        placeId: placeId
      }, (result, status) => {
        const marker = new google.maps.Marker({ // eslint-disable-line no-new
          map: this.map,
          place: {
            placeId: placeId,
            location: result.geometry.location
          }
        })
        marker.addListener('click', () => infoWindow.open(this.map, marker))
      })
    })
  },
  beforeDestroy() {

  }
}
</script>