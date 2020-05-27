import types from './mutation-types'

export default {
    [types.REQACCESSTOKEN](state, { access_token }) {
        state.access_token = access_token
    },
    [types.REQNEWHITSPLAYLISTS](state, { new_hits_playlists }) {
        state.new_hits_playlists = new_hits_playlists
    },
    [types.REQCHARTS](state, { charts }) {
        state.charts = charts
        state.minCharts = charts.data.slice(0,4)
    },
    [types.REQTODAYSUGGEST](state,{todaySong}){
        state.todaySong = todaySong
    },
    [types.SEARCHKKBOX](state,{searchData}){
        state.searchData = searchData
    },
    [types.REQLISTTRACKS](state,{musicAry}){
        state.musicAry = musicAry
    },
    [types.REQYOUTUBEDATA](state,{ytData}){
        state.ytData = ytData
    },
    [types.CLEARYT](state){
        state.ytData = {}
    }
}