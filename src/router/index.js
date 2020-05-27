import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index'
import ListPlayer from '../views/ListPlayer'
import Playlists from '../views/Playlists'
import Search from '../views/Search'
import SearchTracks from '../views/SearchTracks'
import SearchPlaylists from '../views/SearchPlaylists'
import TrackPlayer from '../views/TrackPlayer'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/index',
            component:Index
        },
        {
            path:'/player/list/:type/:platlistId',
            component:ListPlayer,
            // children:[
            //     {
            //         path:'list/:type/:platlistId',
            //         component:ListPlayer
            //     },
            //     {
            //         path:'track/:type/:trackId',
            //         component:TrackPlayer
            //     },
            // ]
        },
        {
            path:'/player/track/:type/:platlistId',
            component:TrackPlayer,
            // children:[
            //     {
            //         path:'list/:type/:platlistId',
            //         component:ListPlayer
            //     },
            //     {
            //         path:'track/:type/:trackId',
            //         component:TrackPlayer
            //     },
            // ]
        },
        {
            path:'/playlists',
            component:Playlists,
            children:[
                {
                    path:':playlistsType',
                    component:Playlists
                }
            ]
        },
        {
            path:'/search',
            component:Search,
            children:[
                {
                    path:'tracks',
                    component:SearchTracks
                },
                {
                    path:'playlists',
                    component:SearchPlaylists
                }
            ]
        },
        {
            path:'/',
            redirect:'/index'
        }
    ]
})