<template>
  <div id="main-wrapper">
    <header-component></header-component>
  </div>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent.vue'

export default {
  head () {
    return {
      title: 'Cat Friend: HOME',
    }
  },

  components: {
    HeaderComponent
  },
}
</script>

<style>
  
    body {
      font-family: sans-serif;
    }

    #main-wrapper {
      max-width: 1300px;
      margin: 0 auto;
    }

    ul {
      padding: 0;
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
</style>
