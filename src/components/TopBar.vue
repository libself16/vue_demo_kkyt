<template>
  <div class="top-bar-wrapper">
    <div class="top-bar">
      <div class="left-menu" @click="showMenu">
        <i class="fas fa-bars"></i>
        <ul class="nav" ref="nav">
          <li>
            <router-link to="/playlists/new_hits_playlists">熱門歌單</router-link>
          </li>
          <li>
            <router-link to="/playlists/charts">最新排行</router-link>
          </li>
        </ul>
      </div>
      <div class="logo" @click="closeMenu">
        <router-link to="/index">
          <h1>I Listen</h1>
        </router-link>
      </div>
      <div class="search" @click="closeMenu">
        <router-link to="/search">
          <i class="fas fa-search"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMenu() {
      this.$refs.nav.classList.toggle("nav-active");
    },
    closeMenu() {
      this.$refs.nav.classList.remove("nav-active");
    }
  }
};
</script>

<style>
</style>