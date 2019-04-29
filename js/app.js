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
    taskNew: "",
};


Vue.component('list-tasks', {
    template: `
            <transition-group name="list-item" tag="ul">
                <li v-for="(task, index) in tasks" :key="index" v-bind:class="{done: task.status}">
                    <div @click="task.status = !task.status" class="checkBox done"></div>
                    <span>{{task.title}}</span>
                    <i @click="taskRemove(index)" class="fa fa-trash-o"></i>
                </li>
            </transition-group>
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

Vue.component('add-tasks', {
    template: `
        <div id="newTask">
            <input v-model="taskNew" @keyup.enter="taskAdd()" type="text" placeholder="New task">
            <button @click="taskAdd()"><span>+</span></button>
        </div>
    `,
    data() {
        return data;
    },
    methods: {
        taskAdd() {
            const title = this.taskNew.trim();
            if (title) {
                this.tasks.push({
                    title: title,
                    status: false
                })
            }
            this.taskNew = "";
        },
    }
});

const app = new Vue({
    el: '#app',
    data: data
});