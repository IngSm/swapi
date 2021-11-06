<template>
  <div class="films">
    <q-page-container>
      <div class="films_card-container">
        {{swFilms[0]}}
      </div>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import getFilms from "@/services/Api";
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";

@Options({
  components: {},
})
export default class films extends Vue {
  swFilms: any = [];

  mounted() {
    console.log(this.swFilms)
    console.log(getFilms)
  }

  computed () {
    function getFilms () {
      return {
        ...mapGetters('films', {
          films: 'getAllFilms'
        })
      }
    }

    this.swFilms = getFilms()
  }
}
</script>
