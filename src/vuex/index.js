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
        url: "qianduan",
        child: [{
            id: 3,
            name: "JavaScript",
            url: "js"
          },
          {
            id: 4,
            name: "HTML+CSS",
            url: "htmlcss"
          },
          {
            id: 5,
            name: "nodeJS",
            url: "nodeks"
          },
          {
            id: 6,
            name: "Vue",
            url: "vue"
          }
        ]
      },
      {
        id: 1,
        name: "后端",
        url: "houduan",
        child: [{
            id: 7,
            name: "PHP",
            url: "php"
          },
          {
            id: 8,
            name: "Python",
            url: "python"
          }
        ]
      },
      {
        id: 2,
        name: "杂谈",
        url: "zatan"
      }
    ]
}

export default new vuex.Store({
  	state
})
