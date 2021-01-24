import React from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

// const  DDiscover = React.lazy(() => import('@/pages/discover'))
// const  DRecommend = React.lazy(() => import('@/pages/discover/children-pages/recommend'))
// const  DRanking = React.lazy(() => import('@/pages/discover/children-pages/ranking'))
// const  DSongs = React.lazy(() => import('@/pages/discover/children-pages/songs'))
// const  DDjradio = React.lazy(() => import('@/pages/discover/children-pages/djradio'))
// const  DArtist = React.lazy(() => import('@/pages/discover/children-pages/artist'))
// const  DAlbum = React.lazy(() => import('@/pages/discover/children-pages/album'))
// const  DMine = React.lazy(() => import('@/pages/mine'))
// const  DFriend = React.lazy(() => import('@/pages/friend'))
// const  DPlayer = React.lazy(() => import('@/pages/player'))


// import DDiscover from '@/pages/discover'
// import DRecommend from "@/pages/discover/children-pages/recommend";
// import DRanking from "@/pages/discover/children-pages/ranking";
// import DSongs from "../pages/discover/children-pages/songs";
// import DDjradio from "../pages/discover/children-pages/djradio";
// import DArtist from "../pages/discover/children-pages/artist";
// import DAlbum from "../pages/discover/children-pages/album";
// import DMine from '@/pages/mine'
// import DFriend from '@/pages/friend'
// import DPlayer from '@/pages/player'

import Welocme from '../component/welcome'
import Button from '../component/button'
import Alert from '../component/alert'
import Loading from '../component/loading'
import Input from '../component/input'
import AutoComplete from '../component/autoComplete'
import Icon from '../component/icon'

const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to='/welocme' />
        )
    },
    {
        path: '/welocme',
        component: Welocme,
    },
    {
        path: '/button',
        component: Button,
    },
    {
        path: '/alert',
        component: Alert,
    },
    {
        path: '/loading',
        component: Loading,
    },
    {
        path: '/input',
        component: Input,
    },
    {
        path: '/autoComplete',
        component: AutoComplete,
    },
    {
        path: '/icon',
        component: Icon,
    },
]

export default routes;