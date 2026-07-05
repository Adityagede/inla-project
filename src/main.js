import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'swiper/css'

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
})

createApp(App).use(router).mount('#app')