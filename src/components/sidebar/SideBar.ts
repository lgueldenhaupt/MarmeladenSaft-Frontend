import {Component, Vue} from 'vue-property-decorator';
import router from '@/router';

@Component ({
    name: 'SideBar',
})
export default class SideBar extends Vue {

    private routeTo(destination: any) {
        router.push(destination);
    }

}