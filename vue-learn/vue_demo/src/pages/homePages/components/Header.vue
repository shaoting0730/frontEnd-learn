<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
        输入你想搜索的
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.$store.state.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  /*@import "~@/assets/styles/variables.styl"*/
  @import "~@styles/variables.styl"
  .header
    display :flex
    line-height :$headerHeight
    background :$bgColor
    color :#fff
    .header-left
     width :32px
     margin-left :5px
     float :left
       .back-icon
         text-align :center
         font-size :0.4rem
    .header-input
      flex: 1
      height: 30px
      line-height : 30px
      margin-top : 5px
      margin-left :6px
      padding-left :4px
      background : #fff
      border-radius : 2px
      color :#ccc
     .header-right
       width :80px
       float :right
       text-align:center
       color :#fff
      .arrow-icon
       font-size :0.2rem
</style>
