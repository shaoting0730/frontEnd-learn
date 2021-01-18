<template>
  <div>
    <h1>{{msg}}</h1>
    <p>新闻ID:{{$route.params.newsId}}</p>
    <p>新闻标题:{{$route.params.newsTitle}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'params page'
      }
    }
  }
</script>
<style scoped></style>
