<template>
  <div id="app">
    <challenge-header />
    <router-view />
  </div>
</template>

<script>
import ChallengeHeader from "@/components/ChallengeHeader.vue";
export default {
  name: "App",
  components: { ChallengeHeader }
};
</script>