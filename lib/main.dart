import 'package:flutter_web/material.dart';
import 'package:londonappbrewery_flutter_bootcamp/pages/destini/destini.dart';
import 'package:londonappbrewery_flutter_bootcamp/pages/quiz/quiz.dart';
import 'pages/flutter_layouts_challenge/flutter_layouts_challenge.dart';
import 'pages/dicee/dicee.dart';
import 'pages/magicball/magicball.dart';
import 'pages/xylophone/xylophone.dart';
import 'pages/home.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      routes: {
        '/': (context) => Home(),
        '/flutter-layouts-challenge': (context) => FlutterLayoutsChallange(),
        '/dicee': (context) => DicePage(),
        '/magicball': (context) => BallPage(),
        '/xylophone': (context) => XylophonePage(),
        '/quiz': (context) => Quizzler(),
        '/destini': (context) => Destini(),
      },
      title: 'London Appbrewery Flutter Bootcamp',
    );
  }
}
