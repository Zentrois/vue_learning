const app = Vue.createApp({
    data(){
        return{
            title: 'The final Empire',
            author: 'Brandon Sanderson',
            age: 45,
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    }
})

app.mount('#app')