<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header
      :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark'"
      bordered
      elevated
      reveal
    >
      <q-toolbar>
        <q-btn flat dense round @click="drawer = !drawer" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        
        <q-toolbar-title>
          <router-link to="/" style="text-decoration: none;" class="text-dark">zatpp</router-link>
          </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        >
          <q-icon :name="$q.dark.isActive ? 'fas fa-toggle-on' : 'fas fa-toggle-off'" />
        </q-btn>
<q-btn
          flat
          dense
          round
          @click="cobaKeluar"
          aria-label="Keluar">
          <q-icon name="eva-log-out-outline" />
        </q-btn>
      </q-toolbar>
    </q-header>-->

    <!-- <q-footer bordered :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'" elevated>
      <q-tabs no-caps :active-color="$q.dark.isActive ? 'white' : 'primary'" indicator-color="transparent" :class="$q.dark.isActive ? 'text-grey' : 'text-grey'" inline-label>
        <q-route-tab name="menu" label="Menu" icon="dashboard" to="/dashboard" />
        <q-route-tab name="about" label="About" icon="people" to="/about" />
        <q-route-tab name="credits" label="Credits" icon="info" to="/credits" />
        <q-route-tab name="contact" label="Contact" icon="info" to="/contact" />
      </q-tabs>
    </q-footer>
    -->
    <!-- <q-footer bordered :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'" elevated>
      <q-tabs no-caps :active-color="$q.dark.isActive ? 'white' : 'primary'" indicator-color="transparent" :class="$q.dark.isActive ? 'text-grey' : 'text-grey'">
        <q-route-tab name="menu" label="Menu" icon="dashboard" to="/dashboard" />
        <q-route-tab name="about" label="About" icon="people" to="/about" />
        <q-route-tab name="credits" label="Credits" icon="info" to="/credits" />
        <q-route-tab name="contact" label="Contact" icon="info" to="/contact" />
      </q-tabs>
    </q-footer>-->

    <q-drawer side="right" v-model="drawer" :width="300">
      <div>
        <q-img src="statics/bg_menu-masker.png" style="width:100%:height:auto;"></q-img>
        <q-list class="q-pt-none rounded-borders" style="max-width: 350px">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
                <q-img src="statics/penguin.svg" width="35px" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Welcome, User</q-item-label>
              <!-- <q-item-label caption lines="2">halo@pryspry.com</q-item-label> -->
            </q-item-section>

            <q-item-section side top>
              <q-btn flat dense round @click="cobaKeluar" aria-label="Keluar">
                <q-icon name="fas fa-power-off" />
              </q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </div>      <!-- <q-scroll-area 
        style="height: calc(100% - 150px); margin-top: 280px; border-right: 0px solid #ddd"
      > -->
          <q-separator />

           <q-item clickable v-ripple @click.native="openURL('https://www.kolase.com/zatpp')">
            <q-item-section avatar>
              <q-icon name="fas fa-tshirt" />
            </q-item-section>
            <q-item-section>Band Merchandise</q-item-section>
          </q-item>
          <q-separator />
        <q-list padding class="bg-grey-2 q-pb-none">
          <q-item clickable v-ripple to="/involved">
            <q-item-section avatar>
              <q-icon name="fa fa-info-circle" />
            </q-item-section>

            <q-item-section>Involved</q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple
                @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)">
            <q-item-section avatar>
              <q-icon name="fas fa-power-off" />
            </q-item-section>
            <q-item-section>Logout</q-item-section>
          </q-item>

          <q-separator />
           <q-item clickable v-ripple @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(false)">
            <q-item-section avatar>
              <q-icon :name="$q.dark.isActive ? 'fas fa-toggle-on' : 'fas fa-toggle-off'" />
            </q-item-section>
            <q-item-section>Dark Mode</q-item-section>
          </q-item> -->
          <!-- <q-item clickable v-ripple
                @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)">
            <q-item-section avatar>
              <q-icon name="fas fa-power-off" />
            </q-item-section>
            <q-item-section>Logout</q-item-section>
          </q-item> -->
          <q-separator />
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="fas fa-chevron-left" />
            </q-item-section>
            <q-item-section>Back to zatpp.com</q-item-section>
          </q-item>


          <!-- <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="fas fa-user-secret" />
            </q-item-section>

            <q-item-section>About ZATPP</q-item-section>
          </q-item> -->

          <!-- <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon name="fas fa-user-secret" />
            </q-item-section>

            <q-item-section>Our Track List</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/music">
            <q-item-section avatar>
              <q-icon name="fas fa-podcast" />
            </q-item-section>

            <q-item-section>Our Story</q-item-section>
          </q-item> -->

          <!-- <q-item clickable v-ripple to="/video">
            <q-item-section avatar>
              <q-icon name="fab fa-youtube" />
            </q-item-section>

            <q-item-section>Photo Gallery</q-item-section>
          </q-item> -->

          <!-- <q-item clickable v-ripple to="/lyrics">
            <q-item-section avatar>
              <q-icon name="fas fa-microphone-alt" />
            </q-item-section>

            <q-item-section>Song Lyrics</q-item-section>
          </q-item> -->
        </q-list>
        <!-- <div class="q-pa-sm zatpp_addlink">
          <ul>
            <li><router-link to="/appinfo">Legal Info</router-link></li>
            <li><router-link to="#">Ketentuan Layanan</router-link></li>
            <li><router-link to="#">Disclaimer</router-link></li>
            <li><router-link to="#">Ketentuan Refund</router-link></li>
            <li><router-link to="#">Contact Us</router-link></li>
          </ul>
        </div> -->


      <!-- </q-scroll-area> -->



      <!-- <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Welcome</div>
        </div>
      </q-img>-->
    </q-drawer>
    <q-footer bordered :class="$q.dark.isActive ? 'bg-dark' : 'bg-dark'" style="z-index:4000">
      <q-tabs
        no-caps
        :active-color="$q.dark.isActive ? 'white' : 'white'"
        indicator-color="transparent"
        :class="$q.dark.isActive ? 'text-grey' : 'text-white'"
      >
        <q-route-tab name="menu" label="menu" icon="img:statics/penguin_dark.svg"  to="/dashboard" />
        <q-route-tab name="story" label="story" icon="fas fa-podcast" to="/story" />
        <q-route-tab name="video" label="video" icon="fas fa-video" to="/video" />
        <q-route-tab name="song" label="new song" icon="fas fa-headphones-alt" to="/song" />
        <q-tab name="menu" icon="img:statics/logo_dark.svg" @click="drawer = !drawer" class="q-px-sm"/>
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import Logout from 'components/Menu/Logout'
// import Profile from 'components/Menu/Profile'
import { openURL } from 'quasar'

