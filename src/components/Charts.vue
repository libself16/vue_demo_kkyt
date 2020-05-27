<template>
  <router-link :to="`/player/list/charts/${data.id}`">
    <div class="card">
      <div class="card-img">
        <img :src="`${data.images[0].url}`" alt />
      </div>
      <div class="card-title">
        <h2>{{data.title}}</h2>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style>
</style>