<template>
  <div class="vehicles">
    <q-page-container>
      <div ref="vehiclesContainer" class="vehicles-container">

      </div>
    </q-page-container>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

import * as THREE from 'three';
export default {
  setup() {
    const vehiclesContainer = ref(null)

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate = () => { 
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
		};

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
