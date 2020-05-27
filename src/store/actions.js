import qs from 'querystring'
import axios from 'axios'
import types from './mutation-types'
export default {
    async reqAccessToken({ commit }) {
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };
        const data = {
            grant_type: "client_credentials",
            client_id: "cdfb31a6f5ab47635e32c8af8d98bf82",
            client_secret: "f27fc4e513664f808ed114f0fa04aae6"
        };
        const cors = "https://cors-anywhere.herokuapp.com/";
        const url = "https://account.kkbox.com/oauth2/token";
        await axios
            .post(`${cors}${url}`, qs.stringify(data), config)
            .then(res => {
                const access_token = res.data.access_token
                commit(types.REQACCESSTOKEN, { access_token })
            })
    },
    reqNewHitsPlaylists({ commit, state }) {

        const config = {
            headers: {
                Authorization: `Bearer ${state.access_token}`
            },
            params: {
                territory: "TW",
            }
        };
        const url = "https://api.kkbox.com/v1.1/new-hits-playlists";
        axios
            .get(url, config)
            .then(res => {
                const new_hits_playlists = res.data
                commit(types.REQNEWHITSPLAYLISTS, { new_hits_playlists })
            });
        // .then(res => this.new_hits_playlists = res.data);
    },
    async reqCharts({ commit, state }) {

        const config = {
            headers: {
                Authorization: `Bearer ${state.access_token}`
            },
            params: {
                territory: "TW",
            }
        };
        const url = "https://api.kkbox.com/v1.1/charts";
        await axios
            .get(url, config)
            .then(res => {
                const charts = res.data
                commit(types.REQCHARTS, { charts })
            });
        // .then(res => this.new_hits_playlists = res.data);
    },
    reqTodaySuggest({ commit, state }) {

        const d = new Date()
        const config = {
            headers: {
                Authorization: `Bearer ${state.access_token}`
            },
            params: {
                territory: "TW",
                limit: 1,
                offset: d.getDate()
            }
        };
        const url = `https://api.kkbox.com/v1.1/charts/${state.charts.data[0].id}/tracks`;
        axios
            .get(url, config)
            .then(res => {
                const todaySong = res.data.data[0].id
                commit(types.REQTODAYSUGGEST, { todaySong })
            });
    },
    async searchKKBOX({ commit, state },searchStr) {

        const config = {
            headers: {
                Authorization: `Bearer ${state.access_token}`
            },
            params: {
                q: searchStr,
                type: "track, playlist",
                territory: "TW",
                limit: 20
            }
        };
        const url = "https://api.kkbox.com/v1.1/search";
        await axios
            .get(url, config)
            .then(res => {
                const searchData = res.data
                commit(types.SEARCHKKBOX, { searchData })
            })

    },
    async reqListTracks({commit, state},{type,platlistId}){
        const config = {
        headers: {
          Authorization: `Bearer ${state.access_token}`
        },
        params: {
          territory: "TW",
          limit:25
        }
      };
      const url = `https://api.kkbox.com/v1.1/${type}/${platlistId}/tracks`;
      await axios
        .get(url, config)
        .then(res => {
            const musicAry = res.data
            commit(types.REQLISTTRACKS,{musicAry})

            const artistName = musicAry.data[0].album.artist.name
            const musicName = musicAry.data[0].name
            const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDNysPuu6fPIBdEdmH-7yB1-GHacrPviLQ&part=snippet&type=video&q=${artistName} ${musicName}`
            axios.get(url)
            .then(res => {
                const ytData = res.data
                commit(types.REQYOUTUBEDATA,{ytData})
            })
        });
    },
    reqYoutubeData({commit},songName){
        const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDNysPuu6fPIBdEdmH-7yB1-GHacrPviLQ&part=snippet&type=video&q=${songName}`
        axios.get(url)
        .then(res => {
            const ytData = res.data
            commit(types.REQYOUTUBEDATA,{ytData})
        })
        // .then(res => this.ytData = res.data)
    },
    clearYT({commit}){
        commit(types.CLEARYT)
    }
}