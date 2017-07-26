<style lang="scss" scoped>
.faq-item {
  margin: 10px 0 10px 10px;
}

.question {
  cursor: pointer
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transform-origin: top;
}

.slide-fade-enter-active {
  transition: transform .25s;
}

.slide-fade-leave-active {
  transition: transform .1s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: scaleY(0);
}

.slide-fade-enter-to {
  transform: scaleY(1);
}
</style>

<template>
  <div class="faq-item">
    <h4 class="question" @click="open = !open">{{ title }}</h4>
    <transition name="slide-fade">
      <div v-if="open">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      open: false
    }
  }
}
</script>