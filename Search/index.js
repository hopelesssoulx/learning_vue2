var app = new Vue({
    el: "#app",
    data: {
        city: "",
        cityCode: 0,
        info: ""
    },
    methods: {
        getInfo: function () {
            var that = this;

            axios.get('https://geoapi.qweather.com/v2/city/lookup?location=' + this.city + '&key=2372765ac3e944cfb1a331a62e6ad7c2')
                .then(function (response) {
                    console.log(response.data)
                    that.cityCode = response.data.location[0].id
                    axios.get('https://devapi.qweather.com/v7/weather/7d?location=' + that.cityCode + '&key=2372765ac3e944cfb1a331a62e6ad7c2')
                        .then(function (response) {
                            that.info = response.data.daily
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                        .then(function () {

                        });
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {

                });
        },
        changeCity: function(city){
            this.city = city;
            this.getInfo();
        }
    }
})
