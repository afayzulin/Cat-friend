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

        <div class="cat_friend__popular___posts-left cat_friend__block relative">
            <img title="Most viewed article" alt="Most popular" class="most-popular-icon" src="~assets/img/most_popular.png">
            <img class="article_raiting" title="Article rating" alt="Four and half star" src="~assets/img/five_stars.png">
            <h2 class="text-center">Do cats love their owners?</h2>
        </div>

        <div class="cat_friend__popular___posts-right cat_friend__block relative">
          <img title="Most viewed article" alt="Most popular" class="most-popular-icon" src="~assets/img/most_popular.png">
          <img class="article_raiting" title="Article rating" alt="Four and half star" src="~assets/img/four_and_half_stars.png">
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
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
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

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    margin: 25px 0;
  }

  #cat_friend__greeting {
    margin: 50px 0;
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
    box-shadow: inset 0px 0px 1px 1px rgba(4,4,5,.15);
    cursor: pointer;
  }

  .cat_friend__block:hover {
    background-color: rgba(0,0,0,0.02);
  }

  .most-popular-icon {
    position: absolute;
    top: -15px;
    left: -38px;
    width: 40%;
    -webkit-transform: rotate(-28deg);
    transform: rotate(-10deg);
  }

  .article_raiting {
    width: 40%;
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
</style>
