<template>
  <div id="main-wrapper" class="relative">
    <header-component></header-component>
    <main>
      <section :id="'cat_friend__'+$store.state.links.whyCatsMeow+'___greeting'">
        <h1 style="font-style: italic;">Почему коты мяукают</h1>
        <b><i>В данной статье мы постараемся ответить:<br> когда, зачем и самое главное почему коты мяукают?</i></b>
      </section>

      <section class="cat_friend__article___content">
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

</style>