<template>
  <main-layout>
    <general-section>
      <section class="col-100 text-center">
        <a>ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</a>
        <q-carousel
          color="white"
          arrows
          height="400px"
        >
          <q-carousel-slide img-src="statics/mountains.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="q-display-1">First stop</div>
              <div class="q-headline">Mountains</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide img-src="statics/parallax1.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="q-display-1">Second stop</div>
              <div class="q-headline">Famous City</div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide img-src="statics/parallax2.jpg">
            <div class="absolute-bottom custom-caption">
              <div class="q-display-1">Third stop</div>
              <div class="q-headline">Famous Bridge</div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </section>
    </general-section>
  </main-layout>
</template>
<script>
import {
  QCarousel,
  QCarouselSlide,
  QCarouselControl
} from 'quasar'
import MainLayout from '../layouts/main'
import GeneralSection from '../components/sections/general'

export default {
  name: 'home',
  data () {
    return {
      userName: 'holaaaaa'
    }
  },
  components: {
    MainLayout,
    GeneralSection,
    QCarousel,
    QCarouselSlide,
    QCarouselControl
  }
}
</script>
<style lang="stylus">
</style>
