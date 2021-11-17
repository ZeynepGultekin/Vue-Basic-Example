const app = Vue.createApp({
  data() {
    return { 
      newGoal: "",
      goals: []
     };
  },
  methods: {
    addGoal() {
      if(this.newGoal != ""){

        this.goals.push(this.newGoal);
        this.newGoal = ""
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');
