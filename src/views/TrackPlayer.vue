<template>
  <div class="player-wrapper">
    <div class="player" v-if="ytData.items">
      <iframe
        id="ytplayer"
        type="text/html"
        :src="`https://www.youtube.com/embed/${ytData.items[0].id.videoId}`"
      ></iframe>
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
        <PlayerItem
          :title="songDetail.name"
          :name="songDetail.album.artist.name"
          :imgSrc="songDetail.album.images[1].url"
        />
        <!-- <PlayerItem v-for="(musicData, index) in musicAry.data" :key="index"
        :title="musicData.name" :name="musicData.album.artist.name"
        :imgSrc="musicData.album.images[1].url"/>-->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PlayerItem from "../components/PlayerItem";
export default {
  components: {
    PlayerItem
  },
  created() {
    this.$store.dispatch(
      "reqYoutubeData",
      this.songDetail.album.artist.name + this.songDetail.name
    );
  },
  computed: {
    ...mapState(["ytData", "searchData"]),
    songDetail() {
      const num = this.$route.params.type * 1;
      return this.searchData.tracks.data[num];
    }
  },
  destroyed() {
    this.$store.dispatch("clearYT");
  }
};
</script>

<style>
</style>