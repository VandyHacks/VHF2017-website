<style lang="scss">
@import '~assets/prereg/fontello.css';

$primary-color: #222a53;

.preregister-wrapper {
  height: 100vh;
}

.preregister {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .input-box {
    text-align: center;
  }

  h1 {
    color: $primary-color;
    margin-bottom: 10px;
  }

  .input-wrapper {
    border: 2px solid $primary-color;
    transition: all 0.25s;
    width: 290px;
    margin: 15px 0 5px;
    border-radius: 2px;
  }

  input {
    margin: 0px;
    outline: none;
    border: none;
    font-size: 13.333px;
    &[type="text"],
    &[type="email"] {
      background: transparent;
      padding-right: 0px;
      margin-right: 0px;
      font-family: 'Sofia Pro', sans-serif;
      color: $primary-color;
      font-size: 14px;
      padding: 10px;
      width: 240px;
    }
  }

  .fa,
  input[type="submit"] {
    transition: all 0.25s;
  }

  input[type="submit"] {
    margin-top: 10px;
    $btn-bg: #222a53;
    $btn-font-size: 16px;
    $btn-padding-v: 10px;
    $btn-padding-h: 3 * $btn-padding-v;
    font-family: 'Sofia Pro',
    sans-serif;
    width: 290px;

    color: white;
    background-color: $btn-bg;
    border-radius: 2px;
    -webkit-border-radius: 2px;
    text-decoration: none;
    padding: $btn-padding-v $btn-padding-h;
    font-size: $btn-font-size;
    font-weight: bold;
    transition: all 0.15s linear;
    -webkit-tap-highlight-color: transparent;

    &:hover,
    &:focus {
      background-color: #394574;
    }

    &[disabled] {
      opacity: 0.5;
      background-color: $btn-bg;
    }

    &:active {
      background-color: darken($btn-bg, 10%);
      transform: scale(0.98);
    }
  }

  .fa {
    color: $primary-color;
    padding: 9px;
  }

  $warn-color: #c75566;

  .icon-attention-circled {
    color: $warn-color;
  }

  .input-wrapper.attention {
    border: 2px solid $warn-color;
  }

  .status-message {
    color: $primary-color;
    font-size: 1.33em;
    padding: 50px;

    @media (max-width: 575px) {
      font-size: 1.14em;
      padding: 20px;
    }
  }
}

.prereg-close {
  position: fixed;
  top: 32px;
  right: 32px;
  height: 24px;
  width: 24px;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    transform: scale(0.93);
  }

  @media (max-width: 575px) {
    top: 24px;
    right: 24px;
    height: 16px;
    width: 16px;
  }
}
</style>

<template>
  <div class="preregister-wrapper">
    <div class="preregister">
      <div class="input-box" v-if="!statusMessage">
        <h1>Get Notified</h1>
        <email v-model="email" @pressed:enter="submitRegistration" />
        <typeahead v-model="university" @pressed:enter="submitRegistration" />
        <input type="submit" :value="submitted ? 'Submitting...' : 'Submit'" :class="{ submitted: submitted }" :disabled="!submitAllowed" @click="submitRegistration">
      </div>
      <div class="status-message" v-else v-html="statusMessage" />
    </div>
    <img src="~assets/prereg/close.svg" alt="Close" class="prereg-close" @click="$router.push('/')" />
  </div>
</template>

<script>
import EmailField from '~/components/prereg/EmailField.vue'
import Typeahead from '~/components/prereg/Typeahead.vue'
import EmailValidator from 'email-validator'

const endpoint = 'https://prereg.vandyhacks.org/'

export default {
  data() {
    return {
      email: '',
      university: '',
      submitted: false,
      statusMessage: null
    }
  },
  components: {
    email: EmailField,
    typeahead: Typeahead
  },
  computed: {
    submitAllowed() {
      return this.email.trim() !== '' && EmailValidator.validate(this.email) &&
        this.university.trim() !== '' && this.university.length >= 8 &&
        !this.submitted
    }
  },
  methods: {
    submitRegistration() {
      if (!this.submitAllowed) {
        return
      }
      this.submitted = true
      const params = { email: this.email, university: this.university }
      const xhr = new XMLHttpRequest()
      xhr.open('POST', endpoint + 'signup', true)
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          this.statusMessage = JSON.parse(xhr.responseText).status
        }
      }
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(params))
    }
  },
  mounted() {
    // Wake up dyno if applicable
    const xhr = new XMLHttpRequest()
    xhr.open('GET', endpoint + 'ping', true)
    xhr.send()
  }
}
</script>