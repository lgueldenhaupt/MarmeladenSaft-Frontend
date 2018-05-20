import {Component, Vue} from 'vue-property-decorator';

@Component ({
    name: 'ToolBar',
})
export default class ToolBar extends Vue {

    private toggleStatus: boolean = false;

    public pressToolBar() {
        this.toggleStatus = !this.toggleStatus;
    }
}
