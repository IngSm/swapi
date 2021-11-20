<template>
  <q-card class="my-card">
      <img :src="path" alt="Poster">

      <q-card-section class="text-h6 my-card__section">
        <div v-text="text" />
      </q-card-section>
      
    </q-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  props: {
    path: String,
    text: String
  }
})
export default class card extends Vue {}
</script>