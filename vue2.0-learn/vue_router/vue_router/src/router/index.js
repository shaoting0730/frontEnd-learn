import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/Left'
import Right from '@/components/Right'
import news from '@/components/news'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      // component: Hello
      components: {
        default: Left,
        left: Left,
        right: Right
      }
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {
          path: '/',
          name: 'Hello/Hi',
          component: Hi
        },
        {
          path: 'hi1',
          name: 'Hello/Hi/hi1',
          component: Hi1
        },
        {
          path: 'Hi2',
          name: 'Hello/Hi/hi2',
          component: Hi2
          // components: {
          //   default: Left,
          //   left: Left,
          //   right: Right
          // }

        }
      ]
    },
    {
      // 加入了正则，我们再传递数字之外的其他参数，params.vue组件就没有办法接收到。
      path: '/news/:newsId(\\d+)/:newsTitle',
      name: 'name',
      component: news
    }, {
      path: '/goback',
      redirect: '/'
    }, {
      path: '/error',
      component: Error,
      alias: '/错误',
      // beforeEnter: (to, from, next) => {
      //   console.log('我进入了Error Template'),
      //   console.log(to),
      //   console.log(from)
      }, {
      path: "*",
      component: Error,
    }
  ]
})
