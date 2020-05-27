<template>
  <div class="player-wrapper">
    <div class="player" v-if="ytData.items">
      <iframe id="ytplayer" type="text/html" :src="`https://www.youtube.com/embed/${ytData.items[0].id.videoId}`"></iframe>
      <div class="player-description">
        <h2>{{ytData.items[0].snippet.title}}</h2>
        <p>{{ytData.items[0].snippet.channelTitle}}</p>
        <p>{{ytData.items[0].snippet.description}}</p>
      </div>
    </div>

    <div class="waiting-list">
      <div class="wl-header">
        <h2>播放清單</h2>
      </div>
      <ul class="wl-body">
        <PlayerItem v-for="(musicData, index) in musicAry.data" :key="index"
        :title="musicData.name" :name="musicData.album.artist.name"
        :imgSrc="musicData.album.images[1].url"/>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import PlayerItem from "../components/PlayerItem";
export default {
  components: {
    PlayerItem
  },
  created() {
    const type = this.$route.params.type;
    const platlistId = this.$route.params.platlistId;
    this.$store.dispatch("reqListTracks", { type, platlistId });
    // if(this.$store.state.musicAry,length === 0){
    //     return
    // }
    // const songName = this.$store.state.musicAry.data[0].name;
    // await this.$store.dispatch("reqYoutubeData", songName);
  },
  computed:{
      ...mapState(['ytData','musicAry'])
  },
  destroyed(){
    this.$store.dispatch('clearYT')
  }
};
</script>

<style>
</style>