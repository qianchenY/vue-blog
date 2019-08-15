import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const state = {
    options: {
		defaultImg: require('../assets/img/timthumb.jpg')
	},
    navbar: [{
        id: 0,
        name: "前端",
        url: "/blog/list/qianduan",
        child: [{
            id: 3,
            name: "JavaScript",
            url: "/blog/list/js"
          },
          {
            id: 4,
            name: "HTML+CSS",
            url: "/blog/list/htmlcss"
          },
          {
            id: 5,
            name: "nodeJS",
            url: "/blog/list/nodejs"
          },
          {
            id: 6,
            name: "Vue",
            url: "/blog/list/vue"
          }
        ]
      },
      {
        id: 1,
        name: "后端",
        url: "/blog/list/houduan",
        child: [{
            id: 7,
            name: "PHP",
            url: "/blog/list/php"
          },
          {
            id: 8,
            name: "Python",
            url: "/blog/list/python"
          }
        ]
      },
      {
        id: 2,
        name: "杂谈",
        url: "/blog/list/zatan"
      },
      {
        id: 9,
        name: "简介",
        url: "/blog/sort/about"
      }
    ]
}

export default new vuex.Store({
  	state
})
