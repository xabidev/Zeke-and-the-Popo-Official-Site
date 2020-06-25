<template>
<q-pull-to-refresh @refresh="refresh">
    <q-page
    id="zatpp_videopage"
    class="q-pb-lg"
    :style="this.$q.platform.is.mobile ? 'padding-top:200px' : 'padding-top:0px'"
  >

    <div class="row mobile-hide">
      <div class="col">
      <vue-plyr class="q-pb-none shadow-3">
        <div class="plyr__video-embed" id="player">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/DyYWHIYuv6Y?VQ=HD720&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
            allowfullscreen
          ></iframe>
        </div>
      </vue-plyr>
      </div>
    </div>
        <div class="row q-px-lg zatpp_videolirik">
    <div class="col12">
<q-separator/>
    <div class="mobile-hide float-left q-pt-xl q-pr-xl text-center">
          
        <h5 class="q-pt-lg q-pb-md q-my-none">Crowdless Concert Video</h5>
        <p>
          Live at Black Studio, Panglima Polim, Jakarta
          <br />Friday, March 20 2020
        </p>
        <p>
          Audio mixed by Firzi O at EMS.
          <br />Video by Wafi & Satrio Flying Tempura</p>
          <q-separator/>
          <q-btn label="Song Lyrics" color="brown-7" icon="fas fa-microphone-alt" @click="seamless = !seamless" class="q-mt-lg"/>

    </div>
      </div>
      <div class="col">
        <div class="mobile-only">
        <h5 class="q-pt-md q-mt-md q-pb-md q-my-none">Crowdless Concert Video</h5>
        <p>
          Live at Black Studio, Panglima Polim, Jakarta
          <br />Friday, March 20 2020
        </p>
        <p>
          Audio mixed by Firzi O at EMS.
          <br />Video by Wafi & Satrio Flying Tempura
        </p>
        </div>

<div class="q-pa-md q-mt-lg mobile-hide">
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      :fullscreen.sync="fullscreen"
      infinite
      height="300px"
      autoplay="1"
    >
      <q-carousel-slide :name="1" img-src="statics/cover-1.jpg" />
      <q-carousel-slide :name="2" img-src="statics/cover-2.jpg" />
      <q-carousel-slide :name="3" img-src="statics/cover-3.jpg" />
      <q-carousel-slide :name="4" img-src="statics/cover-4.jpg" />
      <q-carousel-slide :name="5" img-src="statics/cover-5.jpg" />
      <q-carousel-slide :name="6" img-src="statics/cover-6.jpg" />
      <q-carousel-slide :name="7" img-src="statics/cover-7.jpg" />
      <q-carousel-slide :name="8" img-src="statics/cover-8.jpg" />
      <q-carousel-slide :name="9" img-src="statics/cover-9.jpg" />
      <q-carousel-slide :name="10" img-src="statics/cover-10.jpg" />
      <q-carousel-slide :name="11" img-src="statics/cover-11.jpg" />
      <q-carousel-slide :name="12" img-src="statics/cover-12.jpg" />
      <q-carousel-slide :name="13" img-src="statics/cover-13.jpg" />
      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>

      </div>
    </div>
        <SongLyrics class="mobile-only" />

<div class="q-pa-md q-mt-lg mobile-only">
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      :fullscreen.sync="fullscreen"
      infinite
      height="300px"
      :autoplay="autoplay"

    >
      <q-carousel-slide :name="1" img-src="statics/cover-1.jpg" />
      <q-carousel-slide :name="2" img-src="statics/cover-2.jpg" />
      <q-carousel-slide :name="3" img-src="statics/cover-3.jpg" />
      <q-carousel-slide :name="4" img-src="statics/cover-4.jpg" />
      <q-carousel-slide :name="5" img-src="statics/cover-5.jpg" />
      <q-carousel-slide :name="6" img-src="statics/cover-6.jpg" />
      <q-carousel-slide :name="7" img-src="statics/cover-7.jpg" />
      <q-carousel-slide :name="8" img-src="statics/cover-8.jpg" />
      <q-carousel-slide :name="9" img-src="statics/cover-9.jpg" />
      <q-carousel-slide :name="10" img-src="statics/cover-10.jpg" />
      <q-carousel-slide :name="11" img-src="statics/cover-11.jpg" />
      <q-carousel-slide :name="12" img-src="statics/cover-12.jpg" />
      <q-carousel-slide :name="13" img-src="statics/cover-13.jpg" />
      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
          <q-btn
            push round dense color="white" text-color="primary"
            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
            @click="fullscreen = !fullscreen"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>



      
    <q-dialog v-model="seamless" seamless position="left">
      <q-card style="width: 320px">
        <q-card-section class="row items-center no-wrap q-pa-none q-ma-none">
          <SongLyrics />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-sticky expand position="top" class="mobile-only">
      <div class="col">
        <vue-plyr class="q-pb-none shadow-3">
          <div class="plyr__video-embed" id="player">
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/DyYWHIYuv6Y?VQ=HD720&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
              allowfullscreen
            ></iframe>
          </div>
        </vue-plyr>
      </div>
    </q-page-sticky>
  </q-page>
</q-pull-to-refresh>
</template>

<script>
import SongLyrics from "components/Menu/SongLyrics";

export default {
  data() {
    return {
      seamless: false,
      slide: 1,
      fullscreen: false,
      autoplay: false,
    };
  },
  components: {
    SongLyrics
  },
 methods: {
    refresh(done) {
      setTimeout(() => {
        done();
      }, 1000);
    }
  },  
  computed: {
    contentSize() {
      return this.moreContent ? 150 : 5;
    }
  }
};
</script>

<style>
.responsive-container {
  position: relative;
  padding-bottom: 53.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.responsive-container,
.responsive-container iframe {
  max-width: 1280px;
  max-height: 720px;
}
.responsive-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#zatpp_videopage {
  background: url(/statics/bg.jpg) no-repeat center center fixed;
}

@media only screen and (min-width: 600px) {
  .q-page#zatpp_videopage {
    background:url(/statics/bg.jpg) no-repeat center center fixed;
  }
}
</style>