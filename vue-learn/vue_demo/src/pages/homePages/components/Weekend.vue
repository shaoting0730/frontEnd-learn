<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
         <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@styles/mixins.styl"
  .recommend-title
    line-height :32px
    background :#eee
    text-indent :4px
  .item
    felx:1
    .item-img-wrapper
      overflow :hidden
      width : 100%
      height : 140px
      .item-img
       width :100%
    .item-info
      padding : 1px
      .item-title
        line-size: 22px
        ellipsis()
      .item-desc
        line-height : 15px
        ellipsis()
</style>
