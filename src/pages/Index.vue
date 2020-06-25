<template>
  <q-page id="zatpp_indexpage">
    <div class="zatpp_logo absolute-top-left q-pt-lg q-pl-lg" style="z-index:99;">
      <img alt="Charlie" src="/statics/logo.png" width="50px" />
    </div>
    <!-- <div 
      @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
      class="zatpp_logo absolute-top-left q-pt-lg q-pl-lg"
      style="z-index:99;"
    >
      <img
        alt="Charlie"
        :src="$q.dark.isActive ? '/statics/logo_dark.png' : '/statics/logo.png'"
        width="50px"
      />
    </div>-->
    <div class="zatpp_cta text-center absolute-center" style="z-index:99">
      <div class="flex flex-center" style="z-index:99;">
        <router-link to="/dashboard">
          <img
            alt="Charlie"
            :src="$q.dark.isActive ? '/statics/penguin_dark.png' : '/statics/penguin-masker.png'"
            width="120px"
          />
        </router-link>
      </div>
      <p class="athelasregular subtitle">WHAT'S ON THE MENU:</p>
      <p class="q-mb-none bigcaslonmedium title">A Zeke and The Popo Story</p>
    </div>

  </q-page>
</template>

<script>
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";

export default {
  meta: {
    title: "Zeke and The Popo",
    titleTemplate: title => `${title} - Official Site`,
    meta: {
      description: {
        name: "description",
        content:
          "WHat's on The Menu: A Zeke and The Popo Story. Contains Music, Video, Story and many more."
      },
      keywords: { name: "keywords", content: "Zeke and The Popo" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8"
      }
    }
  },
    mounted() {
    this.vantaEffect = BIRDS({
      el: "#zatpp_loginpage",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0x0,
      color2: 0xbebebe,
      colorMode: "lerp",
      quantity: 1.0,
      backgroundAlpha: 0.0,
      THREE: THREE // use a custom THREE when initializing
    });
  }
};
</script>

<style>
</style>