var app = new Vue({
    el: "#app",
    data: {
        search_word: "",
        list: [],
        song_id: 0,
        song_url: ""
    },
    methods: {
        search: function () {
            var that = this;

            axios.get('https://autumnfish.cn/search', {
                params: {
                    keywords: this.search_word
                }
            })
                .then(function (response) {
                    that.list = response.data.result.songs;
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
        },
        play_music: function (id) {
            var that = this;

            axios.get('https://autumnfish.cn/song/url', {
                params: {
                    id: id
                }
            })
                .then(function (response) {
                    that.song_url = response.data.data[0].url;
                    console.log(response);
                    
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                });
        }
    }
})