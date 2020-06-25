<template>
  <q-pull-to-refresh @refresh="refresh">
    <q-page
      id="zatpp_storypage"
      :style="$q.platform.is.mobile ? 'padding-top:240px' : 'padding-top:0px'"
    >
      <q-page-sticky expand position="top" style="z-index:-99" class="mobile-only">
        <img src="/statics/story.jpg" width="100%" />
        <p class="absolute-bottom-right" style="right:10px;bottom:-10px">photo by Iman</p>
      </q-page-sticky>
      <div
        style="$q.platform.is.mobile ? 'z-index:9999;top:0;position:absolute;left:10px;top:10px;' : 'position:absolute:bottom:0;z-index:9999;'"
      >
        <vue-plyr ref="plyr" id="audioPlayer" :options="{ controls: controls }">
          <audio autoplay>
            <source src="~assets/audio/story/mp3/02.mp3" type="audio/mp3" />
            <source src="~assets/audio/story/ogg/02.ogg" type="audio/ogg" />
          </audio>
        </vue-plyr>
      </div>

      <div
        :class="$q.platform.is.mobile ? 'q-px-none q-pt-md bg-zatpp shadow-up-1' : 'q-px-none q-pt-none bg-zatpp no-shadow'"
      >
        <div class="mobile-hide">
          <img src="/statics/story.jpg" width="100%" />
          <p class="text-right q-pr-md">photo by Iman</p>
        </div>
        <h5 class="q-mt-md q-mb-sm text-center">
          Story Synopses
          <br />derived from "Charlie"
        </h5>
        <p class="text-center">by Zeke, narrated by Leo</p>
        <div id="birds"></div>

        <div class="q-my-md q-pt-md">
          <q-linear-progress :value="progress" :buffer="buffer" color="grey-4" class="q-mt-sm" />
          <q-linear-progress :value="progress" :buffer="buffer" color="grey-5" class="q-mt-sm" />
        </div>
        <div class="q-px-xl q-pt-lg">
          <p>A crime, some kind of manifestation of a floating mind detached from the whole Self, has been committed. Not finding a way to inwardly relate to his own Self he suffered the worst kind of anxiety.</p>
        </div>
        <div class="flex flex-center q-py-xl">
          <q-btn size="md" color="primary" icon="fas fa-forward" to="/story3" />
        </div>
      </div>
    </q-page>
  </q-pull-to-refresh>
</template>

<script>
import Ken from "components/Ken";

import Vanta from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

export default {
  data() {
    return {
      progress: 0.01,
      buffer: 0.01
    };
  },
  components: {
    Ken
  },
  methods: {
    refresh(done) {
      setTimeout(() => {
        done();
      }, 1000);
    }
  },
  computed: {
    controls() {
      if (this.fullview) {
        return `<div class="plyr__controls">
              <button type="button" class="plyr__control" data-plyr="rewind">
                  <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
                  <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
              </button>
              <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
              </button>
              <button type="button" class="plyr__control" data-plyr="fast-forward">
                  <svg role="presentation"><use xlink:href="#plyr-fast-forward"></use></svg>
                  <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
              </button>
              <div class="plyr__progress">
                  <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
                  <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
                  <span role="tooltip" class="plyr__tooltip">00:00</span>
              </div>
              <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
              <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
              <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
              </button>
              <div class="plyr__volume">
                  <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
              </div>
              <button type="button" class="plyr__control" data-plyr="captions">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-captions-on"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-captions-off"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Disable captions</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Enable captions</span>
              </button>
              <button type="button" class="plyr__control" data-plyr="fullscreen">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span>
              </button>
          </div>
          `;
      } else {
        return `<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
              </button>
          `;
      }
    }
  },
  mounted() {
    this.vantaEffect = VANTA.BIRDS({
      el: "#birds",
      mouseControls: true,
      touchControls: true,
      minHeight: 300.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xffffff,
      color1: 0x0,
      color2: 0xbebebe,
      colorMode: "lerp",
      quantity: 1.0,
      backgroundAlpha: 0.0,
      THREE: THREE
    });
    this.interval = setInterval(() => {
      if (this.progress >= 1) {
        this.progress = 0.01;
        this.buffer = 0.01;
        return;
      }
      this.progress = Math.min(1, this.buffer, this.progress + 0.1);
    }, 700 + Math.random() * 1000);

    this.bufferInterval = setInterval(() => {
      if (this.buffer < 1) {
        this.buffer = Math.min(1, this.buffer + Math.random() * 0.2);
      }
    }, 700);
  }
};
</script>

<style>
.bg-zatpp {
  background: url(/statics/bg.jpg) no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media only screen and (min-width: 600px) {
  .bg-zatpp {
    background: url(/statics/bg.jpg) no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>