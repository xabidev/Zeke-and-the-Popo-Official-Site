<template>
  <div id="birds"></div>
</template>

<script>
export default {
  data() {
    return {
      birds: ''
    }
  },
  mounted() {
    VANTA.EFFECT({
      el: '#birds', // element id or DOM object reference
      color: 0x000000,
      waveHeight: 20,
      shininess: 50,
      waveSpeed: 1.5,
      zoom: 0.75
  })
  }
}
</script>

<style>
</style>
