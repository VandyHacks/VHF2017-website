<style lang="scss" scoped>
.faq-item {
  margin: 10px 0 10px 10px;
}

.question {
  cursor: pointer;
  display: flex;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.title {
  display: inline-block;
  line-height: 24px;
  font-weight: bold;
  font-size: 1.1em;
}

.answer {
  margin-left: 22px;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transform-origin: top;
}

.slide-fade-enter-active {
  transition: all .25s ease-out;
}

.slide-fade-leave-active {
  transition: all .2s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}

.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.arrow-wrapper {
  margin-right: 10px;
}

.arrow {
  height: 26px;
  width: 12px;
  transition: transform 0.25s;

  &.right {
    transform: rotate(90deg);
  }
}
</style>

<template>
  <div class="faq-item">
    <div class="question" @click="open = !open">
      <div class="arrow-wrapper">
        <img class="arrow" :class="arrowDirection" src="~assets/img/arrow.svg" />
      </div>
      <h4 class="title">{{ title }}</h4>
    </div>
    <transition name="slide-fade">
      <div v-if="open" class="answer">
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
  },
  computed: {
    arrowDirection() {
      return this.open ? 'right' : 'down'
    }
  }
}
</script>