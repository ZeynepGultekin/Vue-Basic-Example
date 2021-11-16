const app  = Vue.createApp({
    data() {
        return {
            name: 'Zeynep',
            age: 32,
            futureAge: 32+5,
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
            
        }
    },
    methods: {
        random() {
            return Math.random();
        }
    }
});

app.mount('#assignment');