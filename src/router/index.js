import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/blog'
import Home from '@/components/blog/page/Home'

// 列表页
import List from '@/components/blog/page/List'

// 单页
import Sort from '@/components/blog/page/Sort'
import About from '@/components/blog/public/About'

// 详情页
import News from '@/components/blog/page/News'

// 后台
import Admin from '@/components/admin'
import InsertSort from '@/components/admin/InsertSort'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/blog'
    },
    {
      path: '/blog',
      component: Blog,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            title: "千辰的博客"
          }
        },
        {
          path: 'sort',
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
          path: 'list/:sortid',
          name: 'List',
          component: List
        },
        {
          path: 'news/:newsid',
          name: 'News',
          component: News
        }
      ]
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
