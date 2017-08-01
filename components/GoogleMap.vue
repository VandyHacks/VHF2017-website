<style lang='scss' scoped>
.map {
  height: 500px;
  background: #e5e3df;
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
        scrollwheel: false,
        styles: [
          {
            'featureType': 'administrative',
            'elementType': 'all',
            'stylers': [
              {
                'hue': '#2c2e33'
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
                'lightness': 100
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
                'hue': '#ffffff'
              },
              {
                'saturation': -100
              },
              {
                'lightness': 100
              },
              {
                'visibility': 'off'
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
                'lightness': 31
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
                'lightness': -8
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
                'lightness': 69
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
                'hue': '#e9ebed'
              },
              {
                'saturation': -78
              },
              {
                'lightness': 67
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