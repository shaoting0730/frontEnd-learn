<template>
  <div>
    <h1>{{msg}}</h1>
    <hr/>
    <h1>本场比赛得分: {{$store.state.count}}-{{count}}</h1>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('minus')">-</button>
      <button @click="minus">minus</button>
    </p>
  </div>
</template>
<script>
  import store from '@/vuex/store';
  import {mapState,mapMutations} from 'vuex';

  export default {
    data() {
      return {
        msg: 'Count @'
      }
    },
//    computed:{
//      count(){
//        return this.$store.state.count;
//      }
//    },

//    computed: mapState({
//      count: state => state.count
//    }),

    computed: mapState(["count"]),
    methods:mapMutations(['add','minus']),
    store
  }
</script>
