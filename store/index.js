import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        links: {
            homeLink: '/',
            whyCatsMeow: 'why-cats-meow',
        },
    },
});

export default store