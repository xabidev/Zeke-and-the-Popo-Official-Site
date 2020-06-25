<template>
  <q-page id="zatpp_loginpage"> 
    <ken style="z-index:-999;" />
    <div class="text-center q-py-xl col" style="min-height:100px">
      <router-link to="/">
        <q-img
          :src="$q.dark.isActive ? '/statics/logo_dark.png' : '/statics/logo.png'"
          width="50px"
        />
      </router-link>
    </div>
    <q-card flat class="q-pa-md bg-transparent" style="max-width:480px;margin:0 auto 0">
      <p class="text-center text-subtitle2 text-grey-9">You're about to access our secret pages</p>
      <q-card-section>
        <q-input
          class="q-pa-none"
          outlined
          ref="email"
          v-model="email"
          label="Type your email.."
          type="email"
          placeholder
          filled
          hint
          lazy-rules
          :rules="[
            val => !!val || 'Email required',
            val => this.validateEmail(val) || 'Email not valid'
          ]"
        />
      </q-card-section>

      <q-card-section>
        <q-input
          class="q-pa-none q-mb-none"
          outlined
          ref="password"
          v-model="password"
          label="Your Invitation Code"
          placeholder
          filled
          hint
          :type="isPwd ? 'password' : 'text'"
          :rules="[val => !!val || 'Invitation Code required']"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section>
        <q-btn
          push
          color="primary"
          label="CONFIRM"
          class="full-width"
          size="lg"
          @click="cobaMasuk"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import isEmail from "validator/lib/isEmail";
import Ken from "components/Ken";

export default {
  name: "PageMasuk",
  components: {
    Ken
  },
  data() {
    return {
      email: "",
      password: "",
      isPwd: true,
      time: ""
    };
  },
  methods: {
    validateEmail(value) {
      return isEmail(value);
    },
    cobaMasuk() {
      const emailSelector = this.$refs.email;
      const passwordSelector = this.$refs.password;

      emailSelector.validate();
      passwordSelector.validate();

      if (emailSelector.hasError || passwordSelector.hasError) return;
      else {
        let data = {
          email: this.email,
          password: this.password
        };
        this.cobaAuth(data);
      }
    },
    async cobaAuth(payload) {
      try {
        // firebase authentication
        await this.$firebase
          .auth()
          .signInWithEmailAndPassword(payload.email, payload.password);
        this.$router.push("/dashboard");
      } catch (err) {
        this.$q.notify({
          message: err.message,
          color: "negative",
          icon: "eva-alert-circle-outline",
          position: "top"
        });
      }
    }
  }
};
</script>

<style>
.zatpp_bgauth {
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
  opacity: 0.9;
}
</style>