export default {
  data() {
    return {
      tab: "",
      drawer: false
    };
  },
  components: {
    //    Logout,
    //    Profile
  },
  created() {
    this.$firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //        this.user.id = user.uid;
        //        this.getAvatar();
      }
    });
    this.storageRef = this.$firebase.storage().ref();
  },
  methods: {
    openURL,
    async cobaKeluar() {
      try {
        await this.$firebase.auth().signOut();
        this.$router.push("/masuk");
      } catch (err) {
        console.log(err.message);
      }
    },
    async factoryFn(file) {
      const pictRef = this.storageRef.child(`smk/${this.user.id}`);
      const pict = file[0];

      try {
        await pictRef.put(pict);
        this.getAvatar();

        return {
          url: "data:image/png;base64,",
          method: "GET"
        };
      } catch (err) {
        console.log(err.message);
        this.user.hasAvatar = false;

        return {
          url: "",
          method: "GET"
        };
      }
    },
    async getAvatar() {
      try {
        this.user.urlAvatar = await this.storageRef
          .child(`smk/${this.user.id}`)
          .getDownloadURL();

        if (this.user.urlAvatar) this.user.hasAvatar = true;
      } catch (err) {
        console.log(err.message);
        this.user.hasAvatar = false;
      }
    },
    goToTentang() {
      if (this.$route.path != "/tentang")
        this.$store.commit("counter/counterMutation");
      this.$router.push("/tentang");
    }
  },
  computed: {
    kunjungan: function() {
      return this.$store.getters["counter/counterGetter"];
    }
  }
};
</script>

<style>
.zatpp_addlink ul {
  padding-left: 20px;
}

.zatpp_addlink ul li {
  list-style: none;
  display: inline-block;
  padding:5px ;
}

.zatpp_addlink a {
  text-decoration: none;
  color: #1d1d1d;
  font-size: 15px;
  line-height: 30px;
}
</style>
