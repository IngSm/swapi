<template>
  <div class="films">
    <q-page-container>
      <div class="films_card-container">
        <div v-for="(item, key) in filmsAll" :key="key" class="films_card-item">
          <Card
            :text="item.title"
            :path="filmCards[key]"
          /> 
        </div>
      </div>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from '@/components/Card.vue';
@Options({
  data () {
    return {
      filmsCards: [
        '@/assets/imgs/films/ep1.jpg',
        '@/assets/imgs/films/ep2.jpg',
        '@/assets/imgs/films/ep3.jpg',
        '@/assets/imgs/films/ep4.jpg',
        '@/assets/imgs/films/ep5.jpg',
        '@/assets/imgs/films/ep6.jpg',
      ]
    }
  },
  components: {
    Card
  },
  computed: {
    filmsAll () {
      return this.$store.getters['films/getAllFilms']
    },
    filmCards () {
      return this.filmsCards
    }
  }
})
export default class films extends Vue {}
</script>
