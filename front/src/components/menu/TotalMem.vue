<template>
    <div>
        <ul>
            <li v-for="member in test" v-bind:key="member.index">
                이름: {{member.name}}
                나이: {{member.age}}
            </li>
        </ul>
        <div v-if="top">
            보이냐
        </div>
        <div v-show="top">
            보이냐
        </div>
        <button v-on:click="show">보였다가 안보였다가</button>
        {{this.$store.state.name}}
    </div>
</template>

<script>
export default {
    
    data() {
        return {
            top: false,
            test : this.$store.state.members 
        }
    },
    methods: {
        show() {
            this.top =! this.top;
            //true 
        }
    },
}
</script>

<style>

</style>