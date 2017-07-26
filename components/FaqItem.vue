<style lang="scss" scoped>
.faq-item {
  margin: 10px 0 10px 10px;
}

.question {
  cursor: pointer;
  display: flex;
}

.title {
  display: inline-block;
  line-height: 24px;
}

.answer {
  margin-top: 5px;
  margin-left: 19px;
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

.arrow-wrapper {
  position: relative;
  display: inline-block;
  margin-right: 10px;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: all 0.25s;

  &.down {
    transform: rotate(-45deg);
  }

  &.up {
    transform: rotate(45deg);
  }
}
</style>

<template>
  <div class="faq-item">
    <div class="question" @click="open = !open">
      <div class="arrow-wrapper">
        <i class="arrow" :class="arrowDirection"></i>
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
      return this.open ? 'up' : 'down'
    }
  }
}
</script>