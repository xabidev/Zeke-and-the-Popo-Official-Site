<template>
  <q-page id="zatpp_themenu">
    <ken style="z-index:-999;" />
    <div class="zatpp_logo absolute-top-left q-pt-lg q-pl-lg" style="z-index:99;">
      <img alt="Charlie" src="/statics/logo.png" width="50px" />
    </div>
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
      <p class="q-mb-xs athelasregular subtitle text-bold">WHAT'S ON THE MENU:</p>
      <p class="bigcaslonmedium title">A Zeke and The Popo Story</p>
      <div class="row no-wrap" style="width:250px">
         <q-btn class="zatpp_loginbutton col-xs-6 q-mr-md" color="white" label="Login" to="/dashboard" /> 
         <q-btn type="a" class="col-xs-6 zatpp_ctatokped" color="primary" label="Buy Access" href="https://www.tokopedia.com/zatpp/access-to-zatpp-com" target="_blank" />
      </div>
         </div>
    <div class="absolute-bottom-right q-pr-md q-pb-md">v.1.2.5</div>
  </q-page>
</template>

<script>

import { openURL } from 'quasar'
import Ken from "components/Ken";

export default {
  components: {
    Ken
  }
};
</script>

<style>
.zatpp_ctatokped .q-icon {
  font-size: 15px;
}
.zatpp_loginbutton .q-btn__content {
  color: #1d1d1d;
  font-weight: bold;
}
</style>