<template>
  <div class="big-header">
    <div class="image">
      <img v-bind:src="img" alt="Vault">
      <img v-bind:src="img2">
    </div>
    <p>{{ title }}</p>
    <br />
    <div class="buttons">
      <router-link  class="button" :to="actionOne">{{ BTNA }}</router-link>
      <router-link v-show="actionTwo" class="button" :to="actionTwo">{{ BTNB }}</router-link>
    </div>
  </div>
</template>

<script>
import json from '../data.js'

export default {
    computed: {
      id(){
        return this.$route.params.id;
      },
      actionOne(){
        return json[this.id].toOne;
      },
      actionTwo(){
        console.log(json[this.id].toTwo)
        return json[this.id].toTwo;
      },
      BTNA(){
        return json[this.id].BTNA
      },
      BTNB(){
        return json[this.id].BTNB
      },
      title() {
        const id = this.$route.params.id;
        const step = json[id];
        if (!step)
          return ''; // FIXME handle unexisting json key

        return step.title;
      },

      img() {
        const id = this.$route.params.id;
        const step = json[id];
        return step.img;
      },

      img2() {
        const id = this.$route.params.id;
        const step = json[id];
        return step.img2;
      }
      /* actions() {
        const step = json[this.id];
        if (!step)
          return ''; // FIXME handle unexisting json key

        return step.actions;
      } */
    }
};
</script>
