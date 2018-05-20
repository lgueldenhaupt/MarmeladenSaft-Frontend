import {Component, Vue} from 'vue-property-decorator';

@Component ({
    name: 'FoodChoice',
})
export default class FoodChoice extends Vue {

    private suggestions: string[] = ['Nacho Auflauf', 'Nichts', 'Pizza', 'Asia-Shit'];

    private addSuggestion(suggestion: string) {
        // console.log(suggestion)
        this.suggestions.push(suggestion);
    }

    private deleteSuggestion(suggestion: string) {
        this.suggestions.splice(this.suggestions.indexOf(suggestion) , 1);
    }

}
