import axios from 'axios';

export default {
    name: 'MyComponent',
    data() {
        return {
            message: ""
        }
    },
    methods: {
        fetchData: function () {
            var self = this;
            axios.get("/api/MyController")
                .then(function (response) {
                    self.message = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}