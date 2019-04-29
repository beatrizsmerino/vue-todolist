<template>
    <h1>{{title}}</h1>
</template>


<script>
    export default {
        props: ['title']
    };
</script>


<style lang="scss">
    h1 {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
        margin-bottom: 20px;
        text-align: center;
        font-size: 4em;
        font-weight: normal;
    }
</style>
