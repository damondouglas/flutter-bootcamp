import 'story.dart';

/*
Story(
  '',
  '',
  [

  ]
),
 */

class StoryBrain {
  StoryBrain() {
    this.current = _fullStory;
  }
  void reset() {
    this.current = _fullStory;
  }

  Story current;
  var _fullStory = Story('You walk along a forest and hear a sound.', '', [
    Story(
        'You walk toward the sound',
        'As you get closer, you discover that it is a singing butterfly.  Her voice is soothing and bright.',
        [
          Story(
              'You sing along to the melody.',
              'After a little while the singing butterfly stops singing and gives you a blank stare.',
              [
                Story('You ignore her and continue singing.',
                    'As you continue humming along remembering the tune.', [
                  Story('She rolls her eyes and flies away.', '', [
                    Story('THE END', '', []),
                  ]),
                ]),
                Story('You stop.', 'She smiles and starts singing again.', [
                  Story('THE END', '', []),
                ]),
              ]),
          Story(
              'You sit by the tree and listen to her.',
              'She notices you watching and begins to sing louder and more beautifully.  She slowly flies toward you.',
              [
                Story('You stand up in excitement.',
                    'Your sudden movement scared her away and she flew off.', [
                  Story('THE END', '', []),
                ]),
                Story(
                    'You close your eyes.',
                    'Suddenly her soft velvet feet perch on your nose.  She blows a fragrent scent into your nose.',
                    [
                      Story(
                          'You wake up.',
                          'You are no longer in the forest but in your bed.  You still smell the fragrence and hear the beautiful music.  For all the days of your life this follows you and you live happliy ever after.',
                          [
                            Story('THE END', '', []),
                          ]),
                    ]),
              ]),
        ]),
    Story(
        'You walk away from the sound',
        'As you walk away from the sound, your friend asks you if you heard the beautiful singing butterfly.  "What butterfly?" you ask.  "Oh well maybe next time," she replies.',
        [
          Story('THE END', '', []),
        ]),
  ]);
}
