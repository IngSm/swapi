<template>
  <div class="films">
    <q-page-container>
      <div class="films_card-container">
        <div class="films_card">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/parallax2.jpg" />

            <q-list>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon color="amber" name="local_movies" />
                </q-item-section>

                <q-item-section>
                  <q-item-label caption>Watch a movie.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>
      </div>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class films extends Vue {
}
</script>
