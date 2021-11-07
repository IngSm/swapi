<template>
  <div class="films">
    <q-page-container>
      <div v-for="(item, key) in filmsAll" :key="key" class="films_card-container">
        <div>{{item.title}}</div>
      </div>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  computed: {
    filmsAll () {
      return this.$store.getters['films/getAllFilms']
    }
  }
})
export default class films extends Vue {}
</script>
