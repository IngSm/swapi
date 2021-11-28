<template>
  <div class="films">
    <q-page-container>
      <div class="films_card-container">
        <div v-for="(item, key) in filmsAll" :key="key" class="films_card-item">
          <Card
            :text="item.title"
            :path="getImg(item.episode_id)"
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
        '',
        'ep1.jpg',
        'ep2.jpg',
        'ep3.jpg',
        'ep4.jpg',
        'ep5.jpg',
        'ep6.jpg',
      ]
    }
  },
  components: {
    Card
  },
  methods: {
    getImg(id: any) {

      console.log(this.filmsCards[id])
      return require('../assets/imgs/films/' + this.filmsCards[id])
    }
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
