<template>
  <section class="container">
    <div class="top-viewport">
      <div class="title-text parallax" data-rellax-speed="-10">
        <img class="title" src="~assets/img/vandyhacks-text.svg" />
        <h2 class="subtitle">
          October 20-22 at Vanderbilt University
        </h2>
      </div>
      <img class="batman-building parallax" src="~assets/img/batman.svg" data-rellax-speed="-5" />
    </div>
    <div class="page-content">
      <div class="description">
        <div class="text-contents">
          Founded in the spring of 2015, VandyHacks was the first collegiate hackathon to call the rockin' city of Nashville, Tennessee home. Now, we're proud to bring you VandyHacks III- and it's gonna be even bigger and better. From November 11-13, 350+ students from universities all over the nation will meet at Vanderbilt University for a weekend of collaboration, innovation, and great food.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Rellax from 'rellax'

export default {
  mounted() {
    this.rellax = new Rellax('.parallax')
  },
  destroyed() {
    this.rellax.destroy()
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  flex-flow: column;
  display: flex;
}

.top-viewport {
  display: flex;
  height: 100vh;
}

.title-text {
  margin-top: 20vh;
  margin-left: auto;
  margin-right: auto;
  z-index: -2;
}

.subtitle {
  font-size: 36px;
  color: #374c5f;
}

.batman-building {
  position: absolute;
  max-width: 512px;
  left: 0;
  right: 0;
  margin: 33vh auto 0;
  z-index: -1;
}

.page-content {
  flex: 1;
  background: #fff;
}

.text-contents {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.description {
  background: #253340;
  padding: 50px;


}
</style>
