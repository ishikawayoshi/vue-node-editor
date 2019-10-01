<template>
  <div id="app">
    <navbar-component />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent";
export default {
  name: "app",
  components: { NavbarComponent },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss">
</style>
