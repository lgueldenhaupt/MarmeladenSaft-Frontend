import {Component, Vue} from 'vue-property-decorator';

@Component ({
    name: 'FoodChoice',
})
export default class FoodChoice extends Vue {

    private suggestions: String[] = ['Nacho Auflauf', 'Nichts', 'Pizza', 'Asia-Shit'];

    private addSuggestion(suggestion: String) {
        console.log(suggestion)
        this.suggestions.push(suggestion);
    }

    private deleteSuggestion(suggestion: String) {
        this.suggestions.splice(this.suggestions.indexOf(suggestion) ,1);
    }

}