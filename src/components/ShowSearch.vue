<template>
  <router-link :to="`/player/${type2}/${type}/${id}`">
    <li>
      <a href="javascript:;">
        <img :src="`${imgSrc}`" alt />
        <div class="music-detail">
          <h2>{{title}}</h2>
          <span>{{name}}</span>
        </div>
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    name: String,
    imgSrc: String,
    type: String,
    id: String,
    type2:String
  }
};
</script>

<style>
</style>