<template>
  <div id="main-wrapper">
    <header-component></header-component>
    <main>
      <section id="cat_friend__greeting">
        <h1>Welcome to CatFriend Home page</h1>
        <b>Portal about our little friends</b>
      </section>

      <section id="cat_friend__content">
        <div class="cat_friend__about___us____block cat_friend__block">
            <h2 class="text-center">About us</h2>
        </div>

        <div class="cat_friend__popular___posts-left cat_friend__block">
          
        </div>

        <div class="cat_friend__popular___posts-right cat_friend__block">
          
        </div>
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

    #cat_friend__greeting {
      margin-bottom: 25px;
    }

    #cat_friend__content {
      display: grid;
      grid-template-columns: 30% 5% 30% 5% 30%;
      grid-template-rows: 350px;
    }

    .cat_friend__about___us____block {
       grid-column-start: 1;
    }

    .cat_friend__popular___posts-left {
      grid-column-start: 3;
    }

    .cat_friend__popular___posts-right {
      grid-column-start: 5;
    }

    .cat_friend__block {
      border-radius: 8px;
      box-shadow: inset 1px 1px 1px 0 rgba(4,4,5,.15)
    }
</style>
