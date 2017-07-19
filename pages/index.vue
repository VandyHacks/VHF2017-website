<template>
  <section class="container">
    <div class="top-viewport">
      <div class="title-text parallax" data-rellax-speed="-10">
        <img class="title" src="/vandyhacks-text.svg" />
        <h2 class="subtitle">
          October 20-22 at Vanderbilt University
        </h2>
      </div>
      <img class="batman-building parallax" src="/batman.svg" data-rellax-speed="-5"/>
    </div>
    <div class="page-content">
      aaa
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

<style>
.container {
  min-height: 100vh;
  flex-flow: column;
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
  max-width: 600px;
  left: 0;
  right: 0;
  margin: 33vh auto 0;
  z-index: -1;
}

.page-content {
  flex: 2;
  background: red;
}
</style>
