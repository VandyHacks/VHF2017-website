<template>
  <nuxt/>
</template>

<style>
@font-face {
  font-family: 'Sofia Pro';
  src: url("~assets/fonts/SofiaProRegular.woff2") format("woff2"), url("~assets/fonts/SofiaProRegular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: 'Sofia Pro', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body,
html {
  overflow: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
