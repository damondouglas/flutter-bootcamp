final emptyStory = Story('', '', []);

class Story {
  Story(this.title, this.description, this.choices);
  final String title;
  final String description;
  final Iterable<Story> choices;
  Story choose(String title) {
    if (title.isEmpty) {
      return emptyStory;
    }
    if (choices.isEmpty) {
      return emptyStory;
    }

    return choices.firstWhere((Story element) => element.title == title);
  }

  bool get isTheEnd => choices.isEmpty;
}
