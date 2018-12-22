<template>
  <div id="main-wrapper">
    <header-component></header-component>
    <main>
      <section id="greeting">
        <h1>Welcome to CatFriend Home page</h1>
        <b>Portal about our little friends</b>
      </section>

      <section id="content">
        
      </section>
    </main>
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

    h1 {
      margin: 25px 0 0 0;
    }

    #content {
      display: grid;
      grid-template-columns: 40px auto 40px;
      grid-template-rows: 500px;
    }
</style>
