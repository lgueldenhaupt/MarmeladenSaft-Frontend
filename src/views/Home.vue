<template>
    <div class="home">
        <img src="../assets/logo.png">
        <ToolBar></ToolBar>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue';
    import ToolBar from '@/components/toolbar/ToolBar';

    @Component({
        components: {
            HelloWorld,
            ToolBar,
        },
    })
    export default class Home extends Vue {
    }
</script>
