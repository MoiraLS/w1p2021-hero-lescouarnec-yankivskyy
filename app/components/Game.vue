<template>
  <div class="big-header">
    <p>{{ title }}</p>
    <br />
    <router-link v-for="action in actions" :key="action.to" class="button" :to="'/game/' + action.to">{{ action.label }}</router-link>
  </div>
</template>

<script>
import json from '../data.json'

export default {
    computed: {
      title() {
        const id = this.$route.params.id;
        const step = json[id];
        if (!step)
          return ''; // FIXME handle unexisting json key

        return step.title;
      },
      actions() {
        const id = this.$route.params.id;
        const step = json[id];
        if (!step)
          return ''; // FIXME handle unexisting json key

        return step.actions;
      }
    }
};
</script>
