<style lang="scss" scoped>
.faq-item {
  margin: 10px 0;
}

.question {
  cursor: pointer
}
</style>

<template>
  <div class="faq-item">
    <h4 class="question" @click="open = !open">{{ title }}</h4>
    <div v-if="open">
      <slot/>
    </div>
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