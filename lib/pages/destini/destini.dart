import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';
import 'package:londonappbrewery_flutter_bootcamp/pages/destini/story_brain.dart';

import 'story.dart';

class Destini extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: StoryPage(),
      theme: ThemeData.dark(),
    );
  }
}

final storyBrain = StoryBrain();

class StoryPage extends StatefulWidget {
  _StoryPageState createState() => _StoryPageState();
}

class _StoryPageState extends State<StoryPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: ExactAssetImage('images/destini/background.jpg'),
            fit: BoxFit.fill,
          ),
        ),
        padding: EdgeInsets.symmetric(vertical: 50.0, horizontal: 15.0),
        constraints: BoxConstraints.expand(),
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Expanded(
                flex: 12,
                child: Center(
                  child: Text(
                    storyBrain.current.title.isEmpty
                        ? ''
                        : storyBrain.current.title,
                    style: TextStyle(
                      fontSize: 35.0,
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 12,
                child: Center(
                  child: Text(
                    storyBrain.current.description.isEmpty
                        ? ''
                        : storyBrain.current.description,
                    style: TextStyle(
                      fontSize: 25.0,
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 12,
                child: buildChoices(context),
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget buildChoices(BuildContext context) {
    var children = storyBrain.current.choices.map((Story story) {
      return FlatButton(
        onPressed: () {
          setState(() {
            storyBrain.current = storyBrain.current.choose(story.title);
            _showDialog(context);
          });
        },
        child: Center(
          child: Text(
            story.title,
            style: TextStyle(
              fontSize: 25.0,
            ),
          ),
        ),
      );
    }).toList();

    if (MediaQuery.of(context).size.width > 800) {
      return Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: children,
      );
    } else {
      return Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: children,
      );
    }
  }

  void _showDialog(BuildContext context) {
    if (storyBrain.current.choices.isEmpty) {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text(
                'THE END',
                textAlign: TextAlign.center,
              ),
              actions: <Widget>[
                FlatButton(
                  onPressed: () {
                    setState(() {
                      storyBrain.reset();
                      Navigator.of(context).pop();
                    });
                  },
                  child: Text(
                    'START OVER',
                  ),
                )
              ],
            );
          });
    }
  }
}
