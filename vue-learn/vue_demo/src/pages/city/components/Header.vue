<template>
  <div class="header">
       城市选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/variables.styl"
  .header
    position : relative
    overflow :hidden
    height : $headerHeight
    line-height : $headerHeight
    text-align : center
    color : #fff
    background :$bgColor
    font-size :18px
    .header-back
      position : absolute
      width: 20px
      text-align :center
      font-size: 20px
      left : 5px
      top: 0
      color :#fff
</style>
