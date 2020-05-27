<template>
  <ul class="wl-body">
    <ShowSearch v-for="(data, index) in tracks" :key="index"
    :title="data.name" :name="data.album.artist.name" :imgSrc="data.album.images[1].url"
    :type="index.toString()" :type2="'track'" :id="data.id" />
  </ul>
</template>

<script>
import ShowSearch from '../components/ShowSearch'
export default {
  computed:{
    tracks(){
      return this.$store.state.searchData.tracks.data
    }
  },
  components:{
    ShowSearch
  }
};
</script>

<style>
</style>