
const px2rem = require("postcss-px2rem") //postcss的一个插件

module.exports = { //只能写vue疯转的配置
  /**
   * 最后所有脚手架cli的配置最终都会转换为webpack脚手架的配置
   * 
   * configureWebpack选项内填写的都是属于webpack配置的东西
   */

  //runtimeCompiler: true
  //lintOnSave: false //关闭EsLint的规则
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 37.5 // 设计稿等分后的rem值 375/10
          })
        ]
      }
    }
  },


  configureWebpack: { //内部写webpack原生配置
    resolve: {
      extensions: [".js", ".vue", ".json"], //指定的 可以省略后缀名
      alias: { //路径别名 （简写方式）
        //'vue$' : 'vue/dist/vue.esm.js',  //表示精确匹配 带vue过滤器
        '@' : path.resolve(__dirname, "src"),
        '@components' : path.resolve(__dirname,"src/components")
      }
    }

  }
}