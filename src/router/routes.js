/**
 * 配置路由所有的数组
 */

import MSite from "@/pages/MSite/MSite"
import Order from "@/pages/Order/Order"
import Profile from "@/pages/Profile/Profile"
import Search from "@/pages/Search/Search"

export default [
  {
    path: "/",
    redirect: "/msite"
  },
  {
    path: '/msite',
    component: MSite
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/search',
    component: Search
  },
]