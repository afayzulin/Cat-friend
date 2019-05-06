<template>
  <div id="main-wrapper" class="relative">
    <header-component></header-component>
    <main>
      <section id="cat_friend__greeting">
        <h1 style="font-style: italic;">Портал о наших маленьких друзьях</h1>
        <b>Добро пожаловать на CatFriend!</b>
      </section>

      <section id="cat_friend__content">
        <div class="cat_friend__about___us____block cat_friend__block relative">
            <h2 class="text-center">О нас</h2>
            <div class="cat_friend__popular___posts____inner-text">
              Сайт посвященом вопросам здоровья и ухода за котиками. Вы можете найти любую интересующую Вас информацию,
              воспользовавшись <strong style="font-weight: 600;"><a title="To the search page" href="/search">поиском по сайту
              <img width="12px;" src="~assets/img/header/search.png"></a></strong>
            </div>
            <a href="" class="read_more">[Read more]</a>
        </div>

        <div class="cat_friend__popular___posts-left cat_friend__block relative">
            <img alt="Most popular" class="most-popular-icon" src="~assets/img/marks/most_popular.png">
            <img class="article_raiting" alt="Four and half star" src="~assets/img/marks/five_stars.png">
            <a href="" class="read_more">[Read more]</a>
            <h2 class="text-center">Любят ли кошки своих хозяев</h2>
            <div class="cat_friend__popular___posts____inner-text">Все мы безусловно любим наших мурчащих друзей,
              но вот любят ли они нас? Как понять - котейка действительно к Вам не равнодушен или просто подлизывается?
            </div>
            <img class="cat_friend__popular___posts____inner-img" src="~assets/img/index/cat_love.png">
        </div>

        <div @click="goToPage('/why-cats-meow')" class="cat_friend__popular___posts-right cat_friend__block relative">
          <img alt="Most popular" class="most-popular-icon" src="~assets/img/marks/most_popular.png">
          <img class="article_raiting" alt="Four and half star" src="~assets/img/marks/four_and_half_stars.png">
          <a @click.prevent href="/why-cats-meow" title="Почему коты мяукают" class="read_more">[Read more]</a>
          <h2 class="text-center">Почему коты мяукают</h2>
            <div class="cat_friend__popular___posts____inner-text">
              Сложно спутать это характерное "МЯУ" с каким-то другим звуком. Его знают все с детсва, но далеко не каждый
              в курсе что этот звук означает. Давайте же разберемся зачем и когда коошки мяукают.
            </div>
            <img class="cat_friend__popular___posts____inner-img" src="~assets/img/index/cat_meow.jpg">
        </div>
      </section>
      
      <section id="more--dinamic-text">
        <div class="text-center">***</div>
        <blockquote>
          <div class="text-dinamic-inner">Чужая душа – потемки, ну а кошачья – тем более.</div>
          <div>Автор: Антон Чехов</div>
          <br>
          ***
          <div class="text-dinamic-inner">Я изучил многих философов и многих кошек. Мудрость кошек неизмеримо выше.</div>
          <div>Автор: Ипполит Тэн</div>
          <br>
          ***
          <div class="text-dinamic-inner">Кошка и дрессировка – не такие уж несовместимые понятия. Всего за пару дней
            кошка может выдрессировать кого угодно.
          </div>
          <div>Автор: Грэхам Купер</div>
          <br>
          ***
          <div class="text-dinamic-inner">Коты не спрашивают, они просто берут все, что им надо.</div>
          <div>Автор: Кот Гарфилд</div>
          <br>
          ***
          
          <div class="text-dinamic-inner">Только кошки знают, как получить пищу без труда, жилище без замка и любовь без
            треволнений.
          </div>
          <div>Автор: У. Л. Джордж</div>
          <br>
          ***
          <div class="text-dinamic-inner">С точки зрения кошки, самое уютное место в доме – это место, на котором в
            данный момент сидит хозяин.
          </div>
          <span>Автор: неизвестен</span>
        </blockquote>
        <div class="text-center">***</div>
      </section>

      <section id="news">
        <div class="news_title">Рекомендуем к прочтению:</div>
        <div>
          <div class="cat_friend__news___block relative">
            <div class="text-center div-title"><a href="/">Могут ли кошки понимать нашу речь</a></div>
            <img src="~assets/img/index/cat_news.jpg">
            <div>Кошки легко могут “объяснять” нам свое настроение, издавая до 100 различных звуков. Но понимают ли они
              то, что мы им говорим, или же просто реагируют на несколько заученных команд?
            </div>
            <a href="" class="read_more">[Read more]</a>
          </div>
          <div class="cat_friend__news___block relative">
            <div class="text-center div-title"><a href="/">Когда и какие прививки делать коту</a></div>
            <img src="~assets/img/index/cat_news2.jpg">
            <div>Своевременная вакцинация – гарантия того, что животное, если и заболеет, легко перенесет недуг. Давайте
              рассмотрим, какие прививки нужно делать коту и в какой период подойдет лучше.
            </div>
            <a href="" class="read_more">[Read more]</a>
          </div>
          <div class="cat_friend__news___block relative">
            <div class="text-center div-title"><a href="/">Как понять, что котик приболел</a></div>
            <img src="~assets/img/index/cat_news4.jpg">
            <div>Из-за особенностей метаболизма, многие заболевания развиваются стремительно, и порой счет идет
              буквально на часы. Увы, хозяева не всегда могут это распознать.
            </div>
            <a href="" class="read_more">[Read more]</a>
          </div>
          <div class="cat_friend__news___block relative">
            <div class="text-center div-title"><a href="/">Как ухаживать за маленьким котенком</a></div>
            <img src="~assets/img/index/cat_news3.jpg">
            <div>
              Первые нескольео месяцев самые важные кирпичики в фундаменте здоровья нового члена семьи.
              Крайне важно знать как правильно заботиться о ушастом комочке и как с ним подружиться.
            </div>
            <a href="" class="read_more">[Read more]</a>
          </div>
        </div>
      </section>
    </main>

    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from '~/components/HeaderComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'
