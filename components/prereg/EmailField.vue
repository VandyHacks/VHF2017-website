<template>
  <div class="email-container">
    <div class="input-wrapper" v-bind:class="emailIndicatorClass === 'icon-attention-circled' ? 'attention' : null">
      <input ref="emailInput" type="email" placeholder="Email Address" v-model="email" @keydown.enter="processEnter" :readonly="submitted" />
      <span class="fa" :class="emailIndicatorClass"></span>
    </div>
  </div>
</template>

<script>
import EmailValidator from 'email-validator'

export default {
  props: ['submitted'],
  data() {
    return {
      email: ''
    }
  },
  methods: {
    processEnter() {
      this.$emit('pressed:enter')
    }
  },
  computed: {
    emailIndicatorClass() {
      if (this.email.trim() === '') {
        return 'icon-mail-alt'
      } else if (!EmailValidator.validate(this.email)) {
        return 'icon-attention-circled'
      } else {
        return 'icon-ok-circled'
      }
    }
  },
  watch: {
    email(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.$refs.emailInput.focus()
  }
}
</script>
