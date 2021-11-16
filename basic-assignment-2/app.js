 const app = Vue.createApp({
  data() {
    return {
      value: "",
      value2: ""
    };
  },
  methods: {
    
    inputValue(event ) {
      this.value = event.target.value
    },
    inputValue2(event ) {
      this.value2 = event.target.value
    },
    alertUser() {
      alert("Hello there!")
    },
    confirmInput() {
      this.confirmedName = this.name
    }
    

  }
});

app.mount('#assignment');
