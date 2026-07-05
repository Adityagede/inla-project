import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../pages/Beranda.vue'
import TentangKami from '../pages/TentangKami.vue'
import Program from '../pages/Program.vue'
import Galeri from '../pages/Galeri.vue'
import Kontak from '../pages/Kontak.vue'

const routes = [
  { path: '/', component: Beranda },
  { path: '/tentang-kami', component: TentangKami },
  { path: '/program', component: Program },
  { path: '/galeri', component: Galeri },
  { path: '/kontak', component: Kontak },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router