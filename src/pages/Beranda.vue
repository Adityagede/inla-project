<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import heroOne from '../assets/images/hero-landing1.webp'
import heroTwo from '../assets/images/hero-landing2.webp'
import heroThree from '../assets/images/hero-landing1.webp'
import logoInternational from '../assets/logo/logo-inla.png'
import logoBali from '../assets/logo/inla-bali.png'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const currentSlide = ref(0)

let sliderTimer = null

const programDropdown = [
  { label: 'Pelestarian Budaya', path: '/program' },
  { label: 'Edukasi Budaya', path: '/program' },
  { label: 'Kolaborasi Komunitas', path: '/program' },
]

const galleryDropdown = [
  { label: 'Galeri Foto', path: '/galeri' },
  { label: 'Dokumentasi Kegiatan', path: '/galeri' },
  { label: 'Kegiatan Terbaru', path: '/galeri' },
]

const slides = [
  {
    image: heroOne,
    eyebrow: 'INLA BALI',
    title: ['Bersama Merawat', 'Warisan Budaya', 'Bali'],
    description:
      'INLA Bali hadir sebagai komunitas yang berkomitmen untuk melestarikan, menghidupkan, dan memperkenalkan nilai-nilai budaya Bali melalui program, kegiatan, dan kolaborasi yang bermakna.',
    cta: 'Apa Itu INLA',
    path: '/tentang-kami',
    position: 'center',
  },
  {
    image: heroTwo,
    eyebrow: 'BUDAYA & GENERASI',
    title: ['Menghidupkan Budaya', 'Untuk Generasi', 'Masa Kini'],
    description:
      'Melalui kegiatan budaya, ruang belajar, dan dokumentasi kegiatan, INLA Bali mengajak generasi muda untuk lebih dekat dengan nilai dan identitas budaya Bali.',
    cta: 'Lihat Program',
    path: '/program',
    position: 'center',
  },
  {
    image: heroThree,
    eyebrow: 'KOLABORASI BUDAYA',
    title: ['Ruang Bersama', 'Untuk Budaya', 'Yang Bermakna'],
    description:
      'INLA Bali membangun ruang kolaborasi yang hangat bersama komunitas, pelaku budaya, dan masyarakat untuk menjaga warisan budaya Bali agar tetap hidup.',
    cta: 'Lihat Kegiatan',
    path: '/galeri',
    position: 'center',
  },
]

const activeSlide = computed(() => slides[currentSlide.value])

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prevSlide() {
  currentSlide.value =
    currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

function goToSlide(index) {
  currentSlide.value = index
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

function closeMobileMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)

  sliderTimer = setInterval(() => {
    nextSlide()
  }, 6500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearInterval(sliderTimer)
})
</script>

<template>
  <main class="min-h-screen bg-[#FAF6ED] text-[#1F241F]">
    <header class="fixed left-0 top-0 z-50 w-full">
      <!-- TOP BAR -->
      <div
        class="overflow-hidden bg-[#0E1B15] transition-all duration-500 ease-in-out"
        :class="isScrolled ? 'h-0 opacity-0' : 'h-11 opacity-100'"
      >
        <div class="mx-auto flex h-11 max-w-7xl items-center justify-between px-6 text-sm">
          <div class="flex items-center gap-5">
            <button class="text-white/80 transition hover:text-white">
              English
            </button>
            <button class="font-semibold text-[#C7A45D]">
              Indonesian
            </button>
          </div>

          <p class="hidden text-xs tracking-[0.22em] text-white/45 md:block">
            OFFICIAL WEBSITE OF INLA BALI
          </p>
        </div>
      </div>

      <nav
  class="relative border-b transition-all duration-500 ease-in-out"
  :class="isScrolled
    ? 'border-[#174D3F]/10 bg-white/92 shadow-lg shadow-black/5 backdrop-blur-xl'
    : 'border-[#174D3F]/5 bg-white shadow-sm'"
