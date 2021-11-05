const App = new Vue({
  el: "#app",
  data(){
      return{
          num1:0,
          num2:0,
          name:''
      }
  }
})

Vue.createApp(App).mount('#app')