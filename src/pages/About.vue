<template>
  <q-page id="zatpp_involved" padding class="q-px-lg q-mt-md">
<p>a Zeke and the Popo Story credits

<p>The Band:<br>
Iman Fattah on Guitars<br>
Leonardo Ringo on Drums, Guitars and Vocals<br>
Yuditia Noor on Bass and Vocals<br>
Zeke Khaseli on Keyboards, Guitars and Vocals</p>

<p>Guest Stars:<br>
Dave Lumenta on Synthesizers, Pianica and Vocoder<br>
Mian Tiara on Vocals<br>
Yosaviano Santoso on Guitars, Vocals and Keyboards<br>
Firzi O on Guitars, Tapes and Modular Synthesizers</p>

<p>Event Manager:<br>
Satria Ramadhan</p>

<p>Sound & Studio Engineer:<br>
Dimson, Salim</p>

<p>Studio Runner:<br>
Narto</p>

<p>Artwork:<br>
Haris Shitvicious</p>

<p>Photographers:<br>
Ade Firmansyah, Raka</p>

<p>Stage Manager:<br>
Bongky</p>

<p>Stage Crews:<br>
Joan, Joker, Kevin</p>

<p>Lighting Works:<br>
Motion Beast</p>

<p>Motion Beast Crew:<br>
Felix & Kipli</p>

<p>Video:<br>
Wafi & Satrio Flying Tempura</p>

<p>Ticketing partner:<br>
Eventevent</p>

<p>Web Development:<br>
Prys from <i class="fab fa-xing"></i>abi</p>

<p>Media Partner:<br>
Fungjai<br>
Provoke! Magazine<br>
Pophariini<br>
Demajors Radio<br>
Deathrockstar<br>
Soundfren</p>

<p>Thank you for your patience while we work around this situation. Please take care of each other.</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      progress: 0.01,
      buffer: 0.01
    };
  },
  mounted() {

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
#zatpp_involved {
  background: #eee;
}
</style>
