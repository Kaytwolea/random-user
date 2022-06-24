const app = Vue.createApp({
    data() {
        return {
            firstName: 'Paul',
            lastName: 'Kolapo',
            gender: 'male',
            email: 'paulkolapo8@gmail.com',
            nickName: 'Kaytwolea',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
      async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
        

           this.firstName = results[0].name.first
           this.lastName = results[0].name.last
           this.gender = results[0].gender
           this.email =  results[0].email
           this.picture = results[0].picture.large
            },
            
        },
})

app.mount('#app')