<template>
  <router-link :to="`/player/list/new-hits-playlists/${data.id}`">
    <div class="card">
      <div class="card-img">
        <img :src="`${data.images[0].url}`" alt />
      </div>
      <div class="card-title">
        <h2>{{title}}</h2>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    data: Object
  },
  computed: {
    title() {
      return this.data.title.trim().substr(0, 6);
    }
  }
};
</script>

<style>
</style>