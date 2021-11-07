<template>
  <div class="slider q-pa-md">
    <q-carousel
      class="slider"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide crossorigin class="slide" name="first" img-src="@/assets/imgs/weider.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text">Photo by 
            <a href="https://unsplash.com/@inkredo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Inkredo Designer</a>
            on
            <a href="https://unsplash.com/s/photos/star-war?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="slide" name="second" img-src="@/assets/imgs/starship.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text">
            Photo by
            <a href="https://unsplash.com/@rodlong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rod Long</a>
            on
            <a href="https://unsplash.com/s/photos/star-war?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="slide" name="third" img-src="@/assets/imgs/alien.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text">Photo by
            <a href="https://unsplash.com/@sushioutlaw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brian McGowan</a>
            on
            <a href="https://unsplash.com/s/photos/star-wars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref('first')
    }
  }
}
</script>