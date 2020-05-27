<template>
  <div>
    <TopBar />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

export default {
  components: {
    TopBar,
    Footer
  },
  async created() {
    await this.reqAccessToken()
    await this.reqCharts()
    this.reqTodaySuggest()
    this.reqNewHitsPlaylists()
  },
  methods: {
    ...mapActions([
      "reqAccessToken",
      "reqTodaySuggest",
      "reqNewHitsPlaylists",
      "reqCharts"
    ])
  },
  computed: {
    ...mapState(["access_token", "todaySong", "minCharts"])
  }
};
</script>

<style>
</style>