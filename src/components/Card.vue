<template>
  <q-card class="my-card">
      <img :src="path">

      <q-card-section>
        <div class="text-h6" v-text="text" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        
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