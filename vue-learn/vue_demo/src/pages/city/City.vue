<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {CityAlphabet, CityList, CitySearch, CityHeader},
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getHomeData () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
        console.log(data.cities)
      }
    },
    handleLetterChange (e) {
      this.letter = e
    }
  },
  mounted () {
    this.getHomeData()
  }
}
</script>

<style scoped>

</style>
