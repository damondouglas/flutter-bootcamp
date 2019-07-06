import 'package:flutter_web/material.dart';
import 'dart:html';
import 'package:londonappbrewery_flutter_bootcamp/home_icons.dart' as icons;

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        iconTheme: IconThemeData(),
        title: Text('London App Brewery Flutter Bootcamp Challenges'),
        actions: <Widget>[
          IconButton(
            onPressed: () {
              var url =
                  "https://github.com/damondouglas/londonappbrewery-flutter-bootcamp";
              window.open(url, 'GitHub');
            },
            icon: Icon(icons.Home.github_circled),
            color: Colors.white,
          ),
        ],
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          FlatButton(
            child: Text('1. Flutter Layouts Challenge'),
            onPressed: () {
              Navigator.pushNamed(context, '/flutter-layouts-challenge');
            },
          ),
          FlatButton(
            child: Text('2. Dicee App'),
            onPressed: () {
              Navigator.pushNamed(context, '/dicee');
            },
          ),
          FlatButton(
            child: Text('3. Magic 8 Ball'),
            onPressed: () {
              Navigator.pushNamed(context, '/magicball');
            },
          ),
          FlatButton(
            child: Text('4. Xylophone'),
            onPressed: () {
              Navigator.pushNamed(context, '/xylophone');
            },
          ),
          FlatButton(
            child: Text('5. Quizzler'),
            onPressed: () {
              Navigator.pushNamed(context, '/quiz');
            },
          ),
          FlatButton(
            child: Text('6. Destini'),
            onPressed: () {
              Navigator.pushNamed(context, '/destini');
            },
          ),
        ],
      ),
    );
  }
}
