<template>
  <li >
    <a @click="changeSong" href="javascript:;">
      <img :src="`${imgSrc}`" alt />
      <div class="music-detail">
        <h2>{{title}}</h2>
        <span>{{name}}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props:{
    title:String,
    name:String,
    imgSrc:String
  },
  methods:{
    changeSong(){
      this.$store.dispatch("reqYoutubeData", this.name + this.title);
    }
  }
};
</script>

<style>
</style>