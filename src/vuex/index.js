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
        url: "/list/qianduan",
        child: [{
            id: 3,
            name: "JavaScript",
            url: "/list/js"
          },
          {
            id: 4,
            name: "HTML+CSS",
            url: "/list/htmlcss"
          },
          {
            id: 5,
            name: "nodeJS",
            url: "/list/nodeks"
          },
          {
            id: 6,
            name: "Vue",
            url: "/list/vue"
          }
        ]
      },
      {
        id: 1,
        name: "后端",
        url: "/list/houduan",
        child: [{
            id: 7,
            name: "PHP",
            url: "/list/php"
          },
          {
            id: 8,
            name: "Python",
            url: "/list/python"
          }
        ]
      },
      {
        id: 2,
        name: "杂谈",
        url: "/list/zatan"
      },
      {
        id: 9,
        name: "简介",
        url: "/sort/about"
      }
    ]
}

export default new vuex.Store({
  	state
})
