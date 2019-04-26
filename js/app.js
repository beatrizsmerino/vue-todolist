var app = new Vue({
    el: '#app',
    data: {
        title: "Things Todo",
        tasks: [
            {
                title: "Do something awesome!",
                status: false
            },
            {
                title: "Buy toilet paper",
                status: false
            },
            {
                title: "Learn Vue",
                status: false
            }
        ]
    }
});