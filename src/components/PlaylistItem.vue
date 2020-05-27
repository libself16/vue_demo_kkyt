<template>
  <router-link :to="`/player/list/${playlistsType}/${playlist.id}`">
    <div class="card">
      <div class="card-img">
        <img :src="`${playlist.images[0].url}`" alt />
      </div>
      <div class="card-text">
        <div class="card-title">
          <h2>{{playlist.title}}</h2>
        </div>
        <div class="card-description">
          <span>{{description}}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    playlist: Object
  },
  computed: {
    description() {
      let description = this.playlist.description;
      if (description.length > 20) {
        description = description.substr(0, 20) + "...";
      }
      return description;
    },
    playlistsType(){
      return this.$route.params.playlistsType.replace(/_/gi,'-')
    }
  },
};
</script>

<style>
</style>