<template>
    <div class="slideshow">
      <div class="slideshow-image"></div>
      <div class="slideshow-image"></div>
      <div class="slideshow-image"></div>
      <div class="slideshow-image"></div>
    </div>
</template>

<style lang="scss" scoped>
$items: 4;
$animation-time: 4s;
$transition-time: 0.1s;
$scale: 10%;

$total-time: ($animation-time * $items);
$scale-base-1: (1 + $scale / 100%);

.zatpp_cta h3 {
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 1px;
}

.title,
.subtitle {
  margin: 0 !important;
  padding: 0 !important;
}
.slideshow {
  position: absolute;
  width: 768px;
  height: 100vh;
  overflow: hidden;
}

.body--light .q-page .slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/statics/bg.jpg") no-repeat 50% 50%;
  background-size: cover;
  animation-name: kenburns;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: $total-time;
  opacity: 1;
  transform: scale($scale-base-1);

  @for $i from 1 through $items {
    &:nth-child(#{$i}) {
      animation-name: kenburns-#{$i};
      z-index: ($items - $i);
    }
  }
}

.body--dark .slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("/statics/bg_dark.jpg") no-repeat 50% 50%;
  background-size: cover;
  animation-name: kenburns;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: $total-time;
  opacity: 1;
  transform: scale($scale-base-1);

  @for $i from 1 through $items {
    &:nth-child(#{$i}) {
      animation-name: kenburns-#{$i};
      z-index: ($items - $i);
    }
  }
}

@for $i from 1 through $items {
  @keyframes kenburns-#{$i} {
    $animation-time-percent: percentage($animation-time / $total-time);
    $transition-time-percent: percentage($transition-time / $total-time);

    $t1: ($animation-time-percent * ($i - 1) - $transition-time-percent / 2);
    $t2: ($animation-time-percent * ($i - 1) + $transition-time-percent / 2);
    @if ($t1 < 0%) {
      $t1: 0%;
    }
    @if ($t2 < 0%) {
      $t2: 0%;
    }

    $t3: ($animation-time-percent * ($i) - $transition-time-percent / 2);
    $t4: ($animation-time-percent * ($i) + $transition-time-percent / 2);
    @if ($t3 > 100%) {
      $t3: 100%;
    }
    @if ($t4 > 100%) {
      $t4: 100%;
    }

    $t5: (100% - $transition-time-percent / 2);
    $t6: (($t4 - $t1) * 100% / $t5);

    #{$t1} {
      opacity: 1;
      transform: scale($scale-base-1);
    }
    #{$t2} {
      opacity: 1;
    }
    #{$t3} {
      opacity: 1;
    }
    #{$t4} {
      opacity: 0;
      transform: scale(1);
    }

    @if ($i != $items) {
      100% {
        opacity: 0;
        transform: scale($scale-base-1);
      }
    }

    @if ($i == 1) {
      $scale-plus: ($scale * (100% - $t5) / $t4);
      $scale-plus-base-1: (1 + ($scale + $scale-plus) / 100%);

      #{$t5} {
        opacity: 0;
        transform: scale($scale-plus-base-1);
      }
      100% {
        opacity: 1;
      }
    }
  }
}

@media screen and (min-width: 768px) {
.body--light .q-page .slideshow-image {
  position: absolute;
  width: 768px;
  height: 100%;
  background: url("/statics/bg.jpg") no-repeat 50% 50%;
  background-size: cover;
  animation-name: kenburns;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: $total-time;
  opacity: 1;
  transform: scale($scale-base-1);

  @for $i from 1 through $items {
    &:nth-child(#{$i}) {
      animation-name: kenburns-#{$i};
      z-index: ($items - $i);
    }
  }
}
}
</style>