<template>
  <div id="main-wrapper" class="relative">
    <header-component></header-component>
  </div>
</template>

<script>
    import HeaderComponent from '~/components/HeaderComponent.vue'
    export default {
        head() {
            return {
                title: 'Cat Friend: Почему коты мяукают?',
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
            HeaderComponent
        },
    }
</script>

<style>

</style>