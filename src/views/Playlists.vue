<template>
  <div class="playlists2">
    <div class="pl-header">
      <h2>{{playlistTitle}}</h2>
    </div>
    <div class="pl-cards">
      <PlaylistItem v-for="(playlist, index) in playlistsData" :key="index" :playlist="playlist" />
    </div>
  </div>
</template>

<script>
import PlaylistItem from "../components/PlaylistItem";
import _variable from './_variable'
export default {
  components: { PlaylistItem },
  computed: {
    playlistsData() {
      const typeName = this.$route.params.playlistsType;
      return this.$store.state[typeName].data;
    },
    playlistTitle() {
      const typeName = this.$route.params.playlistsType;
      return _variable[typeName]
    }
  }
};
</script>

<style>
</style>