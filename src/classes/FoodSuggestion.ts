export default class FoodSuggestion {
  public suggestion: string;
  public link: string;

  public constructor(suggestion: string, link: string) {
    this.suggestion = suggestion;
    this.link = link;
  }

  public reset() {
    this.suggestion = '';
    this.link = '';
  }
}
