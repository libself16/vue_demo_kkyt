<template>
  <div>
    <div class="banner">
      <img src="../img/banner.jpg" alt />
    </div>

    <div class="today-suggest">
      <div class="ts-header">
        <h2>今日推薦</h2>
      </div>
      <iframe
        :src="`https://widget.kkbox.com/v1/?id=${todaySong}&type=song&terr=TW&lang=TC&autoplay=true`"
        v-if="todaySong"
        allow="autoplay"
      ></iframe>
    </div>

    <div class="playlists">
      <div class="pl-header">
        <h2>最新熱門歌單</h2>
        <router-link to="/playlists/new_hits_playlists">
          <span>More +</span>
        </router-link>
      </div>
      <div class="pl-cards">
        <NewHits v-for="(data, index) in new_hits_playlists.data" :key="index" :data="data" />
      </div>
      <div class="pl-header">
        <h2>最新排行榜</h2>
        <router-link to="/playlists/charts">
          <span>More +</span>
        </router-link>
      </div>
      <div class="pl-cards">
        <Charts v-for="(data, index) in minCharts" :key="index" :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import NewHits from "../components/NewHits";
import Charts from "../components/Charts";
export default {
  computed: {
    ...mapState(["new_hits_playlists", "todaySong", "minCharts"])
  },
  components: { NewHits, Charts }
};
</script>

<style>
</style>