import {Component, Vue} from 'vue-property-decorator';
import FoodSuggestion from '@/classes/FoodSuggestion'
import * as $ from 'jquery';

@Component ({
    name: 'FoodChoice',
})
export default class FoodChoice extends Vue {

    private suggestions: FoodSuggestion[] = [];
    private newSuggestion: FoodSuggestion = new FoodSuggestion('','');

    constructor() {
      super();
      this.suggestions.push(new FoodSuggestion('Burger', 'www.burger.de'));
      this.suggestions.push(new FoodSuggestion('Floisch', 'www.floisch.de'));
    }

    private addSuggestion() {
        if (this.newSuggestion.suggestion == '') return;
        this.suggestions.push(new FoodSuggestion(this.newSuggestion.suggestion, this.newSuggestion.link));
        this.newSuggestion.reset();
        $( "#name" ).focus();
    }

    private deleteSuggestion(index: number) {
        this.suggestions.splice(index , 1);
    }

}
