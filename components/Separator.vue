<template>
  <div :class="{ separator: true, dark: dark }">
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.separator {
  width: 60px;
  height: 4px;
  background: #fff;
  margin: 20px auto;

  &.dark {
    background: #000;
  }
}
</style>