>
  <div
    class="mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500"
    :class="isScrolled ? 'py-3' : 'py-5'"
  >
    <!-- LOGO AREA: 2 LOGO -->
    <RouterLink
      to="/"
      class="group flex items-center gap-5"
      @click="closeMobileMenu"
    >
      <div class="flex items-center gap-4">
        <img
          :src="logoInternational"
          alt="INLA International"
          class="object-contain transition-all duration-500"
          :class="isScrolled ? 'h-10' : 'h-14'"
        />

        <div
          class="w-px bg-[#174D3F]/30 transition-all duration-500"
          :class="isScrolled ? 'h-10' : 'h-14'"
        ></div>

        <img
          :src="logoBali"
          alt="INLA Bali"
          class="object-contain transition-all duration-500"
          :class="isScrolled ? 'h-10' : 'h-14'"
        />
      </div>
        <div>
              <p
                class="font-serif font-bold tracking-[-0.02em] text-[#174D3F] transition-all duration-500"
                :class="isScrolled ? 'text-lg' : 'text-2xl '"
              >
                INLA Bali
              </p>
              <p
                class="text-[#756F63] transition-all duration-500"
                :class="isScrolled ? 'text-[11px]' : 'text-xs'"
              >
                International Nature Loving Association
              </p>
            </div>
    </RouterLink>

    <!-- DESKTOP NAV -->
    <div class="hidden items-center gap-8 lg:flex">
      <RouterLink
        to="/"
        class="relative py-2 text-sm font-semibold text-[#1F241F]/75 transition hover:text-[#174D3F]
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#C7A45D] after:transition-all after:duration-300 hover:after:w-full"
      >
        Beranda
      </RouterLink>

      <RouterLink
        to="/tentang-kami"
        class="relative py-2 text-sm font-semibold text-[#1F241F]/75 transition hover:text-[#174D3F]
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#C7A45D] after:transition-all after:duration-300 hover:after:w-full"
      >
        Tentang Kami
      </RouterLink>

      <!-- PROGRAM MEGA DROPDOWN -->
      <div
        class="relative"
        @mouseenter="openDropdown('program')"
        @mouseleave="closeDropdown"
      >
        <RouterLink
          to="/program"
          class="relative flex items-center gap-1 py-2 text-sm font-semibold text-[#1F241F]/75 transition hover:text-[#174D3F]
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#C7A45D] after:transition-all after:duration-300 hover:after:w-full"
        >
          Program
          <span
            class="text-xs transition duration-300"
            :class="activeDropdown === 'program' ? 'rotate-180 text-[#C7A45D]' : ''"
          >
            ⌄
          </span>
        </RouterLink>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-3 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-2 opacity-0"
        >
          <div
            v-if="activeDropdown === 'program'"
            class="absolute left-1/2 top-10 z-[70] w-[680px] -translate-x-1/2 rounded-[1.75rem] border border-[#174D3F]/10 bg-white p-4 shadow-2xl shadow-black/12"
          >
            <div class="grid grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[1.25rem]">
              <div class="bg-[#174D3F] p-6 text-white">
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-[#C7A45D]">
                  Program INLA Bali
                </p>

                <h3 class="mt-4 font-serif text-2xl font-bold leading-snug">
                  Ruang kegiatan untuk menjaga dan menghidupkan budaya Bali.
                </h3>

                <p class="mt-4 text-sm leading-7 text-white/70">
                  Jelajahi program utama INLA Bali yang berfokus pada pelestarian,
                  edukasi, dan kolaborasi budaya bersama masyarakat.
                </p>

                <RouterLink
                  to="/program"
                  class="mt-6 inline-flex text-sm font-bold text-[#C7A45D] transition hover:text-white"
                >
                  Lihat semua program →
                </RouterLink>
              </div>

              <div class="bg-[#FAF6ED] p-3">
                <RouterLink
                  v-for="(item, index) in programDropdown"
                  :key="item.label"
                  :to="item.path"
                  class="group block rounded-2xl p-4 transition hover:bg-white hover:shadow-md"
                >
                  <div class="flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#174D3F]/10 text-sm font-bold text-[#174D3F]">
                      0{{ index + 1 }}
                    </div>

                    <div>
                      <h4 class="text-sm font-bold text-[#1F241F] transition group-hover:text-[#174D3F]">
                        {{ item.label }}
                      </h4>

                      <p class="mt-1 text-sm leading-6 text-[#756F63]">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- GALERI MEGA DROPDOWN -->
      <div
        class="relative"
        @mouseenter="openDropdown('galeri')"
        @mouseleave="closeDropdown"
      >
        <RouterLink
          to="/galeri"
          class="relative flex items-center gap-1 py-2 text-sm font-semibold text-[#1F241F]/75 transition hover:text-[#174D3F]
          after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#C7A45D] after:transition-all after:duration-300 hover:after:w-full"
        >
          Galeri/Kegiatan
          <span
            class="text-xs transition duration-300"
            :class="activeDropdown === 'galeri' ? 'rotate-180 text-[#C7A45D]' : ''"
          >
            ⌄
          </span>
        </RouterLink>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-3 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-2 opacity-0"
        >
          <div
            v-if="activeDropdown === 'galeri'"
            class="absolute left-1/2 top-10 z-[70] w-[680px] -translate-x-1/2 rounded-[1.75rem] border border-[#174D3F]/10 bg-white p-4 shadow-2xl shadow-black/12"
          >
            <div class="grid grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-[1.25rem]">
              <div class="bg-[#A9583C] p-6 text-white">
                <p class="text-xs font-bold uppercase tracking-[0.25em] text-[#F3D28A]">
                  Galeri & Kegiatan
                </p>

                <h3 class="mt-4 font-serif text-2xl font-bold leading-snug">
                  Dokumentasi budaya, kegiatan, dan momen komunitas.
                </h3>

                <p class="mt-4 text-sm leading-7 text-white/75">
                  Lihat jejak kegiatan INLA Bali melalui foto, dokumentasi acara,
                  dan cerita visual yang merekam kebersamaan komunitas.
                </p>

                <RouterLink
                  to="/galeri"
                  class="mt-6 inline-flex text-sm font-bold text-[#F3D28A] transition hover:text-white"
                >
                  Buka galeri →
                </RouterLink>
              </div>

              <div class="bg-[#FAF6ED] p-3">
                <RouterLink
                  v-for="(item, index) in galleryDropdown"
                  :key="item.label"
                  :to="item.path"
                  class="group block rounded-2xl p-4 transition hover:bg-white hover:shadow-md"
                >
                  <div class="flex gap-4">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A9583C]/10 text-sm font-bold text-[#A9583C]">
                      0{{ index + 1 }}
                    </div>

                    <div>
                      <h4 class="text-sm font-bold text-[#1F241F] transition group-hover:text-[#A9583C]">
                        {{ item.label }}
                      </h4>

                      <p class="mt-1 text-sm leading-6 text-[#756F63]">
                        {{ item.description }}
                      </p>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- BUTTON INI SAYA BIARKAN -->
    <RouterLink
      to="/kontak"
      class="hidden rounded-xl bg-[#174D3F] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10382E] lg:inline-flex"
    >
      Hubungi Kami
    </RouterLink>

    <!-- MOBILE BUTTON -->
    <button
      class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#174D3F]/15 text-2xl font-bold text-[#174D3F] lg:hidden"
      type="button"
      @click="isMenuOpen = !isMenuOpen"
    >
      {{ isMenuOpen ? '×' : '☰' }}
    </button>
  </div>

  <!-- MOBILE MENU: SIMPAN PUNYA KAMU DULU -->
  <div
    v-if="isMenuOpen"
    class="border-t border-[#174D3F]/10 bg-white px-6 py-5 lg:hidden"
  >
    <div class="flex flex-col gap-2">
      <RouterLink
        to="/"
        class="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F241F]/80 hover:bg-[#174D3F]/10"
        @click="closeMobileMenu"
      >
        Beranda
      </RouterLink>

      <RouterLink
        to="/tentang-kami"
        class="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F241F]/80 hover:bg-[#174D3F]/10"
        @click="closeMobileMenu"
      >
        Tentang Kami
      </RouterLink>

      <RouterLink
        to="/program"
        class="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F241F]/80 hover:bg-[#174D3F]/10"
        @click="closeMobileMenu"
      >
        Program
      </RouterLink>

      <RouterLink
        to="/galeri"
        class="rounded-xl px-4 py-3 text-sm font-semibold text-[#1F241F]/80 hover:bg-[#174D3F]/10"
        @click="closeMobileMenu"
      >
        Galeri/Kegiatan
      </RouterLink>

      <RouterLink
        to="/kontak"
        class="mt-2 rounded-xl bg-[#174D3F] px-4 py-3 text-center text-sm font-bold text-white"
        @click="closeMobileMenu"
      >
        Hubungi Kami
      </RouterLink>
    </div>
  </div>
</nav>
    </header>

    <!-- HERO SLIDER -->
    <section class="relative min-h-screen overflow-hidden pt-[128px]">
      <!-- IMAGES -->
      <div class="absolute inset-0">
        <img
          v-for="(slide, index) in slides"
          :key="index"
          :src="slide.image"
          :alt="slide.eyebrow"
          class="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out"
          :class="index === currentSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'"
          :style="{ objectPosition: slide.position }"
        />
      </div>

      <!-- OVERLAY -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/78 via-black/45 to-black/15"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#0E1B15]/75 via-transparent to-transparent"></div>

      <!-- ARROWS -->
      <button
        class="absolute left-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-[#174D3F] md:flex"
        type="button"
        @click="prevSlide"
      >
        ‹
      </button>

      <button
        class="absolute right-6 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-[#174D3F] md:flex"
        type="button"
        @click="nextSlide"
      >
        ›
      </button>

      <!-- CONTENT -->
      <div class="relative z-10 mx-auto flex min-h-[calc(100vh-128px)] max-w-7xl items-center px-6 py-16">
        <div class="max-w-3xl">
          <Transition
            mode="out-in"
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="translate-y-4 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-300 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="-translate-y-3 opacity-0"
          >
            <div :key="currentSlide">
              <p class="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-[#C7A45D]">
                {{ activeSlide.eyebrow }}
              </p>

              <h1 class="font-serif text-5xl font-bold leading-[1.14] tracking-[-0.04em] text-white md:text-7xl">
                <span
                  v-for="line in activeSlide.title"
                  :key="line"
                  class="block"
                >
                  {{ line }}
                </span>
              </h1>

              <p class="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                {{ activeSlide.description }}
              </p>

              <div class="mt-8 flex flex-wrap items-center gap-4">
                <RouterLink
                  :to="activeSlide.path"
                  class="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-bold text-[#1F241F] transition hover:-translate-y-0.5 hover:bg-[#FAF6ED]"
                >
                  {{ activeSlide.cta }}
                  <span class="text-xl">›</span>
                </RouterLink>

                <RouterLink
                  to="/galeri"
                  class="inline-flex items-center gap-3 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#174D3F]"
                >
                  Lihat Dokumentasi
                </RouterLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- DOTS -->
      <div class="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3 px-6">
        <button
          v-for="(_, index) in slides"
          :key="index"
          class="h-2.5 rounded-full transition-all duration-300"
          :class="index === currentSlide ? 'w-10 bg-[#C7A45D]' : 'w-2.5 bg-white/55 hover:bg-white'"
          type="button"
          @click="goToSlide(index)"
        ></button>
      </div>
    </section>

    <!-- ABOUT PREVIEW -->
    <section class="relative overflow-hidden bg-[#FAF6ED] px-6 py-24">
      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-aos="fade-up">
          <p class="text-xs font-bold uppercase tracking-[0.3em] text-[#A9583C]">
            Tentang INLA Bali
          </p>

          <h2 class="mt-4 font-display text-4xl font-bold leading-tight tracking-[-0.03em] text-[#174D3F] md:text-5xl">
            Komunitas yang tumbuh bersama nilai budaya Bali.
          </h2>

          <p class="mt-6 max-w-xl text-base leading-8 text-[#5F645F]">
            INLA Bali menjadi ruang untuk memperkenalkan, menjaga, dan menghidupkan
            budaya Bali melalui kegiatan yang dekat dengan masyarakat, generasi muda,
            dan komunitas.
          </p>

          <RouterLink
            to="/tentang-kami"
            class="mt-8 inline-flex rounded-xl bg-[#174D3F] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10382E]"
          >
            Selengkapnya Tentang Kami
          </RouterLink>
        </div>

        <div class="grid gap-4 sm:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
          <div class="overflow-hidden rounded-[2rem]">
            <img
              :src="heroImage"
              alt="Kegiatan INLA Bali"
              class="h-80 w-full object-cover"
            />
          </div>

          <div class="overflow-hidden rounded-[2rem] sm:mt-16">
            <img
              :src="heroImage"
              alt="Budaya Bali"
              class="h-80 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>