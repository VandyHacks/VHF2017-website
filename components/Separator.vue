<template>
  <div :class="{ separator: true, white: white }">
  </div>
</template>

<script>
export default {
  props: {
    white: {
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
  background: #000;
  margin: 27.5px auto 20px;

  &.white {
    background: #fff;
  }
}
</style>
