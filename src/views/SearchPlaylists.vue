<template>
  <ul class="wl-body">
    <ShowSearch v-for="(data, index) in playlists" :key="index"
    :title="data.title" :type="'charts'" :type2="'list'" :id="data.id" :name="`By ${data.owner.name}`" :imgSrc="data.images[1].url"/>
  </ul>
</template>

<script>
import ShowSearch from '../components/ShowSearch'
export default {
  computed:{
    playlists(){
      return this.$store.state.searchData.playlists.data
    }
  },
  components:{
    ShowSearch
  }
};
</script>

<style>
</style>