const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/aps":{
        target: "http://localhost:3000"
      }
    },
    proxy:{
      "/api":{
        target: "http://13.125.96.150:3000/api/",
      }
    },
  }
})
