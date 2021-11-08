<template>
  <div class="films">
    <q-page-container>
      <div class="films_card-container">
        <div v-for="(item, key) in filmsAll" :key="key" class="films_card-item">
          <Card /> 
        </div>
      </div>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from '@/components/Card.vue';
@Options({
  components: {
    Card
  },
  computed: {
    filmsAll () {
      return this.$store.getters['films/getAllFilms']
    }
  }
})
export default class films extends Vue {}
</script>
