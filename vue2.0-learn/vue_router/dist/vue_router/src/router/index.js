'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Hi = require('@/components/Hi');

var _Hi2 = _interopRequireDefault(_Hi);

var _Hi3 = require('@/components/Hi1');

var _Hi4 = _interopRequireDefault(_Hi3);

var _Hi5 = require('@/components/Hi2');

var _Hi6 = _interopRequireDefault(_Hi5);

var _Left = require('@/components/Left');

var _Left2 = _interopRequireDefault(_Left);

var _Right = require('@/components/Right');

var _Right2 = _interopRequireDefault(_Right);

var _news = require('@/components/news');

var _news2 = _interopRequireDefault(_news);

var _error = require('@/components/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
// import Hello from '@/components/Hello'
exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Hello',
    // component: Hello
    components: {
      default: _Left2.default,
      left: _Left2.default,
      right: _Right2.default
    }
  }, {
    path: '/Hi',
    component: _Hi2.default,
    children: [{
      path: '/',
      name: 'Hello/Hi',
      component: _Hi2.default
    }, {
      path: 'hi1',
      name: 'Hello/Hi/hi1',
      component: _Hi4.default
    }, {
      path: 'Hi2',
      name: 'Hello/Hi/hi2',
      component: _Hi6.default
      // components: {
      //   default: Left,
      //   left: Left,
      //   right: Right
      // }

    }]
  }, {
    // 加入了正则，我们再传递数字之外的其他参数，params.vue组件就没有办法接收到。
    path: '/news/:newsId(\\d+)/:newsTitle',
    name: 'name',
    component: _news2.default
  }, {
    path: '/goback',
    redirect: '/'
  }, {
    path: '/error',
    component: _error2.default,
    alias: '/错误'
  }, {
    path: "*",
    component: _error2.default
  }]
});
//# sourceMappingURL=index.js.map