<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>导航
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
      <router-link :to="{name:'Hello/Hi/hi1',params:{username:'jspang'}}">页面1</router-link>
      <router-link to="/hi/hi1">页面1</router-link>
      <router-link to="/hi/hi2">页面2</router-link>
      <router-link to="/news/198wew/jspang website is very good">params</router-link>
      <router-link to="/goback">goback</router-link>
      <router-link to="/wrong">wrong</router-link>
    </div>

    <button @click="goback()">后退</button>
    <button @click="goPrev()">前进</button>
    <button @click="goHome()">回到首页</button>

    <p>{{$route.name}}</p>

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" style="float: left;width: 50%;background-color: #ccc;height: 300px"></router-view>
    <router-view name="right" style="float: right;width: 50%;background-color: #c0c;height: 300px"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      goback() {
        this.$router.go(-1);
      },
      goPrev() {
        this.$router.go(1)
      },
      goHome() {
        this.$router.push("/")
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-enter-active {
    transition: opacity .5s;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
