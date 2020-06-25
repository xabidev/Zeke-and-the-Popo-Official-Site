<template>
  <q-page>
    <div class="zatpp_logo absolute-top-left q-pt-lg q-pl-lg" style="z-index:99;">
      <img alt="Charlie" src="/statics/logo.png" width="50px" />
    </div>
    <div class="zatpp_cta text-center absolute-center" style="z-index:99">
      <div class="flex flex-center" style="z-index:99;">
        <router-link to="#">
          <img
            alt="Charlie"
            :src="$q.dark.isActive ? '/statics/penguin_dark.png' : '/statics/penguin-masker.png'"
            width="120px"
          />
        </router-link>
      </div>
      <div id="zatpp_test"> hha </div>
      <p class="athelasregular subtitle">WHAT'S ON THE MENU:</p>
      <p class="q-mb-none bigcaslonmedium title">A Zeke and The Popo Story</p>
    </div>
    <div style="position:absolute;bottom:20px;right:25px">v1.2.3</div>
  </q-page>
</template>

<script>
import Vanta from 'vanta/dist/vanta.birds.min.js'
import * as THREE from 'three'

export default {
  data() {
    return {
      time: null,
    }
  },
  mounted() {
    this.vantaEffect = VANTA.BIRDS({
      el: "#zatpp_test",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      colorMode: "lerp",
      birdSize: 2.1,
      THREE
    });
  }
};
</script>

<style>
body #zatpp_test {
  background: #fff;
}
</style>