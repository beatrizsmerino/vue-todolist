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
        ],
        taskNew: ""
    },
    methods: {
        taskAdd() {
            var title = this.taskNew.trim();
            if (title) {
                this.tasks.push({
                    title: title,
                    status: false
                })
            }
            this.taskNew = "";
        },
        taskRemove(index) {
            this.tasks.splice(index, 1);
        }
    },
});