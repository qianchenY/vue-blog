import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

// 列表页
import List from '@/components/List'

// 单页
import Sort from '@/components/Sort'
import About from '@/components/public/About'

// 详情页
import News from '@/components/News'

// 后台
import Admin from '@/components/admin'
import InsertSort from '@/components/admin/InsertSort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "千辰的博客"
      }
    },
    {
      path: '/sort',
      name: 'Sort',
      redirect: '/',
      component: Sort,
      children: [
        {
          path: 'about',
          name: 'SortContent',
          component: About
        }
      ]
    },
    {
      path: '/list/:sortid',
      name: 'List',
      component: List
    },
    {
      path: '/news/:newsid',
      name: 'News',
      component: News
    },
    {
      path: '/admin',
      name: 'Admin',
      redirect: '/',
      component: Admin,
      children: [
        {
          path: 'insertsort',
          name: 'InsertSort',
          component: InsertSort
        }
      ]
    }
  ]
})