export default {
  head() {
    return {
      title: 'Cat Friend: Главная страница',
    }
  },
  data() {
    return {

    }
  },
  methods: {
    goToPage(page) {
      window.location.pathname = page;
    },
  },
  components: {
    HeaderComponent,
    FooterComponent
  },
}
</script>

<style>
  blockquote {
      padding: 10px 10px 10px 90px;
      margin: 20px 0 20px 0px;
      font-style: italic;
      display: block;
      background: url(~assets/img/index/quote.png) top left no-repeat;
  }
  
  .text-dinamic-inner {
    margin: 5px 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  h1 {
    margin: 25px 0 0 0;
  }

  h2 {
    text-transform: uppercase;
    font-size: 18px;
    margin: 23px 0 17px 0;
  }

  section {
    margin: 50px 0;
  }

  #cat_friend__content {
    display: grid;
    grid-template-columns: 30% 5% 30% 5% 30%;
    grid-template-rows: 350px;
  }

  .cat_friend__about___us____block {
     grid-column-start: 1;
     background: url(~assets/img/index/main_cats.jpg) no-repeat center bottom;
     background-size: 100%;
  }

  .cat_friend__popular___posts-left {
    grid-column-start: 3;
  }

  .cat_friend__popular___posts-right {
    grid-column-start: 5;
  }

  .cat_friend__block {
    border-radius: 8px;
    box-shadow: inset 0px 0px 1px 1px rgba(4,4,5,.5);
    cursor: pointer;
  }

  .cat_friend__block:hover, .cat_friend__news___block:hover {
    box-shadow: inset 0px 0px 1px 1px rgba(4,4,5, 1);
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

  .read_more {
    font-size: 12px;
    position: absolute;
    bottom: -15px;
    right: 10px;
    color: #0046BB;
    text-decoration: none;
  }

  .cat_friend__block:hover .read_more, .cat_friend__news___block:hover .read_more {
    text-decoration: underline;
  }

  .cat_friend__popular___posts____inner-text {
    width: 92%;
    text-align: center;
    margin: 0 auto;
    max-height: 90px;
    font-size: 18px;
  }

  .cat_friend__popular___posts____inner-img {
    width: 44%;
    position: absolute;
    bottom: 5px;
    left: 15px;
  }

  .hr {
    height: 3px;
    background: #e7e7e7;
  }

  .cat_friend__news___block .div-title {
    text-transform: uppercase;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .cat_friend__news___block {
    font-size: 17px;
    width: 20%;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    padding: 10px;
    box-shadow: inset 0 0 1px 1px rgba(4,4,5,.5);
    border-radius: 8px;
    text-align: left;
    margin: 0 1.61%;
  }

  .news_title {
    font-size: 18px;
    font-style: italic;
    margin-bottom: 10px;
    margin-left: 1.6%;
  }

  .cat_friend__news___block img {
    width: 100%;
    border-radius: 8px;
  }
</style>
<!-- TODO - adaptivnost dlya news block; adaptivnost full mob, footer, rubrika: nedavnie publikacii, dobavit novisti kotomira -->