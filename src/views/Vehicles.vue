<template>
  <div class="vehicles">
    <!-- <div class="q-pa-md">
      <q-table
        title="Treats"
        :rows="rows"
        :columns="columns"
        row-key="name"
        :pagination="initialPagination"
      />
    </div> -->
    <teleport to="#main">
      <VehicleCard />
    </teleport>
    <q-page-container>
      <div ref="vehiclesContainer" class="vehicles-container">

      </div>
    </q-page-container>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

import { animate, renderer } from '@/setup-options/vehicles/example.js'

import VehicleCard from '@/components/VehicleCard.vue' 

export default {
  components: {
    VehicleCard
  },
  setup() {
    const vehiclesContainer = ref(null)

    onMounted(() => {
      vehiclesContainer.value.appendChild( renderer.domElement )
      animate()
    })

    return {
      vehiclesContainer,
      animate
    }
  }
};
</script>

<style></style>
