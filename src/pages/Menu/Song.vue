<template>
  <q-pull-to-refresh @refresh="refresh">
    <div>
    <q-page id="zatpp_songpage">
      <q-img class="q-mb-none" src="/statics/floating_brain.jpg" />  
    <div class="text-right q-pr-sm zatpp_floatingcover">photo by Gottfried Gneuss</div>
      <div class="row q-px-md q-pt-lg" style="min-height:700px">
        <div class="col">
          <h5 class="q-my-none text-center q-pb-none">
            Floating Brain
            <span style="font-size:15px">/ New Song</span>
          </h5>
          <p class="text-center q-mx-md">
            Composed by Zeke Khaseli/ Yosaviano Santoso
            <br />Lyrics by Zeke Khaseli
          </p>
          <div class="col">
            <vue-plyr ref="plyr" id="audioPlayer">
              <audio loop>
                <source src="~assets/audio/Zeke_And_The_Popo__Floating_Brain.mp3" type="audio/mp3" />
                <source src="~assets/audio/Zeke_And_The_Popo__Floating_Brain.ogg" type="audio/ogg" />
              </audio>
            </vue-plyr>
          </div>
          <div class="col q-my-lg">
            <div class="q-py-none text-center">
                        <vue-particles 
    class="zatpp_particles"
    color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="10"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    ></vue-particles>    
              <p>
                Floating brain
                <br />You failed again
                <br />You sweet for nothing
                <br />Worms will eat you
              </p>
              <p>
                Blue
                <br />Cos I'm sad like you
              </p>
              <p>
                In afterlife no thought I could be
                <br />Cos in this life all thought I could have
                <br />My morbid mood gets me to write a song
                <br />The AI world forced me to get along
              </p>
              <p>
                Floating brain
                <br />You loose again
                <br />You sweet for nothing
                <br />Life will get you
              </p>
              <p>
                Floating brain
                <br />You failed again
                <br />You lived for nothing
              </p>
              <p>
                Life will win
                <br />It will spit you to the ground
                <br />And I will hunt you down
                <br />Vengeance will be mine
              </p>
            </div>
          </div>
          <div class="q-mb-lg">
            <div class="flex flex-center zattp_download">
              <a
                href="statics/audio/Zeke_And_The_Popo__Floating_Brain.mp3"
                download="Zeke and The Popo - Floating Brain.mp3"
                target="_blank"
              >
                Listen Offline&nbsp;&nbsp;
                <i class="fas fa-cloud-download-alt"></i>
              </a>
            </div>
          </div>
          
          <div class="text-center q-px-md q-mb-xl">
            <p>Dave Lumenta on Synthesizers, Mellotron, and Hammond Organ · Firzi O on Electric Guitars and Synthesizers · Iman Fattah on Programmed Samples · Leonardo Ringo on Drums · Mian Tiara on Vocals · Yosaviano Santoso on Electric/ Accoustic Guitars · Yuditia Noor on Bass · Zeke Khaseli on Vocals and Piano</p>
          </div>
          
        </div>
        
      </div>

    </q-page>
    </div>
  </q-pull-to-refresh>
</template>

<script>
export default {
  components: {},
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
        return `
        <div class="plyr__progress">
                  <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
                  <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
                  <span role="tooltip" class="plyr__tooltip">00:00</span>
              </div>
              <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
              <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
        <div class="flex flex-center">      
        <button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
              </button>

              <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
                  <svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
                  <svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
                  <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
                  <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
              </button>
             </div> 
          `;
      }
    }
  }
};
</script>

<style scope>
.body--light .q-page#zatpp_songpage {
  background: #fff !important;
}
.body--dark .q-page#zatpp_songpage {
  background: #333 !important;
}
.zattp_download {
  background: #222;
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
}
.zattp_download a {
  text-decoration: none;
  color: #efefef;
  font-weight: bold;
  text-transform: uppercase;
}
.zatpp_floatingcover {
  font-size: 10px;
}
.zatpp_particles {
  position: absolute;
  z-index:1;
}
</style>
