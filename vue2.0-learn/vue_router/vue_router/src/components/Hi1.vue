<template>
  <div class="hi1">
    <h1>{{msg}}</h1>
    <P>{{$route.params.username}}</P>
  </div>

</template>
<script>
  export default {
    name: 'hi1',
    data() {
      return {
        msg: 'Hi页面1~!'
      }
    }
  }

</script>

<style scoped>

</style>
