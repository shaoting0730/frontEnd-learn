<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins.styl"
  .recommend-title
    margin-top :4px
    line-height :32px
    background :#eee
    text-indent :4px
  .item
    overflow :hidden
    display :flex
    height : 100px
    .item-img
      padding : 10px
      width : 80px
      height : 80px
    .item-info
      flex :1
      padding : 2px
      min-width :0
      .item-title
          line-height : 50px
          line-size: 32px
          ellipsis()
      .item-desc
          line-height : 15px
          color : #cacaca
          ellipsis()
      .item-button
          margin-top :4px
          background : #ff9300
          padding : 2px
          border-radius : 4px
          color:#fff
          font-size :12px
</style>
