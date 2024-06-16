<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons  :list="iconsList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'HomePage',
  data () {
    return {
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeWeekend,
    HomeRecommend,
    HomeIcons,
    HomeHeader,
    HomeSwiper
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style scoped>

</style>
