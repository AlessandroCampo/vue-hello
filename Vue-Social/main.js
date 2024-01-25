const { createApp } = Vue


createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: "https://picsum.photos/seed/picsum/400/300",
            posts: [
                {
                    "id": 1,
                    "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "media": "https://unsplash.it/600/300?image=171",
                    "author": {
                        "name": "Phil Mangione",
                        "image": "https://unsplash.it/300/300?image=15"
                    },
                    "likes": 80,
                    "created": "2021-06-25"
                },
                {
                    "id": 2,
                    "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "media": "https://unsplash.it/600/400?image=112",
                    "author": {
                        "name": "Sofia Perlari",
                        "image": "https://unsplash.it/300/300?image=10"
                    },
                    "likes": 120,
                    "created": "2021-09-03"
                },
                {
                    "id": 3,
                    "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "media": "https://unsplash.it/600/400?image=234",
                    "author": {
                        "name": "Chiara Passaro",
                        "image": null
                    },
                    "likes": 78,
                    "created": "2021-05-15"
                },
                {
                    "id": 4,
                    "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "media": "https://unsplash.it/600/400?image=24",
                    "author": {
                        "name": "Luca Formicola",
                        "image": null
                    },
                    "likes": 56,
                    "created": "2021-04-03"
                },
                {
                    "id": 5,
                    "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "media": "https://unsplash.it/600/400?image=534",
                    "author": {
                        "name": "Alessandro Sainato",
                        "image": "https://unsplash.it/300/300?image=29"
                    },
                    "likes": 95,
                    "created": "2021-03-05"
                }
            ],
            likeClass: "",
            buttonClicked: (e) => {
                let corrrectIndex = (e.target.getAttribute("data-index")) - 1
                e.target.classList.toggle("text-green-700")
                if (e.target.classList.contains("text-green-700")) this.posts[corrrectIndex].likes++
                else this.posts[corrrectIndex].likes--
            },
            changeName: function (name) {
                let nameSurname = name.split(" ")
                let intials = nameSurname[0][0].toUpperCase() + nameSurname[1][0].toUpperCase()
                return intials
            }
        }
    }
}).mount('#app')