<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-view class="aaa"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Hi,I am JSPang'
      }
    }
  }

</script>

<style scoped>

</style>
