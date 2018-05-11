import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page from '@/components/Page'
import List from '@/components/List'
import About from '@/components/public/About'
import ArticleList from '@/components/public/ArticleList'

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
      path: '/page',
      name: 'Page',
      redirect: '/',
      component: Page,
      children: [
        {
          path: ':sort',
          name: 'About',
          component: About
        }
      ]
    },
    {
      path: '/list',
      name: 'List',
      redirect: '/',
      component: List,
      children: [
        {
          path: ':sort',
          name: 'ArticleList',
          component: ArticleList
        }
      ]
    }
  ]
})
