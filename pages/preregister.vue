<template>
  <div class="preregister">
    <h1>{{ email }}</h1>
    <email v-model="email" />
    <h1>{{ university }}</h1>
    <typeahead v-model="university" />
    reeee
  </div>
</template>

<script>
import EmailField from '~/components/prereg/EmailField.vue'
import Typeahead from '~/components/prereg/Typeahead.vue'

export default {
  data() {
    return {
      email: '',
      university: ''
    }
  },
  components: {
    email: EmailField,
    typeahead: Typeahead
  }
}
</script>