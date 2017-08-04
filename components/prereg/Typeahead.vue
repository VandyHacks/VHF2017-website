<style lang="scss" scoped>
.uni-list-container {
  position: absolute;
  z-index: 4;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.3)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  margin-bottom: 10px;
  .list-wrapper {
    display: inline-block;
    min-width: 290px;
    padding: 0;
    .caret {
      width: 0px;
      height: 8px;
      left: 0;
      right: 0;
      margin: auto auto auto 15px;
      content: '';
      border-bottom: 8px solid white;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }
  }
  ul {
    list-style: none;
    padding: 4px 0px;
    margin: 0;
    margin-top: -1px;
    background: white;
  }
  li {
    color: #000;
    padding: 8px 12px;
    text-align: left;
    font-size: 13.3333px;
    &.active {
      background: darken(white, 10%);
      cursor: default;
    }
  }
}
</style>

<template>
  <div class="typeahead-container">
    <div class="input-wrapper" v-bind:class="typeaheadIndicatorClass === 'icon-attention-circled' ? 'attention' : null">
      <input type="text" placeholder="University Name" autocomplete="off" v-model="query" @keydown.down="down" @keydown.up="up" @keydown.tab="hit" @keydown.enter="processEnter" @input="update" @keydown.esc="reset" @blur="reset" @focus="update" :readonly="submitted" />
      <span class="fa" v-bind:class="typeaheadIndicatorClass"></span>
    </div>
    <div class="uni-list-container">
      <div class="list-wrapper" v-show="hasItems">
        <div class="caret"></div>
        <ul>
          <li v-for="(item, $item) in items" :key="item.name" :class="activeClass($item)" @mousedown="hit" @mousemove="setActive($item)">
            <span v-text="item.name"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypeahead from 'vue-typeahead'
import universityList from './universities.json'
import createTrie from 'autosuggest-trie'

const universities = universityList.map(uni => ({ name: uni }))
const splitByHyphen = /\s+|-/
const trie = createTrie(universities, 'name', { splitRegex: splitByHyphen })

export default {
  extends: VueTypeahead,
  props: ['submitted'],
  data() {
    return {
      src: '/findunis',
      selected: ''
    }
  },
  methods: {
    processEnter() {
      if (this.current !== -1) {
        this.onHit(this.items[this.current])
      } else {
        this.$emit('pressed:enter')
      }
    },
    // The callback function which is triggered when the user hits on an item
    // (required)
    onHit(item) {
      this.reset()
      if (item) {
        this.query = item.name
      }
    },
    reset() {
      this.items = []
      this.current = -1
      this.loading = false
    },
    fetch() {
      let results
      const trimmedQuery = this.query.trim()
      if (trimmedQuery === '') {
        results = []
      } else {
        results = trie.getMatches(trimmedQuery, { limit: 15, splitRegex: splitByHyphen })
        const ranks = {}
        const normalizedQuery = trimmedQuery.split(splitByHyphen).join(' ').toLowerCase()
        for (const result of results) {
          const normalizedResult = result.name.split(splitByHyphen).join(' ').toLowerCase()
          if (normalizedResult === normalizedQuery) {
            ranks[result.name] = 3
          } else if (normalizedResult.startsWith(normalizedQuery)) {
            ranks[result.name] = 2
          } else if (normalizedResult.includes(normalizedQuery)) {
            ranks[result.name] = 1
          } else {
            ranks[result.name] = 0
          }
        }
        results = Object.keys(ranks)
          .sort((a, b) => ranks[b] - ranks[a]).slice(0, 5)
          .map(result => ({ name: result }))
        if (results.length === 1 && results[0].name === trimmedQuery) {
          results = []
        }
      }
      return Promise.resolve({ data: results })
    }
  },
  computed: {
    typeaheadIndicatorClass() {
      if (this.query.trim() === '') {
        return 'icon-graduation-cap'
      } else if (this.query.length < 8) {
        return 'icon-attention-circled'
      } else {
        return 'icon-ok-circled'
      }
    }
  },
  watch: {
    query(val) {
      this.$emit('input', val)
    }
  }
}
</script>
