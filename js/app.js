const data = {
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
};


Vue.component('page-title', {
    template: '<h1>{{title}}</h1>',
    data() {
        return {
            title: "Things Todo"
        }
    }
});

var app = new Vue({
    el: '#app',
    data: data,
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