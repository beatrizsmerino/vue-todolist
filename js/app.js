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

Vue.component('list-tasks', {
    template: `
        <ul>
            <li v-for="(task, index) in tasks" :key="index" v-bind:class="{done: task.status}">
                <div v-on:click="task.status = !task.status" class="checkBox done"></div>
                <span>{{task.title}}</span>
                <i @click="taskRemove(task)" class="fa fa-trash-o"></i>
            </li>
        </ul>
    `,
    data() {
        return data;
    },
    methods: {
        taskRemove(index) {
            this.tasks.splice(index, 1);
        }
    },
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
    },
});