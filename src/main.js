import Vue from "vue"
import App from "./App"
import router from "./router"

import "lib-flexible"

  new Vue({
  render: function (h){
    return h(App)
  },
  router //所有组件都能得到公共的两个..属性 : $router(路由器) $route(路由) <router-link/> <router-view/>
}).$mount("#app")