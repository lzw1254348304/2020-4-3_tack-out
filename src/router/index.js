/**
 * 向外暴露路由器对象模块
 */
import Vue from "vue"
import VueRouter from "vue-router"

//路由配置文件
import routes from "./routes"

//声明使用vue-router插件
Vue.use(VueRouter)

//导出路由配置
export default new VueRouter({
  mode:"history", //路由路径没有 #
  //项目中的所有路由配置
  routes
})