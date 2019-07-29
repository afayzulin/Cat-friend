<template>
  <div id="main-wrapper" class="relative">
    <header-component></header-component>
    <main>
      <section :id="'cat_friend__'+$store.state.links.whyCatsMeow+'___greeting'">
        <h1 class="text-center" style="font-style: italic;">Почему коты мяукают</h1>
      </section>

      <section class="cat_friend__promo___block">
          <div class="cat_friend__promo___block-img eat"></div>
          <div class="cat_friend__promo___block-img play"></div>
          <div class="cat_friend__promo___block-img touch"></div>
      </section>

      <section class="cat_friend__article___content">
        <div>В данной статье мы постараемся ответить - когда, зачем и самое главное почему коты мяукают?</div>
        <div>
          Некоторых людей кошачье мяуканье раздражает и даже злит, но можете быть уверены - разозлить человека, это
          последнее чего хочет котейка. Ведь мяукают котики совсем не из вредности, разве что иногда :)
        </div>
        <div>
          Первое что нужно знать и понимать - коты так общаются. Мяуканье это ключевой элемент <strong>"Языка общения кошек"</strong>,
          в него так же входят такие элементы как жесты и мимика, но кошки в основном передают всю информацию при помощи
          звуков. В зависимости от ситуации и того что кошка хочет сказать меняется тон, сила и тембр.<br>
          Давайе сразу расставим все точки над ё - взрослые кошки <strong>обычно мяукают только людям</strong>
          (котята мяукают, когда хотят сообщить маме, что они замерзли или проголодались).
        </div>

        <div>
          Вот что в основном ваш пушистый друг хочет вам сказать:
          <ol>
            <li>
              <div>Обрати на меня внимание!</div>
              <div>
                Не смотря на то, что про котов говорят "Они гуляют сами по себе", одной из самых частых причин мяуканья
                якляется желание обратить на себя внимание. Котам, как и практически любым живым существа, хочется что
                бы их приласкали, поиграли или просто поговорили. Обратите внимание на обстановку, что бы лучше понять
                чего хочет от вас пушистый.
              </div>
            </li>
          </ol>
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
                title: 'Cat Friend: Почему коты мяукают?',
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

<style scoped>
  .cat_friend__promo___block {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    border: 1px solid;
    box-shadow: inset 0px 0px 1px 1px rgba(4,4,5,.5);
  }

  .cat_friend__promo___block-img {
    width: 350px;
    height: 350px;
    margin: 0 20px;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .cat_friend__promo___block-img.eat {
    background-image: url(~assets/img/pages/whyCatsMeow/eat.jpg);
  }

  .cat_friend__promo___block-img.play {
    background-image: url(~assets/img/pages/whyCatsMeow/play.jpg);
  }

  .cat_friend__promo___block-img.touch {
    background-image: url(~assets/img/pages/whyCatsMeow/touch.jpg);
  }
</style>