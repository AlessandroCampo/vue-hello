
const { createApp } = Vue



createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: "https://picsum.photos/seed/picsum/400/300"
        }
    }
}).mount('#app')