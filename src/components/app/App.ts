import {Component, Vue} from 'vue-property-decorator';
import ToolBar from '@/components/toolbar/ToolBar';
import SideBar from '@/components/sidebar/SideBar';

@Component ({
    components: {
        ToolBar,
        SideBar,
    },
})
export default class App extends Vue {

    private message: string = 'Hallo von der App Komponente';

}