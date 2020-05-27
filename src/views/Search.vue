<template>
  <div>
    <div class="search-header">
      <input placeholder="你今天聽音樂了嗎? I Listen" maxlength="100" v-model="searchStr" />
      <button @click="searchKKBOX">搜尋</button>
    </div>

    <div class="search-main" v-show="showContent">
      <ul class="search-main-nav">
        <li>
          <router-link to="/search/tracks">歌曲</router-link>
        </li>
        <li>
          <router-link to="/search/playlists">歌單</router-link>
        </li>
      </ul>

      <div class="search-content player-wrapper">
        <div class="waiting-list">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchStr: "",
      showContent: false
    };
  },
  methods: {
    async searchKKBOX() {
      const { searchStr } = this;
      if (!searchStr) {
        alert("請輸入文字");
        return;
      }
      await this.$store.dispatch("searchKKBOX", searchStr);
      this.showContent = true;
      this.$router.push(`/search/tracks`);
    }
  }
  // computed: {
  //   searchDetail() {
  //     if (Object.entries(this.$store.state.searchData).length === 0) {
  //       return "";
  //     }
  //     const typeName = this.$route.params.searchType;
  //     return this.$store.state.searchData[typeName].data || "";
  //   }
  // }
};
</script>

<style>
</style>