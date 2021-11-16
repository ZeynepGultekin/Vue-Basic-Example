 const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    reduce() {
      this.counter--;
    },
    addMore(num) {
      this.counter = this.counter + num;
    },
    reduceMore(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName ) {
      this.name = event.target.value + " " + lastName
    },
    submitForm() {
      alert("Submitted!")
    },
    confirmInput() {
      this.confirmedName = this.name
    }
    

  }
});

app.mount('#events');
