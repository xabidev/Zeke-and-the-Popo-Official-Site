<template>
  <div id="waves"></div>
</template>

<script>

export default {
  mounted() {
    this.vantaEffect = WAVES({
      el: "#waves",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x898989,
  shininess: 0.10,
  waveHeight: 0.10,
  waveSpeed: 0.10,
  zoom: 0.65,
      THREE: THREE // use a custom THREE when initializing
    });
  },
}
</script>
